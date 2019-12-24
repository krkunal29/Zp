<?php
if(isset($_FILES["images"]["type"])){
    // File upload configuration
    $targetDir = "upload/";
    $allowTypes = array('jpg','png','jpeg','gif');

    $images_arr = array();
    foreach($_FILES['images']['name'] as $key=>$val){
        $image_name = $_FILES['images']['name'][$key];
        $tmp_name   = $_FILES['images']['tmp_name'][$key];
        $size       = $_FILES['images']['size'][$key];
        $type       = $_FILES['images']['type'][$key];
        $error      = $_FILES['images']['error'][$key];

        // File upload path
        $fileName = basename($_FILES['images']['name'][$key]);
        $targetFilePath = $targetDir . $fileName;

        // Check whether file type is valid
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
    $response = array('Message'=>"Inserted");

}else{
    $response = array('Message'=>"Not set");
}
exit(json_encode($response));
?>
