<link rel="stylesheet" href="dist/css/dropzone.css">
<link rel="stylesheet" href="plugins/select2/dist/css/select2.min.css">
<link rel="stylesheet" href="dist/css/style.css">
<style>
.img-fluid{
    max-width: 100%;
    height:65%
}
</style>
<div class="row" id="verifyRow">
    <div class="card">
        <div class="card-header">
            <h3>Email Verification</h3></div>
        <div class="card-body">
            <form class="forms-sample" id="emailVerify" method="POST">

                <div class="row">
                    <div class="col-md-4">
                        <div class="form-group">
                            <label for="productDesc">Enter Email Id</label>
                            <input type="email" class="form-control" id="emailId" name="emailId" placeholder="Enter email address" required>
                        </div>
                    </div>
                    <div class="col-md-4" style="display:none;">
                        <div class="form-group">

                            <label for="emailOtp">Enter OTP mentiond in Email</label>
                            <input type="text" class="form-control" id="emailOtp" name="emailOtp" placeholder="Enter OTP">
                        </div>
                    </div>
                    <div class="col-md-4">

                    </div>
                </div>
                <button type="button" class="btn btn-primary mr-2" style="display:none;">Submit</button>
                <button type="submit" class="btn btn-primary mr-2">Submit</button>
                <button class="btn btn-light" type="button" onclick="goback()">Cancel</button>
            </form>
        </div>
    </div>
