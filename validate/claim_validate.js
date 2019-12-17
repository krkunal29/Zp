$(function() {
    $("#claimform").validate( {
        ignore: [], rules: {
          claim: {
              required: true
          }
        }
        , messages: {
          claim: {
              required: "Please Enter Claim Name"
          }
        }
    }
    );
}

);
