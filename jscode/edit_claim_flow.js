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

function loadDetails(flowDetails) {
    console.log(flowDetails);
    $('#ClaimTypeFlowID').val(flowDetails.ClaimTypeFlowID);
    $('#flowOrder').val(flowDetails.FlowOrder);
    $('#roleId').val(flowDetails.RoleID).trigger('change');
    $('#claimId').val(flowDetails.ClaimTypeID).trigger('change');
}
loadDetails(details);

$('#editclaimFlow').on('submit', function(e) {
    e.preventDefault();
        $.ajax({
            url: url + 'editClaimflow.php',
            type: 'POST',
            data: new FormData(this),
            cache: false,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function(response) {
                if (response.Responsecode == 200) {
                    swal({
                        position: 'top-end',
                        icon: 'success',
                        title: response.Message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    claimFlowlist.set(response.Data.ClaimTypeFlowID, response.Data);
                    showFlowList(claimFlowlist);
                    goback();
                } else {
                    swal({
                        position: 'top-end',
                        icon: 'warning',
                        title: response.Message,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }
        });
});