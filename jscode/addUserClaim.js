var claimId = null;
$('#claimDetails').on('submit',function(e){
    e.preventDefault();
    // var claimData = {
    //     userId:1,
    //     contactId:contactId,
    //     claimTypeId:$('#claimTypeId').val(),
    //     claimDescription:$('#claimDescription').val(),
    // };
    var claimData = new FormData(this);
    claimData.append('userId',1);
    claimData.append('contactId',contactId);
    // console.log(claimData);
    $.ajax({
        url: url + 'addUserClaim.php',
        type: 'POST',
        data: claimData,
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response) {
            // console.log(response);
            if (response.Responsecode == 200) {
                claimId = response.Data.claimId;
                // console.log(claimId);
                $('#claimId').val(claimId);
                $('#claimIdU').val(claimId);
                swal({
                    position: 'top-end',
                    icon: 'success',
                    title: response.Message,
                    button: false,
                    timer: 1500
                })
                $('#item-block1').show();
                $('#item-block2').show();
                $("#claimDetails").trigger("reset");
            }else{
                swal(response.Message);
            }
        }
    });
});
