<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once("../connection.php");
mysqli_set_charset($conn, 'utf8');
$response = null;
$records  = null;
extract($_POST);
if(isset($_POST['emailId'])){
$query    = "SELECT * FROM contactmaster WHERE email = '$emailId'";
$jobQuery = mysqli_query($conn, $query);
if ($jobQuery != null) {
    $academicAffected = mysqli_num_rows($jobQuery);
    if ($academicAffected ==1) {
    $academicResults = mysqli_fetch_assoc($jobQuery);
            $records = $academicResults;
         $response = array(
            'Message' => "User Data fetched Successfully",
            "Data" => $records,
            'Responsecode' => 200
        );
    } else {
        $response = array(
            'Message' => "Register First",
            "Data" => $records,
            'Responsecode' => 201
        );
    }
} else {
    $response = array(
        'Message' => mysqli_error($conn),
        "Data" => $records,
        'Responsecode' => 403
    );
}
}
else{
    $response = array(
        'Message' => "Parameter Missing",
        'Responsecode' => 404
    );
}
mysqli_close($conn);
exit(json_encode($response));
?>