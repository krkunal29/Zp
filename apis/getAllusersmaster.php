<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once("../connection.php");
mysqli_set_charset($conn,'utf8');
$response=null;
$records=null;
$query = "SELECT um.userId,um.OrganizationID,um.roleId,um.emailId,um.contactNumber,um.contactId,
om.OrganizationName,om.OrganizationTypeID,rm.role,cm.fname,cm.mname,cm.lname,cm.country,
cm.state,cm.city,cm.pincode,cm.pincode,cm.address1,cm.address2,cm.address3,cm.statuscode
FROM user_master um LEFT JOIN OrganizationMaster om ON om.OrganizationID =um.OrganizationID
LEFT JOIN rolemaster rm ON rm.roleId =um.roleId
LEFT JOIN contactmaster cm ON cm.contactid = um.contactId";
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
            $response = array('Message'=>"All User Data fetched Successfully","Data"=>$records ,'Responsecode'=>200);
		}else{
            $response = array('Message'=>"Please Add data first","Data"=>$records ,'Responsecode'=>200);
        }
	}else{
        $response = array('Message'=>mysqli_error($conn),"Data"=>$records ,'Responsecode'=>403);
    }
mysqli_close($conn);
exit(json_encode($response));
?>
