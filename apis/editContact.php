<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once("../connection.php");
mysqli_set_charset($conn,'utf8');
$response=null;
$records=null;
extract($_POST);
if(isset($_POST['contactId']) &&  isset($_POST['emailid'])
&& isset($_POST['contactno']) && isset($_POST['fname']) && isset($_POST['lname'])
&& isset($_POST['country']) && isset($_POST['state']) && isset($_POST['city']) && isset($_POST['pincode'])
 && isset($_POST['userstatus']) && isset($_POST['address1']) && isset($_POST['address2']) )
 {

$fname = mysqli_real_escape_string($conn,$fname);
$mname = mysqli_real_escape_string($conn,$mname);
$lname = mysqli_real_escape_string($conn,$lname);
$emailid = mysqli_real_escape_string($conn,$emailid);
$country = mysqli_real_escape_string($conn,$country);
$state = mysqli_real_escape_string($conn,$state);
$city = mysqli_real_escape_string($conn,$city);
$address1 = mysqli_real_escape_string($conn,$address1);
$address2 = mysqli_real_escape_string($conn,$address2);
$address3 = mysqli_real_escape_string($conn,$address3);

        $query="UPDATE contactmaster SET fname='$fname',mname='$mname',
        lname='$lname',country='$country',state='$state',city='$city',
        pincode='$pincode',email='$emailid',phone='$contactno',address1='$address1',
        address2='$address2',address3='$address3',
        statuscode='$userstatus' WHERE contactid=$contactId";
    $jobQuery = mysqli_query($conn,$query);


if($jobQuery==1)
    {


        // $last_id = mysqli_insert_id($conn);
        // $s = strval($last_id);

        $sql = "SELECT * FROM contactmaster WHERE contactid = $contactId";
        // echo $sql;
        $jobQuery1 = mysqli_query($conn,$sql);
        if($jobQuery1!=null)
       {
	$academicAffected=mysqli_num_rows($jobQuery1);
	 if($academicAffected>0)
		{
	$academicResults = mysqli_fetch_assoc($jobQuery1);
	$records=$academicResults;
    $response = array('Message'=>"All contact  Data Updated Successfully","Data"=>$records ,'Responsecode'=>200);
		}
    else
    {
            $response = array('Message'=>"Please Add data first","Data"=>$records ,'Responsecode'=>200);
    }
	}else{
        $response = array('Message'=>"Refresh a page","Data"=>$records ,'Responsecode'=>200);
    }
  }


}else{
    $response = array('Message'=>"Parameter Missing" ,'Responsecode'=>500);
}
mysqli_close($conn);
exit(json_encode($response));
?>
