<style>
.error{
    color: red;
}
</style>
<div class="row">

    <div class="card">
        <div class="card-header">
            <h3>Add New Documents</h3></div>
        <div class="card-body">
            <form class="forms-sample" id="documentsform" method="POST">
                <input type="hidden" id="documentId" name="documentId" value="">
                <div class="row">
                  <div class="col-md-4">
                      <div class="form-group">

                          <label for="productDesc">Documents</label>
                          <input type="text" class="form-control" id="documents" name="documents" placeholder="Enter Documents Name">
                      </div>
                  </div>

                </div>
                <button type="submit" class="btn btn-primary mr-2">Submit</button>
                <button class="btn btn-light" type="button" onclick="goback()">Cancel</button>
            </form>
        </div>
    </div>
</div>
<script src="js/jquery.validate.js"></script>
<script src="validate/documents_validate.js"></script>
<script>
function loadDetails(document){

  $('#documentId').val(document.DocTypeID);
  $("#documents").val(document.DocTypeDesc);

}
loadDetails(details);
$('#documentsform').on('submit', function(e) {
    e.preventDefault();
    var returnVal = $("#documentsform").valid();
    if (returnVal) {
        $.ajax({
        url: url + 'editDocuments.php',
        type: 'POST',
        data:new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response) {

            if (response.Responsecode == 200) {
                documentmasterList.set(response.Data.DocTypeID,response.Data);
                showdocumentmaster(documentmasterList);
                goback();
                swal(response.Message);
            } else {
                alert(response.Message);
            }
        }
    });
   }
});
</script>
