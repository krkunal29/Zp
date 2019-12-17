var contactmasterList = new Map();
const loadcontactmaster = () => {
    $.ajax({
        url: url + 'getAllcontactmaster.php',
        type: 'POST',
        dataType: 'json',
        // data: data,
        success: function(response) {
            if (response.Data != null) {
                const count = response.Data.length;
                for (var i = 0; i < count; i++) {
                    contactmasterList.set(response.Data[i].contactid, response.Data[i]);
                }
                showcontactmaster(contactmasterList);
            }
        }
    });
}
loadcontactmaster();
