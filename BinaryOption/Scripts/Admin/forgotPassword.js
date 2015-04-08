var ForgotPassword = {
    Email: '',
    SitePath: '',

    ClearFields: function () {
        $('#txtEmail').val('');
    },

    ForgotPassword: function () {
        $("#divoverlay").show();

        var data = { email: ForgotPassword.Email };
        $.ajax({
            type: 'POST',
            async: false,
            //            url: ForgotPassword.SitePath + 'WebServices/ForgotPassword.asmx/ForgetPassword',
            url: ForgotPassword.SitePath + 'WebServices/ForgotPassword.asmx/ForgetPassword',
            datatype: 'json',
            async: true,
            cache: false,
            data: JSON.stringify(data),
            contentType: 'application/json;charset=utf-8',
            success: function (result) {
                var result = result.d;

                $("#divoverlay").hide();

                if (result == '1') {
                    ForgotPassword.ClearFields();
                    commonNotification.MessageBox(commonNotification.ForgetPasswordSendMail, commonNotification.messageSuccess);
                    SessionCheck.SessionEnd();
                    window.location = ChangePassword.SitePath + "Admin/UserLogin.aspx";
                }
                else if (result == '0') { // Wrong Email
                    commonNotification.MessageBox(commonNotification.ForgetPasswordWrongEmail, commonNotification.messageInfo);
                }
                else if (result == '5') { //Exception Case
                    commonNotification.MessageBox(commonNotification.ForgetPasswordException, commonNotification.messageError);
                }
            },
            error: function (xhr) {
            }
        });
    }
}

$(document).ready(function () {
    $('.ac_nav').css('display', 'none');
    $('.welcome').hide();


    ForgotPassword.SitePath = $('#hdnSitePath').val();
    /***************  Clear Fields  **********************/
    ForgotPassword.ClearFields();


    /*************  keypress Click Event  **************/
    $('#txtEmail').keypress(function (e) {
        if (e.keyCode == '13') {
            $('#txtEmail').blur();
            var hasError1 = true;

            if ($('#txtEmail').validationEngine('validate', '#txtEmail')) {
                $('.txtEmailformError').show();
                hasError1 = false;
                $('txtEmail').focus();
            }

            if (hasError1 == true || hasError1 == 'true') {
                ForgotPassword.Email = $('#txtEmail').val().trim();
                $('.txtEmailformError').hide();
                ForgotPassword.ForgotPassword();
                return false;
            }
            else {
                return false;
            }
        }
    });

    /**********  Click to remove validation  ************/
    $('div').click(function () {
        if ($('#txtEmail').val().trim() != '') {
            $('.txtEmailformError').hide();
        }
    });

    /**********  Forgot Password Click Event  ***********/
    $('#btnForgotPassword').click(function () {
        var hasError1 = true;

        if ($('#txtEmail').validationEngine('validate', '#txtEmail')) {
            $('.txtEmailformError').show();
            hasError1 = false;
            $('txtEmail').focus();
        }

        if (hasError1 == true || hasError1 == 'true') {
            ForgotPassword.Email = $('#txtEmail').val().trim();
            $('.txtEmailformError').hide();
            ForgotPassword.ForgotPassword();
            return false;
        }
        else {
            return false;
        }

    });
    $('#btnForgotPassword').keypress(function (event) {
        if (event.which == 13) {
            var hasError1 = true;

            if ($('#txtEmail').validationEngine('validate', '#txtEmail')) {
                $('.txtEmailformError').show();
                hasError1 = false;
                $('txtEmail').focus();
            }

            if (hasError1 == true || hasError1 == 'true') {
                ForgotPassword.Email = $('#txtEmail').val().trim();
                $('.txtEmailformError').hide();
                ForgotPassword.ForgotPassword();
                return false;
            }
            else {
                return false;
            }
        }
    });
});