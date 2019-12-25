$("#docType").select2();
var browse = new Set();
function generateBrowse(param){
    if(param != ""){
if(browse.has(param)){
    swal(param+" Already you added it choose anather one");
}else{
    browse.add(param);
   
    var title =  $("#docType option:selected").text();
    var addControl = '<div class="row">';
    addControl +='<div class="form-group">';
             addControl +='<label for="imgfile">'+title+'</label>';
             addControl +='<input type="hidden" name="docIds[]" value="'+param+'">'
             addControl +='<input type="file" name="images[]" id="imgInp" class="form-control" accept="image/*"  required> </div> </div>';
     $('#display').before(addControl); 
}   
    }
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}
$("#imgInp").on('change',function(){
    readURL(this);
});
$('#uploadDocuments').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        url: url + 'uploadDocuments.php',
        type: 'POST',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response) {
            console.log(response);
            if (response.Responsecode == 200) {
             
                swal({
                    position: 'top-end',
                    icon: 'success',
                    title: response.Message,
                    button: false,
                    timer: 1500
                })
            } else {
                swal(response.Message);
            }
        }
    });
});