$(function() {
    $("#userform").validate( {
        ignore: [], rules: {
          roleid: {
              required: true
          },
          origanisationid:{
              required: true
          },
          emailid:{
              required: true
          },
          contactno:{
              required: true
          },
          fname:{
              required: true
          },
          lname:{
              required: true
          },
          userstatus:{
              required: true
          },
          country:{
              required: true
          },
          state:{
              required: true
          },
          city:{
              required: true
          },
          pincode:{
              required: true
          },
          address1:{
              required: true
          },
          address2:{
              required: true
          }

        }
        , messages: {
          roleid: {
              required: "Select User Role"
          },
          origanisationid:{
              required: "Select Origanisation"
          },
          emailid:{
              required: "Enter Email"
          },
          contactno:{
              required: "Enter Contact Number"
          },
          fname:{
              required: "Enter First Name"
          },
          lname:{
              required: "Enter Last Name"
          },
          country:{
              required: "Enter Country"
          },
          state:{
              required: "Enter State"
          },
          city:{
              required: "Enter City"
          },
          pincode:{
              required: "Enter Pincode"
          },
          userstatus:{
              required: "Enter Status "
          },
          address1:{
              required: "Enter Primary Address"
          },
          address2:{
              required: "Enter Secondary Address"
          }
        }
    }
    );
}

);
