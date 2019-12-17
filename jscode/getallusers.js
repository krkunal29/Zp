var usersmasterList = new Map();
const loadusersmaster = () => {
    $.ajax({
        url: url + 'getAllusersmaster.php',
        type: 'POST',
        dataType: 'json',
        // data: data,
        success: function(response) {
            if (response.Data != null) {
                const count = response.Data.length;
                for (var i = 0; i < count; i++) {
                    usersmasterList.set(response.Data[i].userId, response.Data[i]);
                }
                showusersmaster(usersmasterList);
            }
        }
    });
}
loadusersmaster();
