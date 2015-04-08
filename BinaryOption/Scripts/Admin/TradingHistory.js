var TradingHistory = {
    contentType: 'application/json;charset=utf-8',
    type: 'POST',
    dataType: 'json',
    sort: '',
    UserId: '', //'9D5F20F6-443E-47A3-9435-8EF53FB92F0A',
    PageSize: 10,
    PageNo: 1,
    NumberOfPages: 0,
    Totalrec: 0,
    searchText: '',
    AssetDetailId: '',
    SortExp: '',
    SitePath: '',
    BrowserVersion: '',
    FromDate: '',
    ToDate: '',

    /***************************** Get Data ***********************************/
    GetTradingHistoryByUserId: function () {
        var d = { userId: TradingHistory.UserId, pageNumber: TradingHistory.PageNo, pageSize: TradingHistory.PageSize, sort: TradingHistory.SortExp, searchText: TradingHistory.searchText, fromDate: TradingHistory.FromDate, toDate: TradingHistory.ToDate };
        $.ajax({
            type: 'POST',
            url: TradingHistory.SitePath + 'WebServices/UserManagement.asmx/GetTradingHistoryByUserId',
            dataType: TradingHistory.dataType,
            data: JSON.stringify(d),
            contentType: TradingHistory.contentType,
            async: false,
            success: function (data) {
                var str = "";
                if (data.d.length > 0) {
                    for (var i = 0; i < data.d.length; i++) {
                        str += '<tr class="value_bar">';
                        str += '<td class="tdTradingHistoryId" style="display:none;">' + data.d[i].TradingHistoryId + '</td>';
                        str += '<td class="tdTradingTypeId" style="display:none;">' + data.d[i].TradingTypeId + '</td>';
                        str += '<td class="tdTradingType">' + data.d[i].TradingType + '</td>';
                        str += '<td class="tdBidType">' + data.d[i].BidType + '</td>';
                        str += '<td class="tdAssetId" style="display:none;">' + data.d[i].AssetId + '</td>';
                        str += '<td class="tdAsset">' + data.d[i].Asset + '</td>';
                        str += '<td class="tdInvestedAmount" style="text-align:Right; padding-right: 5px;">' + data.d[i].InvestedAmount + '</td>';
                        str += '<td class="tdPayout" style="text-align:Right; padding-right: 5px;">' + data.d[i].Payout + '</td>';
                        str += '<td class="tdTargetPrice" style="text-align:Right; padding-right: 5px;">' + data.d[i].TargetPrice + '</td>';
                        str += '<td class="tdTradeTime">' + data.d[i].TradeTime + '</td>';
                        str += '<td class="tdExpiryPrice" style="text-align:Right;">' + data.d[i].ExpiryPrice + '</td>';
                        str += '<td class="tdExpiryTime">' + data.d[i].ExpiryTime + '</td>';
                        str += '<td class="tdExpirtyStatus" style="display:none;">' + data.d[i].ExpirtyStatus + '</td>';
                        str += '<td class="tdExpirtyStatusName">' + data.d[i].ExpirtyStatusName + '</td>';

                        if (data.d[i].TradingStatus == 4) {
                            str += '<td class="tdTradingStatus">Close</td>';
                        }
                        else {
                            str += '<td class="tdTradingStatus">' + data.d[i].TradingStatus + '</td>';
                        }

                        str += '<td class="tdReturnAmount" style="text-align:Right; padding-right: 5px;">' + data.d[i].ReturnAmount + '</td>';
                        str += '<td class="tdUserId" style="display:none;">' + data.d[i].UserId + '</td>';
                        str += '</tr>';
                    }

                    TradingHistory.Totalrec = data.d[0].Total;
                    TradingHistory.PageSize = $('#ddlTradingHistoryGridperpage').val();
                    TradingHistory.NumberOfPages = Math.ceil(TradingHistory.Totalrec / TradingHistory.PageSize);
                }
                else {
                    TradingHistory.Totalrec = 0;
                    TradingHistory.PageSize = $('#ddlTradingHistoryGridperpage').val();
                    TradingHistory.NumberOfPages = 0;
                    commonNotification.MessageBox(commonNotification.TradingHistoryNotAvailable, commonNotification.messageInfo);
                }

                $("#tbodyTradingHistory").html(str);
            },
            error: function (xhr) {
            }
        });
    },

    /***************************** Active or Inactive User ***********************************/
    ActiveOrInactiveAsset: function (userDetailId) {
        var d = { userId: userDetailId };
        $.ajax({
            type: 'POST',
            url: TradingHistory.SitePath + 'WebServices/TradingHistory.asmx/ActiveInactiveUser',
            dataType: TradingHistory.dataType,
            data: JSON.stringify(d),
            contentType: TradingHistory.contentType,
            async: false,
            success: function (data) {
                commonNotification.MessageBox(commonNotification.ActivateBox, commonNotification.messageSuccess);
            },
            error: function (xhr) {
            }

        });
        return false;
    },

    /***************************** Paging ***********************************/
    PagingGrid: function () {
        TradingHistory.PageSize = $("#ddlTradingHistoryGridperpage").val();
        TradingHistory.GetTradingHistoryByUserId();
        $("#divTradingHistoryGridPaging").show();
        if (parseInt(TradingHistory.NumberOfPages) > 1) {
            $("#divTradingHistoryGridPaging").show();
            $("#divTradingHistoryGridPageDDL ").show();
            var displayPage = 8;
            if (TradingHistory.NumberOfPages < displayPage) {
                displayPage = TradingHistory.NumberOfPages;
            }

            if (TradingHistory.PageNo > TradingHistory.NumberOfPages) {
                TradingHistory.PageNo = TradingHistory.NumberOfPages;
            }
            $("#divTradingHistoryGridPaging").paginate({
                count: TradingHistory.NumberOfPages,
                start: TradingHistory.PageNo,
                display: displayPage,
                border: true,
                border_color: '#fff',
                text_color: '#fff',
                background_color: '#555',
                border_hover_color: '#ccc',
                text_hover_color: '#000',
                background_hover_color: '#fff',
                images: false,
                mouse: 'press',
                onChange: function (page) {
                    TradingHistory.PageNo = page;
                    TradingHistory.GetTradingHistoryByUserId();
                }
            });
        }
        else if (parseInt(TradingHistory.NumberOfPages) == 1) {

            $("#divTradingHistoryGridPaging").hide();
            $("#divTradingHistoryGridPageDDL ").show();
        }
        else {

            $('#divTradingHistoryGridPaging, #divTradingHistoryGridPageDDL ').hide();
        }
        return false;
    },

    CheckDate: function () {
        var flag = true;
        var FromDate = $("#txtFromDate").val();
        var ToDate = $("#txtToDate").val();

        var dateFrom = FromDate.substring(0, 2);
        var monthFrom = FromDate.substring(3, 5);
        var yearFrom = FromDate.substring(6, 10);

        var dateTo = ToDate.substring(0, 2);
        var monthTo = ToDate.substring(3, 5);
        var yearTo = ToDate.substring(6, 10);

        var fDate = new Date(yearFrom, monthFrom - 1, dateFrom);
        var tDate = new Date(yearTo, monthTo - 1, dateTo);

        //var today = new Date(); // Current Date

        if (fDate > tDate) {
            commonNotification.MessageBox(commonNotification.DateCheck, commonNotification.messageInfo);
            flag = false;
        }
        return flag;
    }
}


