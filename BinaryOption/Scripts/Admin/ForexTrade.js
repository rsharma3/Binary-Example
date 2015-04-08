var Forexx = {
    contentType: 'application/json;charset=utf-8',
    type: 'POST',
    dataType: 'json',
    Id: '',
    MenuType: 0,
    TradingType: '',
    TradingId: '',
    AssetTypeId: 2,
    ParentId: '',
    Indicator: '',
    IndicatorID: '',
    sort: '',
    PageSize: 10,
    PageNo: 1,
    NumberOfPages: 0,
    Totalrec: 0,
    searchText: '',
    AssetDetailId: '',
    SortExp: '',
    logicbit: 0,
    ExpireDropDown: '',
    SitePath: '',
    payoutOldValue: '',
    priceOldValue: '',
    payoutStatusBit: 0,
    BrowserVersion: '',
    ForexPrice: '',
    getMenues: function (ParentId) {
        var d = { ParentId: ParentId };
        $.ajax({
            type: 'POST',
            url: Forexx.SitePath + 'WebServices/Forex.asmx/GetTradingType',
            dataType: Forexx.dataType,
            data: JSON.stringify(d),
            contentType: Forexx.contentType,
            async: false,
            success: function (data) {
                var html = "";
                var parentcheck = data.d[0].ParentId;
                if (parentcheck == 0) {
                    $.each(data.d, function (key, val) {
                        if (val.Id != 10) {
                            html += "<li class='liMenu TradeTypeTabElement' style='display:none;' id='" + val.Id + "' parentId = '" + val.ParentId + "'>" + val.TradingType + "</li>";
                        } else {
                            html += "<li class='liMenu TradeTypeTabElement ' id='" + val.Id + "' parentId = '" + val.ParentId + "'>" + val.TradingType + "</li>";
                        }
                    });
                    $("#menuTab").html(html);
                }
                else {
                    $('#subMenuTab').html('');
                    $.each(data.d, function (key, val) {
                        html += "<li class='liMenusub TradeTypeTabElement' id='" + val.Id + "' parentId = '" + val.ParentId + "'>" + val.TradingType + "</li>";
                    });
                    $('#subMenuTab').html(html);
                    $('#DvSubMenu').css('display', 'block').css('width', '80%');

                }
            },
            error: function (xhr) {
            }
        });
    },

    // -------------------  Main Asset Grid -----------------
    getAssetGrid: function () {
        var d = { assetTypeId: Forexx.AssetTypeId, tradingTypeId: Forexx.TradingId, pageNumber: Forexx.PageNo, pageSize: Forexx.PageSize, sort: Forexx.SortExp, searchText: Forexx.searchText };
        $.ajax({
            type: 'POST',
            url: Forexx.SitePath + 'WebServices/Forex.asmx/GetGridDataByTradingType',
            dataType: Forexx.dataType,
            data: JSON.stringify(d),
            contentType: Forexx.contentType,
            async: false,
            success: function (data) {
                var str = "";
                if (data.d.length > 0) {
                    for (var i = 0; i < data.d.length; i++) {
                        str += '<tr class="value_bar">';
                        if (data.d[i].AssetStatus == false) {
                            str += '<td class="activeorInacticeStatus"><a class="aInactive"><abbr title="Inactive"><image src="' + Forexx.SitePath + 'images/red-blank.png" /></abbr></a></td>';
                        }
                        else {
                            str += '<td class="activeorInacticeStatus"><a class="aActive"><abbr title="Active"><image src="' + Forexx.SitePath + 'images/Green-Blank.png" /></abbr></a></td>';
                        }

                        str += '<td class="tdForxAsset">' + data.d[i].Asset + '</td>';
                        str += '<td class="tdForxPrice" style="text-align:Right;">' + data.d[i].Price + '</td>';
                        str += '<td class="tdForxTelnetValue1" style="text-align:Right;">' + data.d[i].TelnetValue1 + '</td>';
                        str += '<td class="tdForxTelnetValue2" style="text-align:Right;">' + data.d[i].TelnetValue2 + '</td>';
                        str += '<td class="tdForxPayout" style="text-align:Right;">' + data.d[i].Payout + '</td>';
                        str += '<td class="tdForxTradingTypeID" style="display:none;">' + data.d[i].TradingTypeId + '</td>';
                        if (data.d[i].TradingTypeId > 10) {
                            str += '<td class="tdForxExpireTime" ><select class="ddlforxExpire" disabled="disabled" style="width:105px; "><option value="">' + data.d[i].TradingType + '</option></select></td>';
                        }
                        else {
                            str += '<td class="tdForxExpireTime" >NA</td>';
                        }

                        if (data.d[i].AssetStatus == false) {
                            str += '<td class="tdaction"><a aDetaikId=' + data.d[i].AssetDetailId + ' class="aEdit"><abbr title="Edit"><image src="' + Forexx.SitePath + 'images/edit.png" /></abbr></a> &nbsp; <a class="abtnActive" status=' + data.d[i].AssetStatus + ' assetId=' + data.d[i].AssetId + '><abbr title="Active" ><image src="' + Forexx.SitePath + 'images/active.png" /></abbr></a></td>';
                        }
                        else {
                            str += '<td class="tdaction"><a aDetaikId=' + data.d[i].AssetDetailId + ' class="aEdit"><abbr title="Edit"><image src="' + Forexx.SitePath + 'images/edit.png" /></abbr></a> &nbsp;  <a class="abtnInactive" status=' + data.d[i].AssetStatus + ' assetId=' + data.d[i].AssetId + '><abbr title="Inactive"><image src="' + Forexx.SitePath + 'images/inactive.png" /></abbr></a></td>';
                        }
                        str += '</tr>';
                    }
                    Forexx.payoutStatusBit = 0;
                    Forexx.Totalrec = data.d[0].Total;
                    Forexx.PageSize = $('#ddlForexAssetGridperpage').val();
                    Forexx.NumberOfPages = Math.ceil(Forexx.Totalrec / Forexx.PageSize);
                }
                else {
                    Forexx.Totalrec = 0;
                    Forexx.PageSize = $('#ddlForexAssetGridperpage').val();
                    Forexx.NumberOfPages = 0;
                }

                $("#tbodyForexAsset").html(str);
            },
            error: function (xhr) {
            }
        });
    },
    // -------------------  update Asset Status in Grid -----------------
    UpdateAssetGrid: function (payout) {
        var d = { assetDetailId: Forexx.AssetDetailId, payout: payout, price: Forexx.ForexPrice };
        $.ajax({
            type: 'POST',
            url: Forexx.SitePath + 'WebServices/Forex.asmx/UpdateAssetDetail',
            dataType: Forexx.dataType,
            data: JSON.stringify(d),
            contentType: Forexx.contentType,
            async: false,
            success: function (data) {
                commonNotification.MessageBox(commonNotification.DataUpdated, commonNotification.messageSuccess);
                Forexx.getAssetGrid();
            },
            error: function (xhr) {
            }
        });
    },
    // -------------------  Active or Inactive in Asset Grid -----------------
    ActiveOrInactiveAsset: function (AssetId) {
        var d = { assetId: AssetId };
        $.ajax({
            type: 'POST',
            url: Forexx.SitePath + 'WebServices/Forex.asmx/ActiveInactiveAsset',
            dataType: Forexx.dataType,
            data: JSON.stringify(d),
            contentType: Forexx.contentType,
            async: false,
            success: function (data) {
                commonNotification.MessageBox(commonNotification.ActivateBox, commonNotification.messageSuccess);
            },
            error: function (xhr) {
            }

        });
        return false;
    },
    // -------------------  Main Asset Grid  Paging-----------------
    PagingGrid: function () {
        Forexx.PageSize = $("#ddlForexAssetGridperpage").val();
        Forexx.getAssetGrid();
        $("#divForexAssetGridPaging").show();
        if (parseInt(Forexx.NumberOfPages) > 1) {
            $("#divForexAssetGridPaging").show();
            $("#divForexAssetGridPageDDL").show();
            var displayPage = 8;
            if (Forexx.NumberOfPages < displayPage) {
                displayPage = Forexx.NumberOfPages;
            }

            if (Forexx.PageNo > Forexx.NumberOfPages) {
                Forexx.PageNo = Forexx.NumberOfPages;
            }
            $("#divForexAssetGridPaging").paginate({
                count: Forexx.NumberOfPages,
                start: Forexx.PageNo,
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
                    Forexx.PageNo = page;
                    Forexx.getAssetGrid();
                }
            });
        }
        else if (parseInt(Forexx.NumberOfPages) == 1) {

            $("#divForexAssetGridPaging").hide();
            $("#divForexAssetGridPageDDL").show();
        }
        else {

            $('#divForexAssetGridPaging, #divForexAssetGridPageDDL').hide();
        }
        return false;
    }

}
// -------------------  Dom Start Here -----------------
$(document).ready(function () {
    var bName = navigator.appName;
    var bVer = navigator.appVersion;

    if (bVer.indexOf('MSIE 7.0') > 0)
        Forexx.BrowserVersion = "ie7";
    if (bVer.indexOf('MSIE 8.0') > 0)
        Forexx.BrowserVersion = "ie8";
    if (bVer.indexOf('MSIE 9.0') > 0)
        Forexx.BrowserVersion = "ie9";
    $(this).attr('placeholder', 'Asset search');
    if (bVer.indexOf('MSIE 10.0') > 0)
        Forexx.BrowserVersion = "ie10";
    if (bVer.indexOf('rv:11.0') > 0) {

        Forexx.BrowserVersion = "ie11";

    }

    Forexx.SitePath = $('#hdnSitePath').val();
    SessionCheck.IsSession();
    Forexx.ParentId = 'null';
    Forexx.Indicator = true;
    Forexx.getMenues(Forexx.ParentId);
    Forexx.TradingId = null;
    Forexx.PageSize = $("#ddlForexAssetGridperpage").val();
    Forexx.PagingGrid();
    $("#txtSearch").show();
    $(document).delegate("li.liMenu", "click", function () {
        $('li.liMenu').removeClass('TradeTypeActive');
        $(this).addClass('TradeTypeActive').css('color', 'white');
        Forexx.Indicator = false;
        Forexx.ParentId = $(this).attr('id');
        /// Forexx.TradingId=Forexx.ParentId;
        Forexx.getMenues(Forexx.ParentId);

    });

    $(document).on("click", ".liMenusub", function () {
        Forexx.searchText = "";
        Forexx.ExpireDropDown = $(this).html();
        $('.liMenusub').removeClass('TradeTypeActive');
        $(this).addClass('TradeTypeActive').css('color', 'white');
        Forexx.searchText = $("#txtSearch").val();
        Forexx.TradingId = $(this).attr('id');
        Forexx.PageNo = 1;

        Forexx.PageSize = $("#ddlForexAssetGridperpage").val();
        Forexx.PagingGrid();
        $("#txtSearch").show();
    });

    // -------------------Update Status Using  Edit Function   -----------------
    $(document).on("click", ".aEdit", function () {
        Forexx.PageNo = 1;
        if (Forexx.payoutStatusBit == 0) {
            Forexx.payoutOldValue = "";
            Forexx.payoutOldValue = $(this).parent().parent().find('.tdForxPayout').html();
            Forexx.priceOldValue = $(this).parent().parent().find('.tdForxPrice').html();
            $(this).html('<a class="aSave"><abbr title="Save"><image src="' + Forexx.SitePath + 'images/save.png"/></abbr></a> <a class="aCancel"><abbr title="Cancel"><image src="' + Forexx.SitePath + 'images/cancel.png"/></abbr></a>');
            if (Forexx.payoutOldValue == "null") {
                Forexx.payoutOldValue = 0;
            }
            var str = ' <label><span style="color:Red;">* </span></label> <input type="text" class="validate[required] txtForxPayout"  Value="' + Forexx.payoutOldValue + '" onpaste="return false" ondrop="blur();return false;" maxlength="3" />';
            var strprice = ' <label><span style="color:Red;">* </span></label> <input type="text" class="validate[required] txtForxPrice"  ondrop="blur();return false;" onpaste="return false" Value="' + Forexx.priceOldValue + '" onpaste="return false" ondrop="blur();return false;"/>';
            $(this).parent().parent().find('.tdForxPayout').html(str);
            $(this).parent().parent().find('.tdForxPrice').html(strprice);
            Forexx.AssetDetailId = $(this).attr('aDetaikId');
            Forexx.payoutStatusBit = 1;
        }
        return false;
    });

    $(document).on("click", ".aSave", function () {
        var hasError1 = true;
        if ($(".txtForxPayout").validationEngine('validate', '.txtForxPayout')) {
            hasError1 = false;
        }
        if ($(".txtForxPrice").validationEngine('validate', '.txtForxPrice')) {
            hasError1 = false;
        }
        if (hasError1 == true || hasError1 == "true") {
            var strpayout = $(".txtForxPayout").val();
            Forexx.ForexPrice = $(".txtForxPrice").val();
            $(this).parent().parent().parent().find('.tdForxPayout').html(strpayout);
            $(this).parent().parent().parent().find('.tdForxPrice').html(Forexx.ForexPrice);
            $(this).parent().html('<a class="aEdit"><abbr title="Edit"><image src="' + Forexx.SitePath + 'images/edit.png"/></abbr></a>');
            Forexx.UpdateAssetGrid(strpayout);
        }
        Forexx.payoutStatusBit = 0;
        return false;
    });

    $(document).on("click", ".aCancel", function () {
        $(this).parent().parent().parent().find('.tdForxPayout').html(Forexx.payoutOldValue);
        $(this).parent().html('<a class="aEdit"><abbr title="Edit"><image src="' + Forexx.SitePath + 'images/edit.png"/></abbr></a>');
        Forexx.payoutStatusBit = 0;
        Forexx.PagingGrid();
        return false;
    });

    $(document).on('keypress', '.txtForxPrice', function (e) {
        var txtValue = $('.txtForxPrice').val();
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
    // -------------------End of Update Status Using  Edit Function   -----------------


    // -------------------Sorting of Grid   -----------------

    $(document).on("click", ".Forexsort", function () {
        $('.imgAsc').hide();
        $('.imgDesc').hide();
        if ($("#tbodyForexAsset tr").length > 0) {
            if (Forexx.sort == '') {
                Forexx.sort = 'DESC';
            }
            var ColName = $(this).attr('id');
            Forexx.SortExp = ColName + ' ' + Forexx.sort;
            var SortArray = Forexx.SortExp.split(" ");
            if (SortArray[1] == 'ASC') {
                Forexx.sort = 'DESC';
                $(this).find('.imgDesc').show();
                $(this).find('.imgAsc').hide();
            }
            else {
                Forexx.sort = 'ASC';
                $(this).find('.imgAsc').show();
                $(this).find('.imgDesc').hide();
            }
            Forexx.PageNo = 1;
            Forexx.PageSize = $("#ddlForexAssetGridperpage").val();
            Forexx.PagingGrid();
        }
        return false;
    });

    // -------------------Payout Textbox Validation  -----------------

    $(document).on('keypress', '.txtForxPayout', function (e) {
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

    // -------------------Active Asset Status   -----------------

    $(document).on('click', '.abtnActive', function () {
        if (Forexx.payoutStatusBit == 0) {
            var AssetId = $(this).attr('assetId');
            $.msgBox({
                title: "Confirm",
                content: commonNotification.StausConfirmation,
                type: "confirm",
                async: false,
                buttons: [{ value: "Yes" }, { value: "No"}],
                success: function (result) {
                    if (result == "Yes") {
                        Forexx.ActiveOrInactiveAsset(AssetId);
                        Forexx.getAssetGrid();
                    } else {
                    }
                }
            });



        }

        return false;
    });

    // -------------------Inactive Asset Status   -----------------

    $(document).on('click', '.abtnInactive', function () {
        if (Forexx.payoutStatusBit == 0) {
            var AssetId = $(this).attr('assetId');

            $.msgBox({
                title: "Confirm",
                content: commonNotification.StausConfirmation,
                type: "confirm",
                async: false,
                buttons: [{ value: "Yes" }, { value: "No"}],
                success: function (result) {
                    if (result == "Yes") {
                        Forexx.ActiveOrInactiveAsset(AssetId);
                        Forexx.getAssetGrid();
                    } else {
                    }
                }
            });

        }
        return false;
    });

    // -------------------Paging Change using DDL  -----------------

    $("#ddlForexAssetGridperpage").change(function () {
        if (Forexx.TradingId != '' || Forexx.TradingId != "") {
            Forexx.NumberOfPages = 0;
            Forexx.PageNo = 1;
            Forexx.PageSize = $("#ddlForexAssetGridperpage").val();
            Forexx.SortExp = "";
            Forexx.PagingGrid();
        }
    });

    // -------------------Searching   -----------------

    $("#txtSearch").keypress(function (event) {
        Forexx.searchText = "";
        if (event.which < 48 || (event.which > 57 && event.which < 65) || (event.which > 90 && event.which < 97) || (event.which >= 123 && event.which <= 126) || (event.which >= 48 && event.which <= 57)) {
            if (event.which != 0 && event.which != 8) {
                event.preventDefault();
            }
        }
        if (event.keyCode == 13) {
            Forexx.searchText = $("#txtSearch").val();
            Forexx.PagingGrid();
            return false;
        }
    });

    //// ------------------place Container For Search Box  -----------------

    $('#txtSearch').focus(function () {
        $(this).attr('placeholder', '');
    });
    $('#txtSearch').blur(function () {
        $(this).attr('placeholder', 'Asset search');
    });

    //// ------------------ End of place Container For Search Box  -----------------

    //$(document).on('mouseenter',"#tblForexAsset tr td",function(){
    //    $(this).parent().css('background', '#CFCFCF');
    //});
    //$(document).on('mouseout',"#tblForexAsset tr td",function () {
    //    $(this).parent().css('background', 'White');
    //});
});