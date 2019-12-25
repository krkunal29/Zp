var contactId = null;
$('#emailVerify').on('submit',function(e){
    e.preventDefault();
    $.ajax({
        url: url + 'emailVerify.php',
        type: 'POST',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response) {
            // console.log(response);
            if (response.Responsecode == 200) {
                swal({
                    position: 'top-end',
                    icon: 'success',
                    title: response.Message,
                    button: false,
                    timer: 1500
                })
                fill_details(response.Data);
                $('#register').show();
                $('#verifyRow').hide();

            } else if(response.Responsecode == 201){
                swal({
                    position: 'top-end',
                    icon: 'warning',
                    title: response.Message,
                    button: false,
                    timer: 1500
                })
                $('#register').show();
            }else{
                swal(response.Message);
            }
        }
    });
});

function fill_details(response){
    contactId = response.contactid;
    $('#fname').val(response.fname);
    $('#mname').val(response.mname);
    $('#lname').val(response.lname);
    $('#useremail').val(response.email);
    $('#userphone').val(response.phone);
    $('#userCountry').val(response.country);
    $('#userState').val(response.state);
    $('#userCity').val(response.city);
    $('#pincode').val(response.pincode);
    $('#userAddressFirst').val(response.address1);
    $('#userAddresssecond').val(response.address2);
    $('#userAddressthird').val(response.address3);
    $('#userName').html(response.fname+' '+response.lname);
    $('#userSC').html(response.city+' '+response.state);
    $('#userE').html(response.email);
    $('#userP').html(response.phone);
    $('#userA').html(response.address1);
}
