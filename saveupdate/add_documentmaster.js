$('#documentsform').on('submit', function(e) {
    e.preventDefault();
    var returnVal = $("#documentsform").valid();
    if (returnVal) {
        $.ajax({
        url: url + 'addDocuments.php',
        type: 'POST',
        data:new FormData(this),
        cache: false,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function(response) {

            if (response.Responsecode == 200) {
                documentmasterList.set(response.Data.DocTypeID,response.Data);
                showdocumentmaster(documentmasterList);
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
