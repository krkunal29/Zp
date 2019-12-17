$(function() {
    $("#origanisationform").validate( {
        ignore: [], rules: {
          origanisationtype: {
              required: true
          }
        }
        , messages: {
          origanisationtype: {
              required: "Please Enter Origanisation Type"
          }
        }
    }
    );
}

);
