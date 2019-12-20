$('#origanisationform').on('submit', function(e) {
    e.preventDefault();
    var returnVal = $("#origanisationform").valid();
    if (returnVal) {
        $.ajax({
        url: url + 'editOriganisationType.php',
        type: 'POST',
        data: new FormData(this),
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
                  showConfirmButton: false,
                  timer: 1500
              })
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
  }
});
