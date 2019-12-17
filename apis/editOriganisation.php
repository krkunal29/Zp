<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
include "../connection.php";
mysqli_set_charset($conn, 'utf8');
$response = null;
$records  = null;
extract($_POST);
if (isset($_POST['origanisation']) && isset($_POST['origanisationtype']) && isset($_POST['organizationID'])) {
    $sql          = "UPDATE OrganizationMaster SET OrganizationName='$origanisation',OrganizationTypeID='$origanisationtype' WHERE OrganizationID = $organizationID";
    // echo $sql;
    $query        = mysqli_query($conn, $sql);
    $rowsAffected = mysqli_affected_rows($conn);
    if ($rowsAffected == 1) {
      $sql = "SELECT om.OrganizationID,om.OrganizationName,om.OrganizationTypeID,qt.OrganizationTypeName FROM OrganizationMaster om
      LEFT JOIN OrganizationType qt ON om.OrganizationTypeID =qt.OrganizationTypeID WHERE om.OrganizationID = $organizationID";
      $jobQuery1 = mysqli_query($conn, $sql);
      if ($jobQuery1 != null) {
          $academicAffected = mysqli_num_rows($jobQuery1);
          if ($academicAffected > 0) {
              $academicResults = mysqli_fetch_assoc($jobQuery1);
              $records       = $academicResults;
              $response        = array(
                  'Message' => "Organization  updated successfully",
                  "Data" => $records,
                  'Responsecode' => 200
              );
          } else {
              $response = array(
                  'Message' => "Please Add data first",
                  "Data" => $records,
                  'Responsecode' => 300
              );
          }
      }
    } else {
        $response = array(
            "Message" => mysqli_error($conn) . "No data to change or user not present",
            "Responsecode" => 500
        );
    }
} else {
    $response = array(
        'Message' => "Parameter missing",
        'Responsecode' => 402
    );
}
mysqli_close($conn);
exit(json_encode($response));
?>
