$(function() {
    $("#rolesform").validate( {
        ignore: [], rules: {
          role: {
              required: true
          }
        }
        , messages: {
          role: {
              required: "Please Enter Role"
          }
        }
    }
    );
}

);
