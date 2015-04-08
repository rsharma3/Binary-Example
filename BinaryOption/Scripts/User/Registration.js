registration = {
    Captha: '',
    SitePath: '',
    isLeap: 0,
    generateCaptha: function () {
        var charset = "mnopqrstuvwxyzABCDEFGHIJKLM0123456789".split('');
        var output = '';
        for (var i = 0; i < 6; i++) {
            output += charset[Math.floor(Math.random() * charset.length)];
        }
        registration.Captha = output;
        return output;
    },
    GetCountry: function () {
        var data = {};
        $.ajax({
            type: "POST",
            url: registration.SitePath + 'WebServices/User/Registration.asmx/GetCountry',

            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: registration.GetCountrySuccess,
            error: function (data) {
                data = data;
            }
        });


    },
    GetCountrySuccess: function (data) {

        $('#ddlRegCountry').html('');
        var obj = data.d;
        var strCountry = '<option value="">(Select Country)</option>';
        for (i = 0; i < obj.length; i++) {
            strCountry += ' <option value="' + obj[i].Id + '" code="' + obj[i].Code + '" >' + obj[i].Name + '</option>';
        }
        $('#ddlRegCountry').html(strCountry);
    },
    GetDays: function (days) {

        $('#ddlRegDay').html('');
        var strCountry = '<option value="">Day</option>';
        for (i = 1; i <= days; i++) {
            strCountry += ' <option value="' + i + '" >' + i + '</option>';
        }
        $('#ddlRegDay').html(strCountry);
    },
    GetMonths: function () {

        $('#ddlRegMonth').html('');

        var strCountry = '<option value="">Month</option>';
        for (i = 1; i <= 12; i++) {
            strCountry += ' <option value="' + i + '" >' + i + '</option>';
        }
        $('#ddlRegMonth').html(strCountry);

    },
    GetYears: function () {
        $('#ddlRegYear').html('');
        var year = d = new Date().getFullYear();

        var strCountry = '<option value="">Year</option>';
        for (i = parseInt(year) - 18; i > 1980; i--) {
            strCountry += ' <option value="' + i + '" >' + i + '</option>';
        }
        $('#ddlRegYear').html(strCountry);
    },
    Register: function (UserName, TransPassword, Email, FirstName, LastName, Title, CountryId, Phone, DOB, IsSubscribed) {
        $("#divoverlay").show();
        var data = { userName: UserName, transPassword: TransPassword, email: Email, firstName: FirstName, lastName: LastName, title: Title, countryId: CountryId, phone: Phone, dob: DOB, isSubscribed: IsSubscribed };
        $.ajax({
            type: "POST",
            url: registration.SitePath + 'WebServices/User/Registration.asmx/UserRegistration',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: registration.RegisterSuccess,
            error: function (data) {
                data = data;
            }
        });


    },
    RegisterSuccess: function (data) {
        $("#divoverlay").hide();
        var obj = data.d;
        if (obj == '1') {

            alertify.alert('User registered successfully').set('onok', function () { alertify.success('Ok'); });
        }
        else if (obj == '-1') {
            $().toastmessage('showErrorToast', "Email already exists");
        }
        else {
            $().toastmessage('showErrorToast', "Username already exists");
        }
    },
    ClearField: function () {
        $('#txtRegFirstName').val('');
        $('#txtRegLastName').val('');
        $('#txtRegEmail').val('');
        $('#txtRegPhoneNO').val('');
        $('#txtRegUserName').val('');
        $('#txtRegPassword').val('');
        $('#txtRegSecurityCode').val('');
    }
}
$(document).ready(function () {
    registration.ClearField();
    //$().toastmessage({ sticky: true });
    registration.SitePath = $('#hdnSitePath').val();
    registration.GetYears();
    registration.GetCountry();
    registration.generateCaptha();
    $("#txtCaptha").val(registration.Captha);
    $(document).on('click', "#btnCreateAccount", function () {

        var UserName = '', TransPassword = '', Email = '', FirstName = '', Title = '', LastName = '', CountryId = '', Phone = '', DOB = '', IsSubscribed = '0', year = '', month = '', day = '';


        var hasError1 = true;
        if ($("#txtRegFirstName").validationEngine('validate', '#txtRegFirstName')) {
            hasError1 = false;
        }
        FirstName = $("#txtRegFirstName").val();
        LastName = $("#txtRegLastName").val();
        Title = $('#ddlRegTitle').find('option:selected').attr('value');
        if ($("#txtRegEmail").validationEngine('validate', '#txtRegEmail')) {
            hasError1 = false;
        }
        Email = $("#txtRegEmail").val();
        if ($("#txtRegPhoneNO").validationEngine('validate', '#txtRegPhoneNO')) {
            hasError1 = false;
        }
        Phone = $("#txtRegPhoneNO").val();
        if ($("#txtRegUserName").validationEngine('validate', '#txtRegUserName')) {
            hasError1 = false;
        }
        UserName = $("#txtRegUserName").val();
        if ($("#txtRegPassword").validationEngine('validate', '#txtRegPassword')) {
            hasError1 = false;
        }
        TransPassword = $("#txtRegPassword").val();
        if ($("#txtRegRePassword").validationEngine('validate', '#txtRegRePassword')) {
            hasError1 = false;
        }
        if ($("#ddlRegCountry").validationEngine('validate', '#ddlRegCountry')) {
            hasError1 = false;
        }
        CountryId = $('#ddlRegCountry').find('option:selected').attr('value');

        if ($("#ddlRegDay").validationEngine('validate', '#ddlRegDay')) {
            hasError1 = false;
        }
        day = $('#ddlRegDay').find('option:selected').attr('value');
        if ($("#ddlRegMonth").validationEngine('validate', '#ddlRegMonth')) {
            hasError1 = false;
        }
        month = $('#ddlRegMonth').find('option:selected').attr('value');
        if ($("#ddlRegYear").validationEngine('validate', '#ddlRegYear')) {
            hasError1 = false;
        }
        year = $('#ddlRegYear').find('option:selected').attr('value');
        DOB = year + '/' + month + '/' + day


        if ($("#txtRegSecurityCode").validationEngine('validate', '#txtRegSecurityCode')) {
            hasError1 = false;
        }
        if ($("#chkRegeBook").is(":checked")) {
            IsSubscribed = '1';
        }


        if (hasError1 == true || hasError1 == "true") {

            if ($("#chkRegLegal").is(":checked")) {
                var day = $('#ddlRegDay').find('option:selected').attr('value');
                var month = $('#ddlRegMonth').find('option:selected').attr('value');
                var year = $('#ddlRegYear').find('option:selected').attr('value');
                var age = 18;
                var mydate = new Date();
                mydate.setFullYear(year, month - 1, day);

                var currdate = new Date();
                var setDate = new Date(); setDate.setFullYear(mydate.getFullYear() + age, month - 1, day);

                if ((currdate - setDate) > 0) {


                } else {

                    $().toastmessage('showErrorToast', "As per your selected Date of birth you are below 18 years ");

                    return;
                }
            }
            else {
                $().toastmessage('showWarningToast', "Please check age Legal Terms & Conditions");
                return;
            }

            if ($("#txtRegSecurityCode").val() != $("#txtCaptha").val()) {
                $("#txtCaptha").val('');
                registration.generateCaptha();
                $("#txtCaptha").val(registration.Captha);
                $('#txtRegSecurityCode').val('');
                $().toastmessage('showErrorToast', "Security Code is incorrect");
                return;
            }



            registration.Register(UserName, TransPassword, Email, FirstName, LastName, Title, CountryId, Phone, DOB, IsSubscribed);

        }
        return false;
    });
    $(document).on('click', "#aRefreshCaptha", function () {
        $("#txtCaptha").val('');
        registration.generateCaptha();
        $("#txtCaptha").val(registration.Captha);
    });
    $(document).on('change', "#ddlRegYear", function () {
        var year = $(this).find('option:selected').attr('value');
        registration.isLeap = new Date(year, 1, 29).getMonth();
        registration.GetMonths();
    });
    $(document).on('change', "#ddlRegMonth", function () {
        var month = $(this).find('option:selected').attr('value');
        var days = 0;
        switch (month) {
            case '1':
                days = 31;
                break;
            case '2':
                days = 28;
                if (registration.isLeap == 1) {
                    days = 29;
                }
                break;
            case '3':
                days = 31;
                break;
            case '4':
                days = 30;
                break;
            case '5':
                days = 31;
                break;
            case '6':
                days = 30;
                break;
            case '7':
                days = 31;
                break;
            case '8':
                days = 31;
                break;
            case '9':
                days = 30;
                break;
            case '10':
                days = 31;
                break;
            case '11':
                days = 30;
                break;
            case '12':
                days = 31;
                break;
        }

        registration.GetDays(days);

    });
    //    $(document).on('keypress', '#txtRegPhoneNO', function (e) {
    //        if ((e.which >= 48 && e.which <= 57) || e.which == 8 || e.which == 46 || e.which == 0) {
    //            if (event.which != 0 && event.which != 8) {
    //                event.preventDefault();
    //            }
    //            return true;
    //        }

    //        else {
    //            return false;
    //        }
    //    });

    $(document).on('keypress', '#txtRegPhoneNO', function (e) {
        if ((e.which >= 48 && e.which <= 57) || e.which == 8 || e.which == 46 || e.which == 0) {
            if (e.which == 46) {
                e.preventDefault();
            }
            return true;
        }

        else {
            return false;
        }
    });




    $("#txtRegFirstName,#txtRegLastName").keypress(function (event) {

        if (event.which < 48 || (event.which > 57 && event.which < 65) || (event.which > 90 && event.which < 97) || (event.which >= 123 && event.which <= 126) || (event.which >= 48 && event.which <= 57)) {
            if (event.which != 0 && event.which != 8) {
                event.preventDefault();
            }

        }

    });


    $("#txtRegPassword").keypress(function (event) {
        if (event.which == 32) {
            if (event.which != 0 && event.which != 8) {
                event.preventDefault();
            }
        }
    });


    $(document).on('click', "#dddlogin", function () {
        $("#divLogin").show();
    });
    $(document).on('click', '#alertify-ok', function () {
        window.location = registration.SitePath + "User/Trade.aspx";
    });
});