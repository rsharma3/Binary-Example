var Trade = {
    contentType: 'application/json;charset=utf-8',
    type: 'POST',
    dataType: 'json',
    TradingId: '',
    SitePath: '',
    ExpiryTime: '',
    AssetTypeId: '',
    AssetId: 0,
    Asset: '',
    ParentId: 'null',
    SubParentId: '',
    myVar: '',
    htmlFlag: 0,
    InputData: [],
    Flag: 0,
    arrAssetId: '',
    arrAssetTypeId: '',
    BidType: '',
    BidInvestedAmount: '',
    BidTargetPrice: '',
    BidExpiryTime: '',
    Payout: '',
    TradeId: 0,
    GraphType: 0,
    Graphflag: 0,

    //**************************************************GetMenu*************************
    getMenues: function () {
        var d = { ParentId: Trade.ParentId };
        $.ajax({
            type: 'POST',
            url: Trade.SitePath + 'WebServices/Forex.asmx/GetTradingType',
            dataType: Trade.dataType,
            data: JSON.stringify(d),
            contentType: Trade.contentType,
            async: false,
            success: function (data) {
                if (data.d != null) {
                    Trade.SubParentId = data.d[0].Id;
                    var html = "";
                    var aId = 1;
                    for (var i = 0; i < data.d.length; i++) {
                        if (data.d[i].Id == 10) {
                            html += '  <li> <a   class="liMenu button yellow yellow-gredient round" id=' + data.d[i].Id + ' href="#tab' + (aId + i) + '"  style=" padding: 5px 3px;"> ' + data.d[i].TradingType + '</a> </li>';
                        } else {
                            html += '  <li style="display:none;"> <a   class="liMenu button black round" id=' + data.d[i].Id + ' href="#tab' + (aId + i) + '" style=" padding: 5px 3px;"> ' + data.d[i].TradingType + '</a> </li>';
                        }
                    }
                }
                $('#ulMainMenu').html(html);
                Trade.getSubMenues();
                $("#divoverlay").hide();
            },
            error: function (xhr) {
            }
        });
    },

    //**************************************************Get SubMenu*************************
    getSubMenues: function () {
        var d = { ParentId: Trade.SubParentId };
        $.ajax({
            type: 'POST',
            url: Trade.SitePath + 'WebServices/Forex.asmx/GetTradingType',
            dataType: Trade.dataType,
            data: JSON.stringify(d),
            contentType: Trade.contentType,
            async: false,
            success: function (data) {
                if (data.d != null) {
                    var html = "";
                    var aId = 1;
                    for (var i = 0; i < data.d.length; i++) {
                        Trade.TradingId = data.d[0].Id;
                        Trade.BidExpiryTime = data.d[0].TradingType;
                        if (data.d[i].Id == "11") {
                            html += '<a href="#" id=' + data.d[i].Id + ' class="liSubMenu button yellow yellow-gredient round" >' + data.d[i].TradingType + '</a>'
                        } else {
                            html += '<a href="#" id=' + data.d[i].Id + ' class="liSubMenu button black round" >' + data.d[i].TradingType + '</a>'
                        }
                    }
                    $('#subMenu').html(html);
                    $('.liSubMenu').css('padding', '9px 8px');
                    Trade.LoadGrid();
                    Trade.getAssetGrid();

                }
            },
            error: function (xhr) {
            }
        });
    },

    //**************************************************Get AssetGrid*************************
    getAssetGrid: function () {
        var d = { tradingTypeId: Trade.TradingId, assetTypeId: Trade.AssetTypeId };
        $.ajax({
            type: 'POST',
            url: Trade.SitePath + 'WebServices/User/Trade.asmx/GetGridDataByTradingTypeID',
            dataType: Trade.dataType,
            data: JSON.stringify(d),
            contentType: Trade.contentType,
            async: true,
            success: Trade.GetCurrencyRateSuccess,
            error: function (xhr) {
            }
        });
    },

    GetCurrencyRateSuccess: function (data) {
        if (data.d != null) {
            var loginDetail = $('#lblWelcome').html();
            var obj = data.d;
            var result = false;
            var str = '';
            var id = '';
            for (i = 0; i < obj.length; i++) {
                if (Trade.AssetId == 0) {
                    Trade.AssetId = obj[0].AssetId;
                }
                $('#tbodymarket-up-down-table tr').each(function () {
                    str = '';
                    id = '';
                    id = $(this).attr('Id');
                    if (id == obj[i].AssetId) {
                        result = true;
                        $(this).find('.curency-percent').html(obj[i].Payout + '%');
                        var oldprice = parseFloat($(this).attr('pValue'));
                        if (parseFloat(oldprice) > parseFloat(obj[i].Price)) {
                            $(this).find('td.div2').html(obj[i].Price).css('color', '#CB1515');  //Red
                        }
                        else if (parseFloat(oldprice) < parseFloat(obj[i].Price)) {
                            $(this).find('td.div2').html(obj[i].Price).css('color', '#1D8406'); //green
                        }
                        else {
                            $(this).find('td.div2').html(obj[i].Price).css('color', '#FFFFFF');  //White
                        }
                    }
                });
                if (result != true) {
                    str += '<tr id=' + obj[i].AssetId + ' class="field_sec" traddingId=' + Trade.TradingId + ' pValue=' + obj[i].Price + ' >';
                    str += '<td class="AssetPayout" style="cursor:pointer;"><div assetId=' + obj[i].AssetId + ' class="curency">' + obj[i].Asset + '</div><div class="curency-percent">' + obj[i].Payout + '%' + '</div></td>';
                    str += '<td class="div2" style="color:#FFFFFF;cursor:pointer;" ><div class="white">' + obj[i].Price + '</div></td>';
                    str += '<td style="cursor:pointer;"><div class="expire-time"><select style="width:100px;"><option>' + obj[i].ExpiryTime + ' Seconds' + '</option></select></div></td>';
                    str += '</tr>';
                    $('#tbodymarket-up-down-table:last').append(str);
                    if (Trade.htmlFlag == 1) {
                        $('#ddlhtmlExpire').html('<option val=' + Trade.AssetId + '>' + obj[0].ExpiryTime + ' Seconds' + '</option>');
                    }
                }

                if (Trade.AssetId == obj[i].AssetId) {
                    $('#spnMarkeet').html(obj[i].Price);

                    if (Trade.Flag == 0) {
                        Trade.Payout = obj[i].Payout;
                        Trade.Asset = obj[i].Asset;
                        $('#spnPayout').attr('assetId', obj[i].AssetId);
                        $('#spnPayout').html(Trade.Payout + '%');
                        $('#spnPayoutInPercentage').html('(' + Trade.Payout + '%) In the money ');
                        $('#ahtmlPayout').html(Trade.Payout);
                        $('#spnAssetName').html(Trade.Asset);
                    }

                }

            }

        } else {
            $('#tbodymarket-up-down-table').html('');
            $('#spnPayout').html('');
            $('#spnPayoutInPercentage').html('');
            $('#ahtmlPayout').html('');
            $('#spnAssetName').html('');
            $('#spnMarkeet').html('');
        }
        if (Trade.Flag == 0) {
            Trade.Flag = 1;
            $('#tbodymarket-up-down-table tr').each(function () {
                str = '';
                var aid = '';
                aid = $(this).attr('Id');
                if (aid == Trade.AssetId) {
                    $(this).find('td:first-child').css({ 'background': '', 'border-left': '' });
                    $(this).find('td:first-child').css('border-left', '3px solid #fba62a');
                    $(this).find('td:first-child').css('background', 'url(' + Trade.SitePath + 'images/arrow.png) 0px 46% no-repeat');
                }
            });
        }

    },


    //**************************************************Timer*************************
    LoadGrid: function () {
        var loginDetail = $('#lblWelcome').html();
        loginRoleID = $('#lblWelcome').attr('RoleId');
        // to bind the grid after one second
        Trade.ExpiryTime = $('#' + Trade.TradingId).html();
        Tempflag = true;
        Trade.myVar = '';
        Trade.myVar = window.setInterval(function () {
            if (Trade.AssetTypeId == '' || Trade.AssetTypeId == "") {
                Trade.AssetTypeId = $("#ddlTradeAsset").val();
            }
            if (Trade.AssetTypeId == "") {
                $().toastmessage('showErrorToast', "Please select valid option");
            } else {
                Trade.getAssetGrid();

                if (loginDetail != "" || loginDetail != '') {
                    Trade.GetOpenTradeHistoryData();
                    Notification.Notification();
                }

                var dNow = new Date();
                var time1 = dNow.toDateString();
                var time2 = dNow.toLocaleTimeString();
                var Time = time1 + ' ' + time2;
                var last2 = Time.substring(0, Time.length - 2);
                $('#spnhtmlDate').html(last2);
                $("#divoverlay").hide();

            }
        }, 1000);
    },

    //**************************************************Graph Chart*************************
    Graphfeed: function () {
        var data = { assetId: Trade.AssetId, tradeId: Trade.TradeId, graphType: Trade.GraphType };
        $.ajax({
            type: "POST",
            url: Trade.SitePath + 'WebServices/User/Trade.asmx/GetGraphFeed',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (result) {
                if (result.d != null) {
                    var obj = result.d;
                    var InputData = new Array();
                    for (i = 0; i < obj.length; i++) {
                        var datetime = new Date(obj[i].LogTime);
                        var year = datetime.getFullYear();
                        var month = datetime.getMonth();
                        var date = datetime.getDate();
                        var hrs = datetime.getHours();
                        var min = datetime.getMinutes();
                        var sec = datetime.getSeconds();
                        InputData.push([Date.UTC(year, month, date, hrs, min, sec), obj[i].Price]);
                    }
                    var chart = $('#graphcontainer').highcharts();
                    chart.series[0].setData(InputData);
                    chart.series[0].name = obj[0].Asset;
                    chart.rangeSelector.selected = 2;
                    chart.redraw();
                }
            },
            error: function (result) {
                result = result;
            }
        });

    },

    //**************************************************Custom Grid on Setting Click*************************

    CustomGridHeader: function () {
        $.ajax({
            type: "POST",
            url: Trade.SitePath + 'WebServices/User/Trade.asmx/CustomGridData',
            data: JSON.stringify(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: function (result) {
                if (result.d != null) {
                    var mainheader = '';
                    var headerstr = "<div >";
                    for (var i = 0; i < result.d.length; i++) {
                        mainheader += '<div style="width:25%; float: left; cursor:pointer;color:#F2DB62" Name=' + result.d[i].Name + ' id=' + result.d[i].typeId + '><input type="checkbox" tabindex="0" class="rdoMain" value="on"> <span class="spnMaindata">' + result.d[i].Name + '</span></div>';
                        headerstr += '<ul class="ulMainGrid  ' + result.d[i].Name + '  " style="width:25%; float: left; color:#F2DB62; margin:0 0 0 4px" Name=' + result.d[i].Name + ' id=' + result.d[i].typeId + '><div style="height:6px;"></div>';
                        if (result.d[i].lstAsset.length == 0) {
                            headerstr += '<li class="liMainGrid ' + result.d[i].Name + '"> </li>';
                            headerstr += '</ul>';
                        } else {
                            for (var j = 0; j < result.d[i].lstAsset.length; j++) {

                                if (result.d[i].lstAsset[j].ischecked == 1) {
                                    headerstr += '<li class="liMainGrid" Id=' + result.d[i].lstAsset[j].AssetId + ' style="cursor:pointer;"><input  type="checkbox" AssetId=' + result.d[i].lstAsset[j].AssetId + ' value="on" class=' + 'rdo' + result.d[i].Name + ' checked="checked"> <span Name=' + result.d[i].Name + ' class="spndata">' + result.d[i].lstAsset[j].AssetName + '</span></li>'
                                } else {
                                    headerstr += '<li class="liMainGrid" Id=' + result.d[i].lstAsset[j].AssetId + ' style="cursor:pointer;"><input  type="checkbox" AssetId=' + result.d[i].lstAsset[j].AssetId + ' value="on" class=' + 'rdo' + result.d[i].Name + '>  <span Name=' + result.d[i].Name + ' class="spndata">' + result.d[i].lstAsset[j].AssetName + ' </span></li>'
                                }
                            }
                            headerstr += '</ul>';
                        }
                    }
                    headerstr += '</div>';
                    mainheader += '</div>';
                    $('#tblCustomFilter').html(headerstr);
                    $('#divhead').html(mainheader);
                }

            },
            error: function (result) { }
        });
    },

    //**************************************************insertion on Setting popup apply click************************* 
    InsertCustomGrid: function () {
        var data = { assetId: Trade.arrAssetId };
        $.ajax({
            type: "POST",
            url: Trade.SitePath + 'WebServices/User/Trade.asmx/InsertCustomGrid',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (result) {
                if (result.d != null) {
                    Trade.CustomGridHeader();
                }
            },
            error: function (result) { }
        });
    },

    //**************************************************Bid Insertion*************************
    InsertBidData: function () {
        var data = { tradingTypeId: Trade.TradingId, bidType: Trade.BidType, assestId: Trade.AssetId, investedAmount: Trade.BidInvestedAmount, exTime: Trade.BidExpiryTime };
        $.ajax({
            type: "POST",
            url: Trade.SitePath + 'WebServices/User/Trade.asmx/InsertBidData',
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (result) {
                if (result.d != null) {
                    if (result.d == -1 || result.d == "-1") {
                        $().toastmessage('showErrorToast', "You have been blocked. Please contact administrator.");
                        userLogin.Logout();
                        //Trade.GetOpenTradeHistoryData();
                    }
                    else if (result.d == 1) {
                        $().toastmessage('showSuccessToast', "Your Bid is placed successfully");
                        //Trade.GetOpenTradeHistoryData();
                        $('#tbodyOpenTradeHistory').html('');
                        Trade.GetOpenTradeHistoryData();
                        Trade.InputData = '';
                        var chart = $('#graphcontainer').highcharts();
                        chart.series[0].setData(Trade.InputData);
                        chart.series[0].name = '';
                        chart.redraw();
                        $('#dvopenTradeHistory').show();
                        $('#dvtradeHistory').hide();
                    }
                    else {
                        $().toastmessage('showErrorToast', "Your don't have enough balance in your account");
                    }

                }
            },
            error: function (result) { }
        });
    },

    //**************************************************Open Trade History*************************
    GetOpenTradeHistoryData: function () {
        $.ajax({
            type: "POST",
            url: Trade.SitePath + 'WebServices/User/Trade.asmx/GetOpenTradeData',
            data: JSON.stringify(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: true,
            success: Trade.OpenTradeSuccess,
            error: function (result) {
            }
        });
    },

    OpenTradeSuccess: function (data) {
        if (data.d != null) {
            var obj = data.d;
            var result = false;
            var str = '';
            var id = '';
            for (i = 0; i < obj.length; i++) {
                $('#tbodyOpenTradeHistory tr').each(function () {
                    str = '';
                    id = '';
                    id = $(this).attr('Id');
                    if (id == obj[i].Id) {
                        result = true;
                        var oldprice = parseFloat($(this).find('.TargetPrice').html());
                        if (parseFloat(oldprice) > parseFloat(obj[i].MarkeetPrice)) {
                            $(this).find('.MarkeetPrice').html(obj[i].MarkeetPrice).css('color', '#CB1515');
                        }
                        else if (parseFloat(oldprice) < parseFloat(obj[i].MarkeetPrice)) {
                            $(this).find('.MarkeetPrice').html(obj[i].MarkeetPrice).css('color', '#1D8406');
                        }
                        else {
                            $(this).find('.MarkeetPrice').html(obj[i].MarkeetPrice).css('color', 'Gray');
                        }

                        $(this).find('.timer').html(obj[i].CountingTime + '&nbsp; <image src="' + Trade.SitePath + 'images/wt_ico.png" />');

                    }
                });
                if (result != true) {
                    if (i % 2 == 0) {
                        str += '<tr Id="' + obj[i].Id + '"  style="cursor: pointer;"  MarkeetPrice=' + obj[i].MarkeetPrice + ' TargetPrice=' + obj[i].TargetPrice + ' >';
                    }
                    else {
                        str += '<tr class="alt" Id="' + obj[i].Id + ' " style="cursor: pointer;"  MarkeetPrice=' + obj[i].MarkeetPrice + ' TargetPrice=' + obj[i].TargetPrice + '>';
                    }
                    str += '<td class="TradingType" Id="' + obj[i].AssetId + '"> ' + obj[i].TradeName + '</td>';

                    if (obj[i].BidType == "High") {
                        str += '<td class="BidType" BidType=' + obj[i].BidType + '> <image src="' + Trade.SitePath + 'images/high.png" /></td>';
                    } else {
                        str += '<td class="bidType" BidType=' + obj[i].BidType + '> <image src="' + Trade.SitePath + 'images/low.png" /></td>';
                    }
                    str += '<td class="AssetID" Id="' + obj[i].AssetId + '"> ' + obj[i].Asset + '</td>';
                    str += '<td class="Asset"   Id=' + obj[i].AssetId + '> ' + obj[i].InvestedAmount + '</td>';
                    str += '<td class="TargetPrice " Id=' + obj[i].AssetId + '> ' + obj[i].TargetPrice + '</td>';
                    str += '<td class="MarkeetPrice" Id=' + obj[i].AssetId + '> ' + obj[i].MarkeetPrice + '</td>';

                    str += '<td id=' + obj[i].Id + ' class="timer"> ' + obj[i].CountingTime + '&nbsp; <image src="' + Trade.SitePath + 'images/wt_ico.png" /></td>';
                    str += '</tr>';
                    $('#tbodyOpenTradeHistory:last').append(str);

                }
            }

            $('#lblTradeCount').html(obj.length);
            //--Graph binding for bid grid
            if (Trade.Graphflag == 2) {
                Trade.AssetId = obj[0].AssetId;
                Trade.TradeId = obj[0].Id;
                Trade.GraphType = 1;
            }
            //            Trade.Graphfeed();
        }
        else {
            $('#lblTradeCount').html('0');

        }
    },

    //**************************************************Open Trade One Second Call*************************
    //    OpenTradeData: function () {
    //        Trade.OpenTradeTime = window.setInterval(function () {
    //            var loginDetail = $('#lblWelcome').html();
    //            if (loginDetail != "" || loginDetail != '') {
    //                Trade.GetOpenTradeHistoryData();
    //            }
    //        }, 1000);
    //    },

    //**************************************************Trade History*************************

    GetTradeHistoryData: function () {
        $.ajax({
            type: "POST",
            url: Trade.SitePath + 'WebServices/User/Trade.asmx/GetTradeHistoryData',
            data: JSON.stringify(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (result) {
                if (result.d != null) {
                    var str = '';
                    for (var i = 0; i < result.d.length; i++) {
                        if (i % 2 == 0) {
                            str += '<tr >';
                        }
                        else {
                            str += '<tr class="alt">';
                        }
                        str += '<td class="AssetID" Id="' + result.d[i].AssetId + '"> ' + result.d[i].TradingType + '</td>';

                        if (result.d[i].BidType == "High") {
                            str += '<td class="BidType" BidType=' + result.d[i].BidType + '> <image src="' + Trade.SitePath + 'images/high.png" /></td>';
                        } else {
                            str += '<td class="bidType" BidType=' + result.d[i].BidType + '> <image src="' + Trade.SitePath + 'images/low.png" /></td>';
                        }
                        str += '<td class="Asset " > ' + result.d[i].Asset + '</td>';
                        str += '<td class="InvestedAmount " > ' + result.d[i].InvestedAmount + '</td>';
                        str += '<td class="TargetPrice" > ' + result.d[i].TargetPrice + '</td>';
                        str += '<td class="TradeTime" > ' + result.d[i].TradeTime + '</td>';
                        str += '<td class="ExpiryPrice" > ' + result.d[i].MarkeetPrice + '</td>';
                        str += '<td class="ExpiryTime "> ' + result.d[i].ExpiryTime + '</td>';
                        str += '<td class="ExpiryType" > ' + result.d[i].ExpiryType + '</td>';
                        str += '<td class="ReturnAmount" > ' + result.d[i].ReturnAmount + '</td>';
                        str += '</tr>';

                    }
                    $('#tbodyTradeHistory').html(str);
                }
            },
            error: function (result) { }
        });
    },

    //**************************************************Clear Defualt Value*************************
    Clear: function () {
        Trade.Flag = 0;
        $('#txtCountPercentage').val('');
        Trade.htmlFlag = 1;
        Trade.SitePath = $('#hdnSitePath').val();
        Trade.ExpiryTime = '';
        Trade.TradingId = '';
        $('#tbodymarket-up-down-table').html('');
        $('#spnMarkeet').html('');
        $('#spnPayout').html('');
        $('#spnPayoutInPercentage').html('');
        $('#ahtmlPayout').html('');
        $('#spnAssetName').html('');
        $('#tbodyOpenTradeHistory').html('');

    },
    LoadGraph: function () {
        // to bind the grid after one second
        Tempflag = true;
        window.setInterval(function () {
            Trade.Graphfeed();
        }, 1000);
    }
}
// -------------------  Dom Start Here -----------------
$(document).ready(function () {
    Trade.AssetTypeId = $("#ddlTradeAsset").val();
    loginRoleID = $('#lblWelcome').attr('RoleId');
    Trade.SitePath = $('#hdnSitePath').val();
    if (loginRoleID != '' || loginRoleID != "") {

        $("#ddlTradeAsset").append('<option value="0">Custom</option>');
    }
    else {
        $("#ddlTradeAsset option[value='0']").remove();
    }

    userLogin.CheckUserSession();
    Trade.Clear();
    Trade.getMenues();
    Trade.LoadGraph();
    ///-------***********************************SubMenu Function***************

    $(document).on('click', ".liSubMenu", function () {
        //   $("#divoverlay").show();
        $('#tbodymarket-up-down-table').html('');
        Trade.Flag = 0;
        Trade.AssetId == 0

        clearInterval(Trade.myVar);
        Trade.ExpiryTime = '';
        Trade.TradingId = '';
        Trade.AssetTypeId = '';
        Trade.BidExpiryTime = '';
        Trade.TradingId = $(this).attr('id');
        Trade.BidExpiryTime = $(this).html();
        Trade.AssetTypeId = $("#ddlTradeAsset").val();
        $('.liSubMenu').removeClass('button yellow yellow-gredient round');
        $('.liSubMenu').addClass('button black round');
        $('.liSubMenu').css('border-radius', '4px');
        $('.liSubMenu').css('padding', '9px 8px');
        $(this).removeClass('button black round');
        $(this).addClass('button yellow yellow-gredient round');
        $('#tbodymarket-up-down-table').html('');
        Trade.LoadGrid();
    });
    $('#ddlTradeAsset').change(function () {
        $('#tbodymarket-up-down-table').html('');
        Trade.Flag = 0;
        clearInterval(Trade.myVar);
        Trade.ExpiryTime = '';
        Trade.AssetId = 0;
        Trade.TradingId = $('.liSubMenu ,button ,black ,round').attr('id');
        Trade.ExpiryTime = $('.liSubMenu ,button ,black ,round').html();
        Trade.AssetTypeId = $("#ddlTradeAsset").val();
        Trade.InputData = '';
        var chart = $('#graphcontainer').highcharts();
        chart.series[0].setData(Trade.InputData);
        chart.series[0].name = '';
        chart.redraw();
        if (Trade.AssetTypeId == "") {
            $().toastmessage('showErrorToast', "Please select valid option");
        } else {
            Trade.LoadGrid();
        }
    });
    $(document).on('click', '.liMenu', function () {
        Trade.ParentId = $(this).attr('id');
        Trade.SubParentId = $(this).attr('id');

        $('.liMenu').removeClass('button yellow yellow-gredient round');
        $('.liMenu').addClass('button black round');
        $('.liMenu').css('border-radius', '4px');
        $('.liMenu').css('padding', '5px 4px');
        $(this).removeClass('button black round');
        $(this).addClass('button yellow yellow-gredient round');

        Trade.getSubMenues();
        return false;
    });
    $(document).on('click', '.market-up-down-table tr', function () {
        Trade.Graphflag = 1;
        Trade.AssetId = '';
        Trade.TradeId = 0;
        Trade.GraphType = 0;
        clearInterval(Trade.myVar);
        $('#spnreturn').html('$0.00');
        Trade.htmlFlag = 1;
        Trade.Flag = 1;
        $('#spnMarkeet').html('');
        $('#spnPayout').html('');
        $('#spnPayout').attr('assetId', '');
        $('#spnPayoutInPercentage').html('');
        $('#txtCountPercentage').val('');
        $('.market-up-down-table tr td:first-child').css({ 'background': '', 'border-left': '' });
        $(this).find('td:first-child').css('border-left', '3px solid #fba62a');
        $(this).find('td:first-child').css('background', 'url(' + Trade.SitePath + 'images/arrow.png) 0px 46% no-repeat');
        var Payout = $(this).find('.AssetPayout .curency-percent').html();
        Payout = Payout.slice(0, -1)
        $('#spnPayout').html(Payout + "%");
        $('#spnPayoutInPercentage').html('(' + parseInt(Payout) + '%) In the money ');
        $('#ahtmlPayout').html(Payout);
        $('#spnAssetName').html($(this).find('.AssetPayout .curency').html());
        $('#spnMarkeet').html($(this).find('.div2').html());
        Trade.AssetId = $(this).attr('id');
        $('#spnPayout').attr('assetId', Trade.AssetId);
        Trade.TradingId = $(this).attr('traddingId');
        Trade.LoadGrid();
        //for clear a old graph
        Trade.InputData = '';
        var chart = $('#graphcontainer').highcharts();
        chart.series[0].setData(Trade.InputData);
        chart.series[0].name = '';
        chart.redraw();
        //Trade.LoadGraph();
    });
    $(document).on('keypress', '#txtCountPercentage', function (e) {
        var txtValue = $('#txtCountPercentage').val();
        if (e.which == 46 && txtValue == "") {
            $('#txtCountPercentage').val(0);
        }
        if ((e.which >= 48 && e.which <= 57) || e.which == 8 || e.which == 46) {
            if (e.which == 46 && $(this).val().indexOf('.') != -1) {
                e.preventDefault();
            }
            return true;
        }
        else {
            return false;
        }

    });

    //_----**********************graph*****************
    //    $('#graphcontainer').highcharts('StockChart', {
    //        title: {
    //            text: ''
    //        },

    //        xAxis: {
    //            gapGridLineWidth: 0
    //        },

    //        rangeSelector: {
    //            buttons: [{
    //                type: 'all',
    //                count: 1,
    //                text: 'All'
    //            }],
    //            selected: 1,
    //            inputEnabled: false
    //        },

    //        series: [{
    //            name: 'Asset',
    //            type: 'area',
    //            data: [],
    //            gapSize: 0,
    //            tooltip: {
    //                valueDecimals: 4
    //            },
    //            fillColor: {
    //                linearGradient: {
    //                    x1: 0,
    //                    y1: 0,
    //                    x2: 0,
    //                    y2: 1
    //                },
    //                stops: [
    //                        [0, Highcharts.getOptions().colors[0]],
    //                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
    //                    ]
    //            },
    //            threshold: null
    //        }]
    //    });




    $('#graphcontainer').highcharts('StockChart', {
        chart: {
        },

        rangeSelector: {
            buttons: [{
                type: 'all',
                text: 'All'
            }],
            inputEnabled: false,
            selected: 2
        },


        title: {
            text: ''
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: 'Asset',
            type: 'areaspline',
            data: [],
            tooltip: {
                valueDecimals: 4
            },
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 2,
                    x2: 1,
                    y2: 1
                },
                stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
            },
            threshold: null
        }]
    });



    $(document).on('keypress', '#txtCountPercentage', function (e) {
        if ((e.which >= 48 && e.which <= 57) || e.which == 8 || e.which == 46) {
            if (e.which == 46 && $(this).val().indexOf('.') != -1) {
                e.preventDefault();
            }
            return true;
        }

        else {
            return false;
        }
    });
    $("#txtCountPercentage").keyup(function () {
        var userAmount = 0.0;
        var percentage = 0.0;
        var userPercentAmount = 0.0;
        var totalAmount = 0.0;
        userAmount = parseFloat($("#txtCountPercentage").val());
        if (userAmount > 0) {
            percentage = $('#ahtmlPayout').html();
            userPercentAmount = parseFloat(userAmount / 100 * percentage);
            totalAmount = parseFloat(userPercentAmount).toFixed(2);
        }
        else {
            totalAmount = 0;

        }
        $('#spnreturn').html('');
        $('#spnreturn').html('$' + parseFloat(totalAmount));
        return false;
    });
    $(document).on('click', "#abtnSetting", function () {
        if ($('.CustomGrid-popup').css('display') == 'none') {
            $('.CustomGrid-popup').css('display', 'block');
        } else {
            $('.CustomGrid-popup').css('display', 'none');
        }
        Trade.CustomGridHeader();
        $('#theadtblCustomFilter').html('');
        return false;
    });


    $("#btnCustomfilterApply").click(function () {
        Trade.arrAssetId = ''
        $('#tblCustomFilter ul li input').each(function () {
            if ($(this).prop('checked') == true) {
                //alert("cc");
                Trade.arrAssetId += $(this).attr('AssetId') + ',';
            }
        });

        loginRoleID = $('#lblWelcome').attr('RoleId');

        if (loginRoleID != '' || loginRoleID != "") {

            Trade.InsertCustomGrid();
            $('#tbodymarket-up-down-table').html('');
            $('.CustomGrid-popup').toggle();
        }
        else {
            $().toastmessage('showErrorToast', "Please Login First");
        }
    });
    $(document).on('click', ".rdoMain", function () {
        var Name = 'rdo';
        Name += $(this).parent().attr('Name');
        if ($(".rdoMain").is(':checked')) {

            $('.' + Name).prop('checked', true);


        } else {

            $('.' + Name).prop('checked', false);
        }
    });
    $(document).on('click', '.clsBidType', function () {
        Trade.BidType = $(this).html()
        $("#lblBidType").html(Trade.BidType);
    });
    $(document).on('click', '#abtnBuyBet', function () {
        Trade.Graphflag = 2;
        Trade.AssetId = '';
        var loginDetail = $('#lblWelcome').html();
        var loginRoleID = '';
        if (loginDetail == "" || loginDetail == '') {
            $().toastmessage('showErrorToast', "Please Login First");
        } else {
            loginRoleID = $('#lblWelcome').attr('RoleId');
            if (loginRoleID == 5 || loginRoleID == "5") {
                Trade.AssetId = $('#spnPayout').attr('assetId');
                Trade.BidType = '';
                Trade.BidInvestedAmount = '';
                Trade.BidTargetPrice = '';
                Trade.BidType = ($('#lblBidType').html()).trim();
                Trade.BidInvestedAmount = $('#txtCountPercentage').val();
                //                Trade.BidTargetPrice = $('#spnTargetPrice').html();$(this).find('.div2').html()
                // Trade.BidTargetPrice = $('#spnTargetPrice').attr('price');
                var flag = 0;
                if (Trade.BidType == "" || Trade.BidType == '') {
                    $().toastmessage('showErrorToast', "Set Bid type First");
                    flag = 1;
                    return false;
                } else {
                    flag = 0;
                }
                if (Trade.BidInvestedAmount == "" || Trade.BidInvestedAmount == '') {
                    $().toastmessage('showErrorToast', "please put valid amount first ");
                    flag = 1;
                    return false;
                }
                else if (parseFloat(Trade.BidInvestedAmount) == parseFloat(0.0)) {
                    $().toastmessage('showErrorToast', "Value must be grater then 0");
                    flag = 1;
                    return false;
                } else {
                    flag = 0;
                }
                if (flag == 0) {
                    Trade.InsertBidData();
                }
            }
            else {
                $().toastmessage('showErrorToast', "Please Login as Tradder with Tradding Password");
            }
        }
    });
    $(document).on('click', '#abtnOpenTrade', function () {
        $('#tbodyOpenTradeHistory').html('');
        var loginDetail = $('#lblWelcome').html();
        var loginRoleID = '';

        if (loginDetail == "" || loginDetail == '') {
            $().toastmessage('showErrorToast', "Please Login First");
            $("#alert").show();
            return false;
        }

        else {
            loginRoleID = $('#lblWelcome').attr('RoleId');
            if (loginRoleID != 5 || loginRoleID != "5") {
                $().toastmessage('showErrorToast', "Please Login as Tradder with Tradding Password");
                return false;
            } else {
                $('#tbodyOpenTradeHistory').html('');
                Trade.GetOpenTradeHistoryData();
                $('#dvopenTradeHistory').show();
                $('#dvtradeHistory').hide();
                return false;
            }
        }
        return false;
    });
    $(document).on('click', '#abtnTradeHistory', function () {
        var loginDetail = $('#lblWelcome').html();
        var loginRoleID = '';

        if (loginDetail == "" || loginDetail == '') {
            $().toastmessage('showErrorToast', "Please Login First");
            $("#alert").show();
            return false;
        }

        else {
            loginRoleID = $('#lblWelcome').attr('RoleId');
            if (loginRoleID != 5 || loginRoleID != "5") {
                $().toastmessage('showErrorToast', "Please Login as Tradder with Tradding Password");
                return false;
            } else {

                Trade.GetTradeHistoryData();
                $('#dvtradeHistory').show();
                $('#dvopenTradeHistory').hide();
            }
        }
    });
    $(document).on('click', '.headerClick', function () {
        return false;
    });
    $(document).on('click', '.spndata', function () {
        var Name = '.rdo';
        Name += $(this).attr('Name');
        if ($(this).parent().find(Name).is(':checked')) {
            $(this).parent().find(Name).prop('checked', false);
        } else {
            $(this).parent().find(Name).prop('checked', true);
        }
    });
    $(document).on('click', '.spnMaindata', function () {
        $(this).parent().find(".rdoMain").trigger("click");
    });

    $(document).on('click', '#tbodyOpenTradeHistory tr', function () {
        Trade.Graphflag = 3;
        Trade.TradeId = '';
        Trade.TradeId = $(this).attr('id');
        Trade.GraphType = 1;
        Trade.AssetId = $(this).find('.TradingType').attr('id');
        Trade.InputData = '';
        var chart = $('#graphcontainer').highcharts();
        chart.series[0].setData(Trade.InputData);
        chart.series[0].name = '';
        chart.redraw();
        //Trade.LoadGraph();
    });

});

//function myFunction(abc,Id) {
//    var abc = parseInt($('#tbodyOpenTradeHistory .timer').html());
//    if (parseInt(abc) > 0) {
//        setTimeout(function () {
//            abc = parseInt(abc) - 1;
//            $('#tbodyOpenTradeHistory .timer').html(abc);
//            myFunction(parseInt(abc) - 1,Id);

//        }, 1000);
//    } else {
//        abc = "finished";
//        $('#tbodyOpenTradeHistory .timer').html(abc);
//    }
//    return abc;
//}