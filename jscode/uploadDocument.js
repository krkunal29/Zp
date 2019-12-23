$("#docType").select2();
var browse = new Set();
function generateBrowse(param){
    console.log(param);
if(browse.has(param)){
alert('Aleready add');
}else{
    browse.add(param);
    console.log(browse);
    var addControl = '<div class="row">';
    addControl +='<div class="form-group">';
             addControl +='<label for="imgfile">Aadhar Card</label>';
             addControl +='<input type="file" name="images[]"  class="form-control" accept="image/*" multiple  required> </div> </div>';
     $('#display').before(addControl); 
}   
}

$(document).ready(function(){
    $('#uploadDocumnets').ajaxForm({
        // target:'#imagesPreview',
        // beforeSubmit:function(){
        //     $('#uploadStatus').html('<img src="uploading.gif"/>');
        // },
        success:function(response){
            console.log(response);
            $('#images').val('');
            // $('#uploadStatus').html('');
        },
        error:function(){
            // $('#uploadStatus').html('Images upload failed, please try again.');
        }
    });
});