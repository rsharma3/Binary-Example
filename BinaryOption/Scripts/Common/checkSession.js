var SessionCheck = {
    UserName: '',
    Id: '',
    SitePath: '',
    Islogin: '0',

    /************* Check Session ***************/
    IsSession: function () {
        $.ajax({
            type: 'POST',
            async: false,
            url: SessionCheck.SitePath + 'WebServices/Login.asmx/IsSession',
            datatype: 'json',
            data: null,
            contentType: 'application/json;charset=utf-8',
            success: function (result) {
                var result = result.d;
                if (result.IsSessionExist == 'true' || result.IsSessionExist == true) {
                    $('#lblLoginUser').html('Welcome ' + result.UserName);
                }
                else {
                    window.location = SessionCheck.SitePath + "Admin/UserLogin.aspx";
                }
            },
            error: function (xhr) {
            }
        });
    },
    /************ Destroy Session **************/
    SessionEnd: function () {
        $.ajax({
            type: 'POST',
            async: false,
            url: SessionCheck.SitePath + 'WebServices/Login.asmx/SessionEnd',
            datatype: 'json',
            data: null,
            contentType: 'application/json;charset=utf-8',
            success: function (result) {
                var result = result.d;
                if (result == 'true' || result == true) {

                    if (SessionCheck.Islogin == '0') {
                        window.location = SessionCheck.SitePath + "Admin/UserLogin.aspx";
                    }

                }
            },
            error: function (xhr) {
            }
        });
    }

}

$(document).ready(function () {

    SessionCheck.SitePath = $('#hdnSitePath').val();

    if (window.location.href.toLowerCase().indexOf("userlogin") >= 0) {
        SessionCheck.Islogin = '1;'
    }

    /***** Click Event To Destroy Session *****/
    $("#btnLogout").click(function () {
        SessionCheck.SessionEnd();
    });

});



