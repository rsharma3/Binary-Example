var Login = {
    UserName: '',
    Email: '',
    msgType: 'Save',
    Password: '',
    Id: '',
    contentType: 'application/json;charset=utf-8',
    type: 'POST',
    dataType: 'json',
    SitePath: '',
    RememberMe: false,


    AuthenticateUser: function () {

        Login.UserName = $("#txtUserName").val();
        Login.Password = $("#txtPassword").val();
        var d = { UserName: Login.UserName, Password: Login.Password, rememberMe: $("#chkRememberMe").is(":checked") };
        $.ajax({
            type: 'POST',
            url: Login.SitePath + 'WebServices/Login.asmx/AuthenticateUser',
            dataType: Login.dataType,
            data: JSON.stringify(d),
            contentType: Login.contentType,
            async: false,
            success: function (data) {
                if ($('#chkRememberMe').is(':checked')) {
                    $.cookie("cookieUserName", $('#txtUserName').val(), { expires: 30 });
                    $.cookie("cookiepassword", $('#txtPassword').val(), { expires: 30 });
                }
                else {
                    $.cookie('cookieUserName', null);
                    $.cookie('cookiepassword', null);
                }


                if (data.d == null) {
                    commonNotification.MessageBox(commonNotification.InvalidCredentials, commonNotification.messageError);
                    $("#txtUserName").val("");
                    $("#txtPassword").val("");
                }
                else {
                    //$('#lblLoginUser').html('Welcome ' + data.d.UserName);
                    window.location.href = Login.SitePath + 'Admin/Dashboard.aspx';
                }
            },
            error: function (xhr) {
            }
        });
    }
}

// -------------------  DOM starts here -----------------
$(document).ready(function () {

    SessionCheck.SessionEnd();
    Login.SitePath = $('#hdnSitePath').val();
    $('.ac_nav').css('display', 'none');
    $('.welcome').hide();

    if ($.cookie("cookieUserName") != "" && $.cookie("cookiepassword") != "") {
        if ($.cookie("cookieUserName") != null && $.cookie("cookiepassword") != null) {
            $('#txtUserName').val($.cookie("cookieUserName"));
            $('#txtPassword').val($.cookie("cookiepassword"));
            $('#chkRememberMe').attr('checked', 'checked');
        }
    }


    if ($("#txtUserName").val() != "") {

        $("#chkRememberMe").attr("checked", "checked");
    }


    // =======================Login Button Click ============================

    $("#btnLogin").click(function () {

        var hasError1 = true;
        if ($("#txtUserName").validationEngine('validate', '#txtUserName')) {
            hasError1 = false;
        }

        if ($("#txtPassword").validationEngine('validate', '#txtPassword')) {
            hasError1 = false;
        }
        if (hasError1 == true || hasError1 == "true") {
            Login.RememberMe = $("#RememberMe").val();
            Login.AuthenticateUser();
        }
        return false;
    });


    //===================Login through Enter Click====================================

    $('body').keypress(function (e) {
        if (e.which == 13) {
            if ($('.msgBox').length > 0) {
                return false;
            }
            else {
                var hasError1 = true;
                if ($("#txtUserName").validationEngine('validate', '#txtUserName')) {
                    hasError1 = false;
                }

                if ($("#txtPassword").validationEngine('validate', '#txtPassword')) {
                    hasError1 = false;
                }
                if (hasError1 == true || hasError1 == "true") {
                    Login.AuthenticateUser();
                }
                return false;
            }
        }
    });
    $('#lblRemberme').click(function () {
        if ($('#chkRememberMe').is(':checked')) {
            $('#chkRememberMe').prop('checked', false);
        } else {
            $('#chkRememberMe').prop('checked', true);
        }
    });
});
    // ----------------- DOM Ends here -------------------------------
