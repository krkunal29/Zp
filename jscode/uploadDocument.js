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
             addControl +='<input type="file" name="images[]" id="imgInp" class="form-control gallery-photo-add" accept="image/*"  required> </div> </div>';
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
$(function() {
    console.log('its working');
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {
console.log(input);
        if (input.files) {
            var filesAmount = input.files.length;

           
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img class="img-fluid rounded" height="100px" width="159px">')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                   // $('img').addClass('img-fluid');
                }

                reader.readAsDataURL(input.files[0]);
            
        }

    };

    $(document).on('change','.gallery-photo-add', function(e) {
        console.log(e);
        imagesPreview(this, 'div.gallery');
    });
});