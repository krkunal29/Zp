$(function() {
    $("#documentsform").validate( {
        ignore: [], rules: {
          documents: {
              required: true
          }
        }
        , messages: {
          documents: {
              required: "Please Enter Document Name"
          }
        }
    }
    );
}

);
