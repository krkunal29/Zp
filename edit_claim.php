<style>
.error{
    color: red;
}
</style>
<div class="row">

    <div class="card">
        <div class="card-header">
            <h3>Update Claim</h3></div>
        <div class="card-body">
            <form class="forms-sample" id="claimform" method="POST">

                <div class="row">
                  <div class="col-md-4">
                      <div class="form-group">
                        <input type="hidden" id="claimsId" name="claimsId" />
                          <label for="productDesc">Claim Name</label>
                          <input type="text" class="form-control" id="claim" name="claim" placeholder="Enter Claim">
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
<script src="validate/claim_validate.js"></script>
<script>
function loadDetails(claim){

  $('#claimsId').val(claim.ClaimTypesID);
  $("#claim").val(claim.claim);

}
loadDetails(details);
$('#claimform').on('submit', function(e) {
    e.preventDefault();
    var returnVal = $("#claimform").valid();
    if (returnVal) {
        $.ajax({
        url: url + 'editclaim.php',
        type: 'POST',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response) {

            if (response.Responsecode == 200) {
              claimmasterList.set(response.Data.ClaimTypesID,response.Data);
              showclaimmaster(claimmasterList);
              goback();
              swal(response.Message);
            } else {
                swal(response.Message);
            }
        }
    });
  }
});
</script>
