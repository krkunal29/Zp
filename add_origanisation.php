<style>
.error{
    color: red;
}
</style>
<div class="row">

    <div class="card">
        <div class="card-header">
            <h3>Add New Origanisation</h3></div>
        <div class="card-body">
            <form class="forms-sample" id="origanisationmainform" method="POST">

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
                          <!-- <label for="productDesc">Origanisation Type</label>
                          <input type="text" class="form-control" id="origanisationtype" name="origanisationtype" placeholder="Enter Origanisation Type"> -->
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

</script>
<script src="saveupdate/add_origanisation.js"></script>
