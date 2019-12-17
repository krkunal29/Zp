$(function() {
    $("#origanisationmainform").validate( {
        ignore: [], rules: {
          origanisationtype: {
              required: true
          },
          origanisation: {
              required: true
          }
        }
        , messages: {
          origanisationtype: {
              required: "Please Enter Origanisation Type"
          },
          origanisation: {
            required: "Please Enter Origanisation "
          }
        }
    }
    );
}

);
