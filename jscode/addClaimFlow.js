function listRole() {
    var role;
    var listData = '<option value="">Select Role Type</option>';
    for (let k of rolemasterList.keys()) {
        role = rolemasterList.get(k);
        listData += '<option value=' + (k) + '>' + (role) + '</option>';
    }
    $("#roleId").html(listData);
    $("#roleId").select2();
}
listRole();

function listClaims() {
    var role;
    var listData = '<option value="">Select Claim Type</option>';
    for (let k of claimmasterList.keys()) {
        role = claimmasterList.get(k);
        listData += '<option value=' + (k) + '>' + (role) + '</option>';
    }
    $("#claimId").html(listData);
    $("#claimId").select2();
}
listClaims();

$('#claimFlow').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
        url: url + 'addClaimflow.php',
        type: 'POST',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response) {
            if (response.Responsecode == 200) {
                claimFlowlist.set(response.Data.ClaimTypeFlowID, response.Data);
                showFlowList(claimFlowlist);
                goback();
                swal({
                    position: 'top-end',
                    icon: 'success',
                    title: response.Message,
                    showConfirmButton: false,
                    timer: 1500
                })
            } else {
                swal(response.Message);
            }
        }
    });
});