var claimmasterList = new Map();
const loadclaimmaster = () => {
    $.ajax({
        url: url + 'getAllclaimmaster.php',
        type: 'POST',
        dataType: 'json',
        success: function(response) {
            if (response.Data != null) {
                const count = response.Data.length;
                for (var i = 0; i < count; i++) {
                    claimmasterList.set(response.Data[i].ClaimTypesID, response.Data[i].claim);
                }
            }
        }
    });
}
loadclaimmaster();
