openAccount = {
    Captha: '',
    generateCaptha: function () {
        var charset = "mnopqrstuvwxyzABCDEFGHIJKLM0123456789".split('');
        var output = '';
        for (var i = 0; i < 6; i++) {
            output += charset[Math.floor(Math.random() * charset.length)];
        }
        openAccount.Captha = output;
        return output;
    }
}
$(document).ready(function () {
    openAccount.generateCaptha();
    $("#txtCaptha").val(openAccount.Captha);
    $(document).on('click', "#btnOAccCreateAccount", function () {
        var hasError1 = true;
        if ($("#txtOAccFirstName").validationEngine('validate', '#txtOAccFirstName')) {
            hasError1 = false;
        }

        if ($("#txtOAccLastName").validationEngine('validate', '#txtOAccLastName')) {
            hasError1 = false;
        }
        if ($("#txtOAccEmail").validationEngine('validate', '#txtOAccEmail')) {
            hasError1 = false;
        }
        if ($("#txtOAccPhoneNO").validationEngine('validate', '#txtOAccPhoneNO')) {
            hasError1 = false;
        }
        if ($("#txtOAccUserName").validationEngine('validate', '#txtOAccUserName')) {
            hasError1 = false;
        }
        if ($("#txtOAccPassword").validationEngine('validate', '#txtOAccPassword')) {
            hasError1 = false;
        }
        if ($("#txtOAccRePassword").validationEngine('validate', '#txtOAccRePassword')) {
            hasError1 = false;
        }
        if ($("#txtOAccCurrency").validationEngine('validate', '#txtOAccCurrency')) {
            hasError1 = false;
        }
        if ($("#txtOAccSecurityCode").validationEngine('validate', '#txtOAccSecurityCode')) {
            hasError1 = false;
        }

        if (hasError1 == true || hasError1 == "true") {
            Login.RememberMe = $("#RememberMe").val();
            Login.AuthenticateUser();
        }
        return false;
    });
    $(document).on('click', "#aRefreshCaptha", function () {
        $("#txtCaptha").val('');
        openAccount.generateCaptha();
        $("#txtCaptha").val(openAccount.Captha);
    });
});