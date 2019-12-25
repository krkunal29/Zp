<style>
.error{
    color: red;
}
</style>
<div class="row">

    <div class="card">
        <div class="card-header">
            <h3>Add New User</h3></div>
        <div class="card-body">
            <form class="forms-sample" id="contactform" method="POST">
                <!-- <input type="hidden" name="userId1" id="userId1"> -->
                <input type="hidden" name="contactId" id="contactId">
                <div class="row">
                  <div class="col-md-4">
                      <div class="form-group">
                          <label for="productDesc">First Name</label>
                          <input type="text"  class="form-control" name="fname" id="fname" value="" placeholder="Enter First Name">
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-group">
                          <label for="productDesc">Middle Name</label>
                          <input type="text"  class="form-control" name="mname" id="mname" value="" placeholder="Enter Middle Name">
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-group">
                          <label for="productDesc">Last Name</label>
                          <input type="text"  class="form-control" name="lname" id="lname" value="" placeholder="Enter Last Name">
                      </div>
                  </div>

                </div>


                <div class="row">
                  <div class="col-md-4">
                      <div class="form-group">
                          <label for="productDesc">Email Address</label>
                          <input  class="form-control" type="email" name="emailid" id="emailid" placeholder="Enter Email Address">
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-group">
                          <label for="productDesc">Contact Number</label>
                          <input  class="form-control" type="text" name="contactno" id="contactno" placeholder="Enter Contact Number">
                      </div>
                  </div>


                  <div class="col-md-4">
                      <div class="form-group">
                          <label for="productDesc">Pincode</label>
                        <input type="text"  class="form-control" name="pincode" id="pincode" value="" placeholder="Enter Pincode">
                      </div>
                  </div>
                </div>
                <div class="row">

                  <div class="col-md-3">
                      <div class="form-group">
                          <label for="productDesc">Country</label>
                          <input type="text"  class="form-control" name="country" id="country" value="" placeholder="Enter Country">
                      </div>
                  </div>
                  <div class="col-md-3">
                      <div class="form-group">
                          <label for="productDesc">State</label>
                          <input type="text"  class="form-control" name="state" id="state" value="" placeholder="Enter State">
                      </div>
                  </div>
                  <div class="col-md-3">
                      <div class="form-group">
                          <label for="productDesc">City</label>
                          <input type="text"  class="form-control" name="city" id="city" value="" placeholder="Enter City">
                      </div>
                  </div>
                  <div class="col-md-3">
                      <div class="form-group">
                          <label for="productDesc">Status</label>
                          <select class="form-control select2" id="userstatus" name="userstatus">
                            <option value="1">Active</option>
                            <option value="0">Inactive</option>
                          </select>
                      </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-4">
                    <div class="form-group">
                    <label for="productDesc">Primary Address</label>
                    <textarea name="address1" id="address1" class="form-control"  rows="3" cols="80" placeholder="Primary Address"></textarea>
                  </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                    <label for="productDesc">Secondary Address</label>
                    <textarea name="address2" id="address2" rows="3"  class="form-control" cols="80" placeholder="Secondary Address"></textarea>
                  </div>
                  </div>
                  <div class="col-sm-4">
                    <div class="form-group">
                      <label for="productDesc">Address</label>
                      <textarea name="address3" id="address3"  class="form-control" rows="3" cols="80" placeholder=" Address"></textarea>
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
<script src="validate/contact_validate.js"></script>
<script src="saveupdate/edit_contactmaster.js"></script>
<script>

$("#userstatus").select2();

function loadDetails(details){
   // console.log(details);
  // $('#userId1').val(details.userId);
  $('#contactId').val(details.contactid);
  // $("#roleid").val(details.roleId).trigger('change');
  // $('#origanisationid').val(details.OrganizationID).trigger('change');
  $("#emailid").val(details.email);
  $('#contactno').val(details.phone);
  $("#fname").val(details.fname);
  $('#mname').val(details.mname);
  $("#lname").val(details.lname);
  $('#userstatus').val(details.statuscode).trigger('change');;
  $("#country").val(details.country);
  $('#state').val(details.state);
  $("#city").val(details.city);
  $('#pincode').val(details.pincode);
  $("#address1").val(details.address1);
  $('#address2').val(details.address2);
  $("#address3").val(details.address3);


}
loadDetails(details);

</script>
