<div class="row">

    <div class="card">
        <div class="card-header">
            <h3>Update Claim Flow</h3></div>
        <div class="card-body">
            <form class="forms-sample" id="editclaimFlow" method="POST">

                <div class="row">
                  <div class="col-md-4">
                      <div class="form-group">
<input type="hidden" id="ClaimTypeFlowID" name="ClaimTypeFlowID">
                          <label for="productDesc">Flow Sequence</label>
                          <input type="text" class="form-control" id="flowOrder" name="flowOrder" placeholder="Enter Sequence" require>
                      </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-group">
                        <label for="roleId">Role Type</label>
                        <select class="form-control select2" id="roleId" name="roleId">

                        </select>
                          </div>
                  </div>
                  <div class="col-md-4">
                      <div class="form-group">

                          <label for="claimId">Claim Type</label>
                          <select class="form-control select2" id="claimId" name="claimId">

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
<script src="jscode/edit_claim_flow.js"></script>
