<style>
.error{
    color: red;
}
</style>
<div class="row">

    <div class="card">
        <div class="card-header">
            <h3>Update  Origanisation Type</h3></div>
        <div class="card-body">
            <form class="forms-sample" id="origanisationform" method="POST">

                <div class="row">
                  <div class="col-md-4">
                      <div class="form-group">
                        <input type="hidden" id="OriganisationTypeId" name="OriganisationTypeId" />
                          <label for="productDesc">Origanisation Type</label>
                          <input type="text" class="form-control" id="origanisationtype" name="origanisationtype" placeholder="Enter Origanisation Type">
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
<script src="validate/origanisationtype_validate.js"></script>
<script src="saveupdate/edit_origanisationtype.js"></script>
<script>
function loadDetails(origanisation){
  $('#origanisationtype').val(origanisation.OrganizationTypeName);
  $("#OriganisationTypeId").val(origanisation.OrganizationTypeID);

}
loadDetails(details);

</script>
