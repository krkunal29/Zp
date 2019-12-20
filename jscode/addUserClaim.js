var claimId = null;
$('#claimDetails').on('submit',function(e){
    e.preventDefault();
    var claimData = {
        userId:1,
        contactId:contactId,
        claimTypeId:$('#claimTypeId').val(),
        claimDescription:$('#claimDescription').val(),
    };
    console.log(claimData);
    $.ajax({
        url: url + 'addUserClaim.php',
        type: 'POST',
        data: claimData,
        dataType: 'json',
        success: function(response) {
            console.log(response);
            if (response.Responsecode == 200) {
                claimId = response.Data.claimId;
                console.log(claimId);
                $('#claimId').val(claimId);
                // $('#pills-profile-tab').attr('class', 'enable');
                swal({
                    position: 'top-end',
                    icon: 'success',
                    title: response.Message,
                    button: false,
                    timer: 1500
                })
                $("#claimDetails").trigger("reset");
            }else{
                swal(response.Message);
            }
        }
    });
});