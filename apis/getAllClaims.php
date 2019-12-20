<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once("../connection.php");
mysqli_set_charset($conn,'utf8');
$response=null;
$records=null;
extract($_POST);
if(isset($_POST['userId'])){
$query = "SELECT uc.claimId,uc.claimDate,cs.ClaimStatusDescription,cm.fname,cm.lname,cm.email,cm.phone,ct.claim,uc.contactId
FROM userclaims uc LEFT JOIN claimstatus cs ON cs.ClaimStatusId = uc.claimStatusId 
LEFT JOIN contactmaster cm ON cm.contactid = uc.contactId 
LEFT JOIN claimtypes ct ON ct.ClaimTypesID = uc.claimTypeId WHERE uc.userId = $userId";
$jobQuery = mysqli_query($conn,$query);
if($jobQuery!=null)
    {
	$academicAffected=mysqli_num_rows($jobQuery);
	 if($academicAffected>0)
		{
		while($academicResults = mysqli_fetch_assoc($jobQuery))
				{
					$records[]=$academicResults;
                }
            $response = array('Message'=>"All claim Data fetched Successfully","Data"=>$records ,'Responsecode'=>200);
		}else{
            $response = array('Message'=>"Please Add data first","Data"=>$records ,'Responsecode'=>205);
        }
	}else{
        $response = array('Message'=>mysqli_error($conn),"Data"=>$records ,'Responsecode'=>400);
    }
}else{
    $response = array('Message'=>"Parameter Missing" ,'Responsecode'=>403);
}
mysqli_close($conn);
exit(json_encode($response));
?>
