<style>
.error{
    color: red;
}
</style>
<div class="row">

    <div class="card">
        <div class="card-header">
            <h3>Add New Origanisation Type</h3></div>
        <div class="card-body">
            <form class="forms-sample" id="origanisationform" method="POST">

                <div class="row">
                  <div class="col-md-4">
                      <div class="form-group">

                          <label for="productDesc">Origanisation Type</label>
                          <input type="text" class="form-control" id="origanisationtype" name="origanisationtype" placeholder="Enter Origanisation Type">
                      </div>
                  </div>
                    <!-- <div class="col-md-4">
                        <div class="form-group">
                            <label for="productDesc">Tax Value</label>
                            <input type="text" class="form-control" id="taxval" name="tax" placeholder="Enter Tax Value">
                        </div>
                    </div> -->
                </div>
                <button type="submit" class="btn btn-primary mr-2">Submit</button>
                <button class="btn btn-light" type="button" onclick="goback()">Cancel</button>
            </form>
        </div>
    </div>
</div>
<script src="js/jquery.validate.js"></script>
<script src="validate/origanisationtype_validate.js"></script>
<script>

$('#origanisationform').on('submit', function(e) {
    e.preventDefault();
    var returnVal = $("#origanisationform").valid();
    if (returnVal) {
        $.ajax({
        url: url + 'addOriganisationType.php',
        type: 'POST',
        data:new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response) {

            if (response.Responsecode == 200) {
                OriganisationTypeList.set(response.Data.OrganizationTypeID,response.Data);
                showOriganisationType(OriganisationTypeList);
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
