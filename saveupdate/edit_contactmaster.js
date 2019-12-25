$('#contactform').on('submit', function(e) {
    e.preventDefault();
    var returnVal = $("#contactform").valid();
    if (returnVal) {
        $.ajax({
        url: url + 'editContact.php',
        type: 'POST',
        data:new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response) {

            if (response.Responsecode == 200) {
                contactmasterList.set(response.Data.contactid,response.Data);
                showcontactmaster(contactmasterList);
                goback();
                swal({
                    position: 'top-end',
                    icon: 'success',
                    title: response.Message,
                    Button: false,
                    timer: 1500
                })
                swal(response.Message);
            } else {
                swal(response.Message);
            }
        }
    });
   }
});
