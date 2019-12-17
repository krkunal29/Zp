var OriganisationList = new Map();
const loadOriganisation = () => {
    $.ajax({
        url: url + 'getAllOriganisation.php',
        type: 'POST',
        dataType: 'json',
        // data: data,
        success: function(response) {
            if (response.Data != null) {
                const count = response.Data.length;
                for (var i = 0; i < count; i++) {
                    OriganisationList.set(response.Data[i].OrganizationID, response.Data[i]);
                }
                 showOriganisation(OriganisationList);
            }
        }
    });
}
loadOriganisation();
