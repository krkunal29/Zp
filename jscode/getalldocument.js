var documentmasterList = new Map();
const loaddocumentmaster = () => {
    $.ajax({
        url: url + 'getAlldocumentmaster.php',
        type: 'POST',
        dataType: 'json',
        // data: data,
        success: function(response) {
            if (response.Data != null) {
                const count = response.Data.length;
                for (var i = 0; i < count; i++) {
                    documentmasterList.set(response.Data[i].DocTypeID, response.Data[i]);
                }
                showdocumentmaster(documentmasterList);
            }
        }
    });
}
loaddocumentmaster();
