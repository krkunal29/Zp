<style>
.error{
    color: red;
}
</style>
<div class="row">

    <div class="card">
        <div class="card-header">
            <h3>Add Update Origanisation</h3></div>
        <div class="card-body">
            <form class="forms-sample" id="origanisationmainform" method="POST">
                <input type="hidden" id="organizationID" name="organizationID" />
                <div class="row">
                  <div class="col-md-4">
                      <div class="form-group">

                          <label for="productDesc">Origanisation Name</label>
                          <input type="text" class="form-control" id="origanisation" name="origanisation" placeholder="Enter Origanisation Type">
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-group">
                        <label for="productDesc">Origanisation Type</label>
                        <select class="form-control select2" id="origanisationtype" name="origanisationtype">

                        </select>

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
<script src="validate/origanisation_validate.js"></script>
<script>
function loadoriganisation()
{

var html = '<option value="">Select Origanisation Type</option>';
for(let k of OriganisationTypeList.keys()){
  let origanisations = OriganisationTypeList.get(k);
  // console.log(origanisations);
   html +='<option value='+origanisations.OrganizationTypeID+'>'+origanisations.OrganizationTypeName+'</option>';
}
$("#origanisationtype").html(html);
$("#origanisationtype").select2();
}
loadoriganisation();
function loadDetails(origanisation){
  // console.log(origanisation);
  $("#organizationID").val(origanisation.OrganizationID);
  $('#origanisation').val(origanisation.OrganizationName);
  $("#origanisationtype").val(origanisation.OrganizationTypeID).trigger('change');

}
loadDetails(details);

$('#origanisationmainform').on('submit', function(e) {
    e.preventDefault();
    var returnVal = $("#origanisationmainform").valid();
    if (returnVal) {
        $.ajax({
        url: url + 'editOriganisation.php',
        type: 'POST',
        data:new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response) {

            if (response.Responsecode == 200) {
                OriganisationList.set(response.Data.OrganizationID,response.Data);
                showOriganisation(OriganisationList);
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
