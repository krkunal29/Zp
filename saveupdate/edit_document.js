$('#documentsform').on('submit', function(e) {
    e.preventDefault();
    var returnVal = $("#documentsform").valid();
    if (returnVal) {
        $.ajax({
        url: url + 'editDocuments.php',
        type: 'POST',
        data:new FormData(this),
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
                documentmasterList.set(response.Data.DocTypeID,response.Data);
                showdocumentmaster(documentmasterList);
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
   }
});