</div>
<div class="row" id="register" style="display:none;">
    <div class="col-lg-4 col-md-5">
        <div class="card">
            <div class="card-body">
                <div class="text-center">
                    <img src="img/user.jpg" class="rounded-circle" width="150" />
                    <h4 class="card-title mt-10" id="userName"></h4>
                    <p class="card-subtitle" id="userSC"></p>

                </div>
            </div>
            <hr class="mb-0">
            <div class="card-body">
                <small class="text-muted d-block">Email address </small>
                <h6 id="userE">johndoe@admin.com</h6>
                <small class="text-muted d-block pt-10">Phone</small>
                <h6 id="userP">(123) 456 7890</h6>
                <small class="text-muted d-block pt-10">Address</small>
                <h6 id="userA">71 Pilgrim Avenue Chevy Chase, MD 20815</h6>
                <div class="map-box">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085452149588!3d12.953959988118836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C+Karnataka!5e0!3m2!1sen!2sin!4v1542005497600" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
                <small class="text-muted d-block pt-30">Social Profile</small>
                <br/>
                <button class="btn btn-icon btn-facebook"><i class="fab fa-facebook-f"></i></button>
                <button class="btn btn-icon btn-twitter"><i class="fab fa-twitter"></i></button>
                <button class="btn btn-icon btn-instagram"><i class="fab fa-instagram"></i></button>
            </div>
        </div>
    </div>
    <div class="col-lg-8 col-md-7">
        <div class="card">
            <ul class="nav nav-pills custom-pills" id="pills-tab" role="tablist">
                <li class="nav-item">
                    <a class="nav-link active" id="pills-setting-tab" data-toggle="pill" href="#previous-month" role="tab" aria-controls="pills-setting" aria-selected="false">User Details</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#last-month" role="tab" aria-controls="pills-profile" aria-selected="false">Add Claim</a>
                </li>

                <li class="nav-item" style="display:none;" id="item-block1">
                    <a class="nav-link" id="pills-timeline-tab" data-toggle="pill" href="#current-month" role="tab" aria-controls="pills-timeline" aria-selected="true">Upload Documents</a>
                </li>
                <li class="nav-item" id="item-block2" style="display:none;">
                    <a class="nav-link" id="finalSubmit" data-toggle="pill" href="#final_submit" role="tab" aria-controls="pills-timeline" aria-selected="true">Submit Claim</a>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade " id="current-month" role="tabpanel" aria-labelledby="pills-timeline-tab">
                    <div class="card-body">
                        <div class="profiletimeline mt-0">
                            <form class="form-horizontal" id="uploadDocuments"  method="POST" enctype="multipart/form-data">
                            <div class="row">
                                <input type="hidden" id="claimIdU" name="claimIdU">
                                <div class="col-md-8">
                            <div class="form-group">
                              <div class="form-group">
                                  <label for="example-country">Select Document</label>
                                  <select name="docType" id="docType" class="form-control select2" style="width:100%;" onchange="generateBrowse(this.value)">
                                     
                                  </select>
                              </div>

                        </div>
                        </div>
                        <div class="col-md-4"></div>
                        </div>
                                <div id="display">

                                </div>



                                <hr>
                                <button class="btn btn-success" type="submit">Upload Documents</button>
                            </form>
                            <hr>
                           
                            <div class="sl-item">
                                <div class="sl-left"> <img src="img/users/1.jpg" alt="user" class="rounded-circle" /> </div>
                                <div class="sl-right">
                                    <div><a href="javascript:void(0)" class="link">John Doe</a> <span class="sl-date">5 minutes ago</span>
                                        <p>assign a new task <a href="javascript:void(0)"> Design weblayout</a></p>
                                        <div class="row">
                                        <div class="gallery"></div>
                                            </div>

                                        <div class="like-comm">
                                            <a href="javascript:void(0)" class="link mr-10">2 comment</a>
                                            <a href="javascript:void(0)" class="link mr-10"><i class="fa fa-heart text-danger"></i> 5 Love</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr>

                        </div>
                    </div>
                </div>
                <div class="tab-pane fade " id="final_submit" role="tabpanel" aria-labelledby="pills-timeline-tab">
                    <div class="card-body">
                    <div class="form-group">
                                <label for="claimDescription">add claim description</label>
                                <textarea id="claimDescription" name="claimDescription" rows="5" class="form-control" required></textarea>
                            </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="last-month" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div class="card-body">

                        <form class="form-horizontal" id="claimDetails" enctype="multipart/form-data">
                            <div class="form-group">
                                <label for="example-country">Select Claim Type</label>
                                <select name="claimTypeId" id="claimTypeId" class="form-control select2" style="width:100%;">
                                   
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="claimDescription">add claim description</label>
                                <textarea id="claimDescription" name="claimDescription" rows="5" class="form-control" required></textarea>
                            </div>
                            <hr>
                        <h6>Hospital Details</h6>
                    <div class="row">
                        <div class="col-md-4">
                        <div class="form-group">
                                <label for="hospName">Hospital Name</label>
                                <input type="text" id="hospName" name="hospName" class="form-control">
                            </div>
                            </div>
                        <div class="col-md-4">
                        <div class="form-group">
                                <label for="hospAdd">Hospital Address</label>
                                <input type="text" id="hospAdd" name="hospAdd" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                                <label for="claimAmt">Claim Amount</label>
                                <input type="text" id="claimAmt" name="claimAmt" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                        <div class="form-group">
                                <label for="icoCharge">ICO charges</label>
                                <input type="text" id="icoCharge" name="icoCharge" class="form-control">
                            </div>
                            </div>
                        <div class="col-md-4">
                        <div class="form-group">
                                <label for="cotCharges">COT charges</label>
                                <input type="text" id="cotCharges" name="cotCharges" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group">
                                <label for="medCharges">Medicine Charges</label>
                                <input type="text" id="medCharges" name="medCharges" class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                        <div class="form-group">
                                <label for="admitDate">Admit date</label>
                                <input type="date" id="admitDate" name="admitDate" class="form-control">
                            </div>
                            </div>
                        <div class="col-md-4">
                        <div class="form-group">
                                <label for="dischargeDate">Discharge Date</label>
                                <input type="date" id="dischargeDate" name="dischargeDate" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-4">
                        
                        </div>
                    </div>
                            <button class="btn btn-success" type="submit">Add Claim</button>
                        </form>
                    </div>
                </div>
                <div class="tab-pane fade show active" id="previous-month" role="tabpanel" aria-labelledby="pills-setting-tab">
                    <div class="card-body">
                        <form class="form-horizontal">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="fname">First Name</label>
                                        <input type="text" placeholder="Johnathan" class="form-control" name="fname" id="fname">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="mname">Middle Name</label>
                                        <input type="text" placeholder="Johnathan Doe" class="form-control" name="mname" id="mname">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="lname">Last Name</label>
                                        <input type="text" placeholder="Johnathan Doe" class="form-control" name="lname" id="lname">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="useremail">Email</label>
                                <input type="email" placeholder="johnathan@admin.com" class="form-control" name="useremail" id="useremail">
                            </div>
                            <div class="form-group">
                                <label for="userphone">Phone No</label>
                                <input type="text" placeholder="123 456 7890" id="userphone" name="userphone" class="form-control">
                            </div>

                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="userCountry">Country</label>
                                        <input type="text" Placeholder="Enter Country" class="form-control" name="userCountry" id="userCountry" value="India">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="userState">State</label>
                                        <input type="text" value="Maharashtra" placeholder="Enter State" class="form-control" name="userState" id="userState">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="userCity">City</label>
                                        <input type="text" placeholder="Enter City" class="form-control" name="userCity" id="userCity">
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="pincode">Pincode</label>
                                <input type="text" placeholder="125689" class="form-control" name="pincode" id="pincode">
                            </div>
                            <div class="form-group">
                                <label for="userAddressFirst">Address Line First</label>
                                <textarea id="userAddressFirst" name="userAddressFirst" rows="2" class="form-control"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="userAddresssecond">Address Line second</label>
                                <textarea id="userAddresssecond" name="userAddresssecond" rows="2" class="form-control"></textarea>
                            </div>
                            <div class="form-group">
                                <label for="userAddressthird">Address Line third</label>
                                <textarea id="userAddressthird" name="userAddressthird" rows="2" class="form-control"></textarea>
                            </div>

                            <button class="btn btn-success" type="submit">Update Details</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>

</div>
<script type="text/javascript">
function loadclaimtype()
{

var html = '<option value="">Select Claim Type</option>';
for(let k of claimmasterList.keys()){
  let claims = claimmasterList.get(k);
   html +='<option value='+claims.ClaimTypesID+'>'+claims.claim+'</option>';
}
$("#claimTypeId").html(html);
$("#claimTypeId").select2();
}

loadclaimtype();
function loaddocument()
{

var html = '<option value="">Select Documents</option>';
for(let k of documentmasterList.keys()){
  let documents = documentmasterList.get(k);

    html +='<option value='+documents.DocTypeID+'>'+documents.DocTypeDesc+'</option>';
}
$("#docType").html(html);
$("#docType").select2();
}

loaddocument();

</script>
<!-- <script src="plugins/select2/dist/js/select2.min.js"></script> -->
<script type="text/javascript" src="js/dropzone.js"></script>
<script src="jscode/claimVerify.js"></script>
<script src="jscode/addUserClaim.js"></script>
<script src="jscode/dropzoneProduct.js"></script>
<script src="jscode/uploadDocument.js"></script>
