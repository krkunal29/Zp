var OriganisationTypeList = new Map();
const loadOriganisationType = () => {
    $.ajax({
        url: url + 'getAllOriganisationType.php',
        type: 'POST',
        dataType: 'json',
        // data: data,
        success: function(response) {
            if (response.Data != null) {
                const count = response.Data.length;
                for (var i = 0; i < count; i++) {
                    OriganisationTypeList.set(response.Data[i].OrganizationTypeID, response.Data[i]);
                }
                 showOriganisationType(OriganisationTypeList);
            }
        }
    });
}
loadOriganisationType();
