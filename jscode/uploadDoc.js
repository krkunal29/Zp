$('#docDetails').on('submit',function(e){
    var fdata = new FormData(this);
    fdata.append('claimId',claimId);
    e.preventDefault();
    $.ajax({
        url: url + 'emailVerify.php',
        type: 'POST',
        data: fdata,
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response) {
            console.log(response);
            if (response.Responsecode == 200) {
                swal({
                    position: 'top-end',
                    icon: 'success',
                    title: response.Message,
                    button: false,
                    timer: 1500
                })
            } else{
                swal(response.Message);
            }
        }
    });
});