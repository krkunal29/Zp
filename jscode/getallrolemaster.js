var rolemasterList = new Map();
const loadroleMaster = () => {
    $.ajax({
        url: url + 'getAllRoleMaster.php',
        type: 'POST',
        dataType: 'json',
        // data: data,
        success: function(response) {
            if (response.Data != null) {
                const count = response.Data.length;
                for (var i = 0; i < count; i++) {
                    rolemasterList.set(response.Data[i].roleId, response.Data[i]);
                }
                showrolemaster(rolemasterList);
            }
        }
    });
}
loadroleMaster();
