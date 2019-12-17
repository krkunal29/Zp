<style>
.error{
    color: red;
}
</style>
<div class="row">

    <div class="card">
        <div class="card-header">
            <h3>Update  Roles</h3></div>
        <div class="card-body">
            <form class="forms-sample" id="rolesform" method="POST">

                <div class="row">
                  <div class="col-md-4">
                      <div class="form-group">
                        <input type="hidden" id="rolesId" name="rolesId" />
                          <label for="productDesc">Roles Name</label>
                          <input type="text" class="form-control" id="role" name="role" placeholder="Enter Roles">
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
<script src="validate/roles_validate.js"></script>
<script>
function loadDetails(roles){

  $('#rolesId').val(roles.roleId);
  $("#role").val(roles.role);

}
loadDetails(details);
$('#rolesform').on('submit', function(e) {
    e.preventDefault();
    var returnVal = $("#rolesform").valid();
    if (returnVal) {
        $.ajax({
        url: url + 'editrole.php',
        type: 'POST',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response) {

            if (response.Responsecode == 200) {
              rolemasterList.set(response.Data.roleId,response.Data);
              showrolemaster(rolemasterList);
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
