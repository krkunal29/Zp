$('#claimform').on('submit', function(e) {
    e.preventDefault();
    var returnVal = $("#claimform").valid();
    if (returnVal) {
        $.ajax({
        url: url + 'editclaim.php',
        type: 'POST',
        data: new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response) {

            if (response.Responsecode == 200) {
              claimmasterList.set(response.Data.ClaimTypesID,response.Data);
              showclaimmaster(claimmasterList);
              goback();
              swal({
                  position: 'top-end',
                  icon: 'success',
                  title: response.Message,
                  Button: false,
                  timer: 1500
              })
            } else {
              swal({
                  position: 'top-end',
                  icon: 'warning',
                  title: response.Message,
                  Button: false,
                  timer: 1500
              })
            }
        }
    });
  }
});
