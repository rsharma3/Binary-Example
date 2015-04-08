var ChangePassword = {
    Id: '',
    OldPassword: '',
    NewPassword: '',
    ConfirmPassword: '',
    HasError: '',
    SitePath: '',
    BrowserVersion: '',
    ClearFields: function () {
        $('#txtOldPassword').val('');
        $('#txtNewPassword').val('');
        $('#txtConfirmPassword').val('');
    },

    ChangePassword: function () {
        $("#divoverlay").show();
        OldPassword = $("#txtOldPassword").val();
        NewPassword = $("#txtNewPassword").val();
        ChangePassword.Id = Id_Session;
        var data = {  OldPassword: OldPassword, NewPassword: NewPassword };
        $.ajax({
            type: 'POST',
            async: true,
            cache: false,
            url: ChangePassword.SitePath + 'WebServices/ChangePassword.asmx/ChangeUserPassword',
            datatype: 'json',
            data: JSON.stringify(data),
            contentType: 'application/json;charset=utf-8',
            success: function (result) {

                $("#divoverlay").hide();
                var result = result.d;

                if (result == "1") {
                    ChangePassword.ClearFields();
                    commonNotification.MessageBox(commonNotification.PasswordChange, commonNotification.messageSuccess);
                    SessionCheck.SessionEnd();
                    window.location = ChangePassword.SitePath + "Admin/UserLogin.aspx";
                }

                else if (result == "0") {

                    commonNotification.MessageBox(commonNotification.OldPasswordIncorrect, commonNotification.messageError);
                }
            },
            error: function (xhr) {

            }
        });
    }
}

$(document).ready(function () {
    var bName = navigator.appName;
    var bVer = navigator.appVersion;
    if (bVer.indexOf('MSIE 7.0') > 0)
        ChangePassword.BrowserVersion = "ie7";
    if (bVer.indexOf('MSIE 8.0') > 0)
        ChangePassword.BrowserVersion = "ie8";
    if (bVer.indexOf('MSIE 9.0') > 0)
        ChangePassword.BrowserVersion = "ie9";
    if (bVer.indexOf('MSIE 10.0') > 0)
        ChangePassword.BrowserVersion = "ie10";
    if (bVer.indexOf('rv:11.0') > 0) {
        ChangePassword.BrowserVersion = "ie11";
    }
    ChangePassword.SitePath = $('#hdnSitePath').val();
    SessionCheck.IsSession();

    $("#btnSave").click(function () {

        HasError = true;

        if ($("#txtOldPassword").validationEngine('validate', '#txtOldPassword')) {
            HasError = false;
            $("#txtOldPassword").focus();
        }

        if ($("#txtNewPassword").validationEngine('validate', '#txtNewPassword')) {
            HasError = false;
            $("#txtNewPassword").focus();
        }

        if ($("#txtConfirmPassword").validationEngine('validate', '#txtConfirmPassword')) {
            HasError = false;
            $("#txtConfirmPassword").focus();
        }

        if (HasError == true || HasError == "true") {
            if ($('#txtOldPassword').val() == $('#txtNewPassword').val()) {
                commonNotification.MessageBox(commonNotification.OldNewPassword, commonNotification.messageError);
                return false;
            }
            ChangePassword.ChangePassword();
        }
    });


    $("#txtOldPassword").focusout(function () {
        HasError = true;
        if ($("#txtOldPassword").validationEngine('validate', '#txtOldPassword')) {
            $("#txtOldPassword").focus();
        }
    });


    $('#txtNewPassword').focusout(function () {
        HasError = true;
        if ($('#txtNewPassword').validationEngine('validate', '#txtNewPassword')) {
            HasError = false;
            $('txtNewPassword').focus();
        }

    });

    $('#txtConfirmPassword').focusout(function () {
        HasError = true;
        if ($('#txtConfirmPassword').validationEngine('validate', '#txtConfirmPassword')) {
            HasError = false;
            $('txtConfirmPassword').focus();
        }
    });


    $('body').keypress(function (e) {
        if (e.which == 13) {
            if ($('.msgBox').length > 0) {
                return false;
            }
            else {
                HasError = true;

                if ($("#txtOldPassword").validationEngine('validate', '#txtOldPassword')) {
                    HasError = false;
                    $("#txtOldPassword").focus();
                }

                if ($("#txtNewPassword").validationEngine('validate', '#txtNewPassword')) {
                    HasError = false;
                    $("#txtNewPassword").focus();
                }

                if ($("#txtConfirmPassword").validationEngine('validate', '#txtConfirmPassword')) {
                    HasError = false;
                    $("#txtConfirmPassword").focus();
                }

                if (HasError == true || HasError == "true") {
                    if ($('#txtOldPassword').val() == $('#txtNewPassword').val()) {
                        commonNotification.MessageBox(commonNotification.OldNewPassword, commonNotification.messageError);
                        return false;
                    }
                    ChangePassword.ChangePassword();
                }
                return false;
            }
        }
    });
    $("#txtNewPassword").keypress(function (event) {
        if (event.which == 32) {
            if (event.which != 0 && event.which != 8) {
                event.preventDefault();
            }
        }
    });

});