$(document).ready(function () {
    $("#txtFromDate").datepicker({
        buttonImage: '../images/calendar.png',
        changeMonth: true,
        changeYear: true,
        showImage: true,
        dateFormat: 'mm/dd/yy',
        buttonText: "Select Date",
        // minDate: 0,
        maxDate: null,
        buttonImageOnly: true,
        showOn: 'both',
        onSelect: function (date) {
            var date2 = $('#txtFromDate').datepicker('getDate');
        }
    });

    $("#txtToDate").datepicker({
        buttonImage: '../images/calendar.png',
        changeMonth: true,
        changeYear: true,
        showImage: true,
        dateFormat: 'mm/dd/yy',
        buttonText: "Select Date",
        // minDate: 0,
        maxDate: null,
        buttonImageOnly: true,
        showOn: 'both',
        onSelect: function (date) {
            var date2 = $('#txtToDate').datepicker('getDate');
        }
    });


    var bName = navigator.appName;
    var bVer = navigator.appVersion;

    if (bVer.indexOf('MSIE 7.0') > 0)
        TradingHistory.BrowserVersion = "ie7";
    if (bVer.indexOf('MSIE 8.0') > 0)
        TradingHistory.BrowserVersion = "ie8";
    if (bVer.indexOf('MSIE 9.0') > 0)
        TradingHistory.BrowserVersion = "ie9";
    $(this).attr('placeholder', 'Username search');
    if (bVer.indexOf('MSIE 10.0') > 0)
        TradingHistory.BrowserVersion = "ie10";
    if (bVer.indexOf('rv:11.0') > 0) {
        TradingHistory.BrowserVersion = "ie11";
    }


    TradingHistory.SitePath = $('#hdnSitePath').val();
    SessionCheck.IsSession();
    TradingHistory.PageSize = $("#ddlTradingHistoryGridperpage").val();
    TradingHistory.PagingGrid();
    $("#txtSearch").show();

    /***************************** Sorting ***********************************/

    $(document).on("click", ".TradingTypesort", function () {
        $('.imgAsc').hide();
        $('.imgDesc').hide();
        if ($("#tbodyTradingHistory tr").length > 0) {
            if (TradingHistory.sort == '') {
                TradingHistory.sort = 'DESC';
            }
            var ColName = $(this).attr('id');
            TradingHistory.SortExp = ColName + ' ' + TradingHistory.sort;
            var SortArray = TradingHistory.SortExp.split(" ");
            if (SortArray[1] == 'ASC') {
                TradingHistory.sort = 'DESC';
                $(this).find('.imgDesc').show();
                $(this).find('.imgAsc').hide();
            }
            else {
                TradingHistory.sort = 'ASC';
                $(this).find('.imgAsc').show();
                $(this).find('.imgDesc').hide();
            }
            TradingHistory.PageNo = 1;
            TradingHistory.PageSize = $("#ddlTradingHistoryGridperpage").val();
            TradingHistory.PagingGrid();
        }
        return false;
    });

    $(document).on("click", ".BidTypesort", function () {
        $('.imgAsc').hide();
        $('.imgDesc').hide();
        if ($("#tbodyTradingHistory tr").length > 0) {
            if (TradingHistory.sort == '') {
                TradingHistory.sort = 'DESC';
            }
            var ColName = $(this).attr('id');
            TradingHistory.SortExp = ColName + ' ' + TradingHistory.sort;
            var SortArray = TradingHistory.SortExp.split(" ");
            if (SortArray[1] == 'ASC') {
                TradingHistory.sort = 'DESC';
                $(this).find('.imgDesc').show();
                $(this).find('.imgAsc').hide();
            }
            else {
                TradingHistory.sort = 'ASC';
                $(this).find('.imgAsc').show();
                $(this).find('.imgDesc').hide();
            }
            TradingHistory.PageNo = 1;
            TradingHistory.PageSize = $("#ddlTradingHistoryGridperpage").val();
            TradingHistory.PagingGrid();
        }
        return false;
    });

    $(document).on("click", ".Assetsort", function () {
        $('.imgAsc').hide();
        $('.imgDesc').hide();
        if ($("#tbodyTradingHistory tr").length > 0) {
            if (TradingHistory.sort == '') {
                TradingHistory.sort = 'DESC';
            }
            var ColName = $(this).attr('id');
            TradingHistory.SortExp = ColName + ' ' + TradingHistory.sort;
            var SortArray = TradingHistory.SortExp.split(" ");
            if (SortArray[1] == 'ASC') {
                TradingHistory.sort = 'DESC';
                $(this).find('.imgDesc').show();
                $(this).find('.imgAsc').hide();
            }
            else {
                TradingHistory.sort = 'ASC';
                $(this).find('.imgAsc').show();
                $(this).find('.imgDesc').hide();
            }
            TradingHistory.PageNo = 1;
            TradingHistory.PageSize = $("#ddlTradingHistoryGridperpage").val();
            TradingHistory.PagingGrid();
        }
        return false;
    });

    /***************************** Sorting ***********************************/

    /***************************** DDL Change Event ***********************************/

    $("#ddlTradingHistoryGridperpage").change(function () {
        TradingHistory.NumberOfPages = 0;
        TradingHistory.PageNo = 1;
        TradingHistory.PageSize = $("#ddlTradingHistoryGridperpage").val();
        TradingHistory.SortExp = "";
        TradingHistory.PagingGrid();
    });

    /********************* Place Container For Search Box ***************************/
    $('#txtFromDate').focus(function () {
        $(this).attr('placeholder', '');
    });
    $('#txtFromDate').blur(function () {
        $(this).attr('placeholder', 'From Date');
    });

    $('#txtToDate').focus(function () {
        $(this).attr('placeholder', '');
    });
    $('#txtToDate').blur(function () {
        $(this).attr('placeholder', 'To Date');
    });

    /***************************** Search Tradings By FromDate - ToDate ***********************************/
    $('#btnViewTradings').click(function () {
        TradingHistory.FromDate = '';
        TradingHistory.ToDate = '';

        TradingHistory.FromDate = $('#txtFromDate').val();
        TradingHistory.ToDate = $('#txtToDate').val();

        if (TradingHistory.FromDate != '' && TradingHistory.ToDate != '') {
            if (TradingHistory.CheckDate()) {
                TradingHistory.PageNo = 1;
                $("#ddlTradingHistoryGridperpage").val(10);
                TradingHistory.PageSize = 10;
                TradingHistory.PagingGrid();
            }
        }

        else {

            TradingHistory.PageNo = 1;
            $("#ddlTradingHistoryGridperpage").val(10);
            TradingHistory.PageSize = 10;
            TradingHistory.PagingGrid();
        }
        return false;
    });


    $('#btnBack').click(function () {
        window.location.href = TradingHistory.SitePath + 'Admin/UserManagement.aspx';
        return false;
    });


});