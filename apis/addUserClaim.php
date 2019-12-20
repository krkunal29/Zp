<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once("../connection.php");
mysqli_set_charset($conn,'utf8');
$response=null;
$records=null;
extract($_POST);
if(isset($_POST['userId']) && isset($_POST['claimTypeId']) && isset($_POST['claimDescription']) && isset($_POST['contactId'])){
    $claimDate = date("Y-m-d");
    $claimStatusId = 1;
    $claimDescription = mysqli_real_escape_string($conn,$claimDescription);
    $query = "INSERT INTO userclaims(userId,claimDate,claimStatusId,claimTypeId,claimDescription,contactId) 
    VALUES($userId,'$claimDate',$claimStatusId,$claimTypeId,'$claimDescription',$contactId)";
    $jobQuery = mysqli_query($conn,$query);
if($jobQuery==1)
    {
        $last_id = mysqli_insert_id($conn);
        $s = strval($last_id);
        $sql = "SELECT uc.claimId,uc.claimDate,cs.ClaimStatusDescription,cm.fname,cm.lname,cm.email,cm.phone,ct.claim,uc.contactId
        FROM userclaims uc LEFT JOIN claimstatus cs ON cs.ClaimStatusId = uc.claimStatusId 
        LEFT JOIN contactmaster cm ON cm.contactid = uc.contactId 
        LEFT JOIN claimtypes ct ON ct.ClaimTypesID = uc.claimTypeId WHERE uc.userId = $userId AND uc.claimId = $s";
        $jobQuery1 = mysqli_query($conn,$sql);
        if($jobQuery1!=null)
    {
	$academicAffected=mysqli_num_rows($jobQuery1);
	 if($academicAffected>0)
		{
	$academicResults = mysqli_fetch_assoc($jobQuery1);
	$records=$academicResults;
    $response = array('Message'=>"Claim generated successfull now upload a documnets","Data"=>$records ,'Responsecode'=>200);
		}else{
            $response = array('Message'=>"Please Add data first","Data"=>$records ,'Responsecode'=>202);
        }
	}else{
        $response = array('Message'=>"Refresh a page","Data"=>$records ,'Responsecode'=>207);
    }

    }else{
        $response = array('Message'=>mysqli_error($conn),"Data"=>$records ,'Responsecode'=>403);
    }
}else{
    $response = array('Message'=>"Parameter Missing" ,'Responsecode'=>500);
}
mysqli_close($conn);
exit(json_encode($response));
?>
