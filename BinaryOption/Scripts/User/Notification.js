var Notification = {
    Email: '',
    SitePath: '/',
    XHR: null,
    BetInterval: '',
    AssestName: '',

    ClearFields: function () {

    },

    Notification: function () {
        $.ajax({
            type: 'POST',
            async: false,
            url: Notification.SitePath + 'WebServices/User/Notification.asmx/GetTradeNotifications',
            datatype: 'json',
            async: true,
            cache: false,
            data: null, // JSON.stringify(data),
            contentType: 'application/json;charset=utf-8',
            success: function (data) {
                if (data.d != null) {
                    var obj = data.d;

                    for (i = 0; i < obj.length; i++) {
                        if (obj[i].ExpirtyStatus == 1) {
                            alertify.success("You Won " + obj[i].ReturnAmount + " on " + obj[i].Asset);
                        }
                        else if (obj[i].ExpirtyStatus == 6) {
                            alertify.log("You Draw " + obj[i].InvestedAmount + " on " + obj[i].Asset);
                        }
                        else {
                            alertify.error("You Lose " + obj[i].InvestedAmount + " on " + obj[i].Asset);
                        }

                        $('#tbodyOpenTradeHistory tr').each(function () {
                            if ($(this).attr('id') == obj[i].TradingHistoryId) {
                                $(this).html('');
                            }
                        });
                        //                        $('#tbodyOpenTradeHistory tr').find('#' + obj[i].TradingHistoryId).html('');

                    }
                }
            },
            error: function (xhr) {
            }
        });
    }
}

$(document).ready(function () {
    Notification.SitePath = $('#hdnSitePath').val();

    /***************  Clear Fields  **********************/
    Notification.ClearFields();

    //Notification.GetNotificationWithBetAmount();
    //    Notification.Notification();


});