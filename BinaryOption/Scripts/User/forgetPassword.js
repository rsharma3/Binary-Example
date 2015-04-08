var ForgetPassword = {
    Email: '',
    SitePath: '',

    ClearFields: function () {
        $('#txtEmail').val('');
    },

    ForgetPassword: function () {
        $("#divoverlay").show();

        var data = { email: ForgetPassword.Email };
        $.ajax({
            type: 'POST',
            async: false,
            //            url: ForgetPassword.SitePath + 'WebServices/ForgetPassword.asmx/ForgetPassword',
            url: ForgetPassword.SitePath + 'WebServices/User/ForgetPassword.asmx/ForgotPassword',
            datatype: 'json',
            async: true,
            cache: false,
            data: JSON.stringify(data),
            contentType: 'application/json;charset=utf-8',
            success: function (result) {
                var result = result.d;
                $("#divoverlay").hide();

                if (result == '1') {
                    ForgetPassword.ClearFields();
                    $().toastmessage('showSuccessToast', "Your password has been regenerated successfully please check your email");
                    SessionCheck.SessionEnd();
                    window.location = ChangePassword.SitePath + "Admin/UserLogin.aspx";
                }
                else if (result == '0') { // Wrong Email
                    $().toastmessage('showErrorToast', "Wrong email, please enter your correct email");
                }
                else if (result == '5') { //Exception Case
                    $().toastmessage('showErrorToast', "Some problem occurs during operation, please try again");
                }
            },
            error: function (xhr) {
            }
        });
    }
}

$(document).ready(function () {

    //    alert('HHH');
    //    $('.one-fourth').css('display', 'none');
    //    $('.one-third pull-right').css('display', 'none');
    //    $('#footer').css('display', 'none');
    //$('.welcome').hide();

    $('#breadcrumb').hide();

    ForgetPassword.SitePath = $('#hdnSitePath').val();
    /***************  Clear Fields  **********************/
    ForgetPassword.ClearFields();


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
                ForgetPassword.Email = $('#txtEmail').val().trim();
                $('.txtEmailformError').hide();
                ForgetPassword.ForgetPassword();
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
            ForgetPassword.Email = $('#txtEmail').val().trim();
            $('.txtEmailformError').hide();
            ForgetPassword.ForgetPassword();
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
                ForgetPassword.Email = $('#txtEmail').val().trim();
                $('.txtEmailformError').hide();
                ForgetPassword.ForgetPassword();
                return false;
            }
            else {
                return false;
            }
        }
    });
});