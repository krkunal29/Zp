$('#origanisationform').on('submit', function(e) {
    e.preventDefault();
    var returnVal = $("#origanisationform").valid();
    if (returnVal) {
        $.ajax({
        url: url + 'addOriganisationType.php',
        type: 'POST',
        data:new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response) {

            if (response.Responsecode == 200) {
                OriganisationTypeList.set(response.Data.OrganizationTypeID,response.Data);
                showOriganisationType(OriganisationTypeList);
                goback();
                swal({
                    position: 'top-end',
                    icon: 'success',
                    title: response.Message,
                    Button: false,
                    timer: 1500
                })
            } else {
                swal(response.Message);
            }
        }
    });
   }
});
