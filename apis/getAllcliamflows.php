<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once("../connection.php");
mysqli_set_charset($conn, 'utf8');
$response = null;
$records  = null;
$query    = "SELECT * FROM claimtypeflow ctf INNER JOIN rolemaster rm ON rm.roleId = ctf.RoleID INNER JOIN claimtypes ct ON ct.ClaimTypesID = ctf.ClaimTypeID";
$jobQuery = mysqli_query($conn, $query);
if ($jobQuery != null) {
    $academicAffected = mysqli_num_rows($jobQuery);
    if ($academicAffected > 0) {
        while ($academicResults = mysqli_fetch_assoc($jobQuery)) {
            $records[] = $academicResults;
        }
        $response = array(
            'Message' => "All flow order Data fetched Successfully",
            "Data" => $records,
            'Responsecode' => 200
        );
    } else {
        $response = array(
            'Message' => "Please Add data first",
            "Data" => $records,
            'Responsecode' => 290
        );
    }
} else {
    $response = array(
        'Message' => mysqli_error($conn),
        "Data" => $records,
        'Responsecode' => 403
    );
}
mysqli_close($conn);
exit(json_encode($response));
?>