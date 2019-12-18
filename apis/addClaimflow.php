<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once("../connection.php");
mysqli_set_charset($conn, 'utf8');
$response = null;
$records  = null;
extract($_POST);
if (isset($_POST['claimId']) && isset($_POST['roleId']) && isset($_POST['flowOrder'])) {
    $query    = "INSERT INTO claimtypeflow(ClaimTypeID,RoleID,FlowOrder) VALUES($claimId,$roleId,$flowOrder)";
    $jobQuery = mysqli_query($conn, $query);
    if ($jobQuery == 1)
    {
        $last_id   = mysqli_insert_id($conn);
        $s         = strval($last_id);
        $sql       = $query = "SELECT * FROM claimtypeflow ctf INNER JOIN rolemaster rm ON rm.roleId = ctf.RoleID INNER JOIN ClaimTypes ct ON ct.ClaimTypesID = ctf.ClaimTypeID WHERE ctf.ClaimTypeFlowID = $s";
        $jobQuery1 = mysqli_query($conn, $sql);

        if ($jobQuery1 != null)
        {
            $academicAffected = mysqli_num_rows($jobQuery1);
            if ($academicAffected > 0) {
                $academicResults = mysqli_fetch_assoc($jobQuery1);
                $records         = $academicResults;
                $response        = array(
                    'Message' => "Flow Data added Successfully",
                    "Data" => $records,
                    'Responsecode' => 200
                );
            }
             else
            {
                $response = array(
                    'Message' => "Please Add data first",
                    "Data" => $records,
                    'Responsecode' => 202
                );
            }
        } else {
            $response = array(
                'Message' => "Refresh a page",
                "Data" => $records,
                'Responsecode' => 203
            );
        }

    } else {
        $response = array(
            'Message' => mysqli_error($conn),
            "Data" => $records,
            'Responsecode' => 403
        );
    }
} else {
    $response = array(
        'Message' => "Parameter Missing",
        'Responsecode' => 500
    );
}
mysqli_close($conn);
exit(json_encode($response));
?>
