$('#signin').on('submit', function(event) {
    event.preventDefault();
    var loginData = {
        usrname: $('#usrname').val(),
        passwrd: $('#passwrd').val()
    };
    $.ajax({
        url: url + 'authenticate.php',
        type: 'POST',
        data: loginData,
        dataType: 'json',
        beforeSend: function() {
            $("#wait").css("display", "block");
        },
        success: function(response) {
            if (response.Responsecode == 200) {
                window.location.href = 'createSession.php?userId=' + response.Data.userId + '&roleId=' + response.Data.roleId;
            } else {
                $('.message').show();
            }
        },
        complete: function(response) {
            $("#wait").css("display", "none");
        }
    });
});