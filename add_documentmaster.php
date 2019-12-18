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
<script src="saveupdate/add_documentmaster.js"></script>
