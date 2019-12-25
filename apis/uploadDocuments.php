<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
require_once("../connection.php");
mysqli_set_charset($conn,'utf8');
$response=null;
$records=null;
extract($_POST);
if(isset($_FILES["images"]["type"]) && isset($_POST['claimIdU']) && isset($_POST['docIds'])){
    // File upload configuration
    $targetDir = "upload/";
    $allowTypes = array('jpg','png','jpeg','gif','pdf');

    $images_arr = array();
    $docids = $_POST['docIds'];
    $i=0;
    foreach($_FILES['images']['name'] as $key=>$val){
        $image_name = $_FILES['images']['name'][$key];
        $tmp_name   = $_FILES['images']['tmp_name'][$key];
        $size       = $_FILES['images']['size'][$key];
        $type       = $_FILES['images']['type'][$key];
        $error      = $_FILES['images']['error'][$key];
        // File upload path
        $fileName = basename($_FILES['images']['name'][$key]);
        $targetFilePath = $targetDir . $fileName;
        $docid = $docids[$i];
        // Check whether file type is valid
        $sql   = "INSERT INTO  claimdocuments(claimId,imagePath,DocTypeID) VALUES($claimIdU,'$targetFilePath',$docid)";
        $query = mysqli_query($conn, $sql);
        $i++;
        $rowsAffected = mysqli_affected_rows($conn);
        if($rowsAffected == 1)
		{
       
        $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
        if(in_array($fileType, $allowTypes)){
            // Store images on the server
            if(move_uploaded_file($_FILES['images']['tmp_name'][$key],$targetFilePath)){
                $images_arr[] = $targetFilePath;
                $response = array('Message'=>"in moved");
            }
            $response = array('Message'=>"in outer");
        }
    }
    }
    $response = array('Message'=>"Document Added Successfully now submit claim for next process",'Responsecode'=>200);

}else{
    $response = array('Message'=>"Parameter Missing",'Responsecode'=>400);
}
exit(json_encode($response));
?>
