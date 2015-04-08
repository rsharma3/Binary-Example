var UserManagement = {
    contentType: 'application/json;charset=utf-8',
    type: 'POST',
    dataType: 'json',
    sort: '',
    PageSize: 10,
    PageNo: 1,
    NumberOfPages: 0,
    Totalrec: 0,
    searchText: '',
    AssetDetailId: '',
    SortExp: '',
    SitePath: '',
    BrowserVersion: '',
    UserId: '00000000-0000-0000-0000-000000000000',

    /***************************** Get Data ***********************************/
    GetUsersDetail: function () {
        var d = { pageNumber: UserManagement.PageNo, pageSize: UserManagement.PageSize, sort: UserManagement.SortExp, searchText: UserManagement.searchText };
        $.ajax({
            type: 'POST',
            url: UserManagement.SitePath + 'WebServices/UserManagement.asmx/GetUserDetails',
            dataType: UserManagement.dataType,
            data: JSON.stringify(d),
            contentType: UserManagement.contentType,
            async: false,
            success: function (data) {
                var str = "";
                if (data.d.length > 0) {
                    for (var i = 0; i < data.d.length; i++) {
                        str += '<tr class="value_bar">';
                        str += '<td class="tdUserDetailId" style="display:none;">' + data.d[i].UserDetailId + '</td>';
                        if (data.d[i].IsActive == false) {
                            str += '<td class="activeorInacticeStatus"><a class="aInactive"><abbr title="Inactive"><image src="' + UserManagement.SitePath + 'images/red-blank.png" /></abbr></a></td>';
                        }
                        else {
                            str += '<td class="activeorInacticeStatus"><a class="aActive"><abbr title="Active"><image src="' + UserManagement.SitePath + 'images/Green-Blank.png" /></abbr></a></td>';
                        }
                        str += '<td class="tdUserName">' + data.d[i].UserName + '</td>';
                        str += '<td class="tdFirstName">' + data.d[i].FirstName + '</td>';
                        str += '<td class="tdLastName">' + data.d[i].LastName + '</td>';
                        str += '<td class="tdPhone">' + data.d[i].Phone + '</td>';
                        str += '<td class="tdEmail">' + data.d[i].Email + '</td>';
                        str += '<td class="tdDOB">' + data.d[i].DOB + '</td>';
                        str += '<td class="tdBalance" style="text-align:Right; padding-right: 5px;">' + data.d[i].Balance + '</td>';

                        if (data.d[i].IsActive == false) {
                            str += '<td class="tdaction"><a class="abtnActive" status=' + data.d[i].IsActive + ' userDetailId=' + data.d[i].UserDetailId + '><abbr title="Active" ><image src="' + UserManagement.SitePath + 'images/active.png" /></abbr></a> &nbsp; <a userIdToViewTradingHistory="' + data.d[i].UserLoginId + '" class="aViewTrades"><abbr title="View Tradings"><image src="' + UserManagement.SitePath + 'images/viewtrading.png" /></abbr></a> </td>';
                        }
                        else {
                            str += '<td class="tdaction"><a class="abtnInactive" status=' + data.d[i].IsActive + ' userDetailId=' + data.d[i].UserDetailId + '> <abbr title="Inactive"><image src="' + UserManagement.SitePath + 'images/inactive.png" /></abbr></a> &nbsp; <a userIdToViewTradingHistory="' + data.d[i].UserLoginId + '" class="aViewTrades"><abbr title="View Tradings"><image src="' + UserManagement.SitePath + 'images/viewtrading.png" /></abbr></a></td>';
                        }
                        str += '</tr>';
                    }

                    UserManagement.Totalrec = data.d[0].Total;
                    UserManagement.PageSize = $('#ddlUserManagementGridperpage').val();
                    UserManagement.NumberOfPages = Math.ceil(UserManagement.Totalrec / UserManagement.PageSize);
                }
                else {
                    UserManagement.Totalrec = 0;
                    UserManagement.PageSize = $('#ddlUserManagementGridperpage').val();
                    UserManagement.NumberOfPages = 0;
                }

                $("#tbodyUserManagement").html(str);
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
            url: UserManagement.SitePath + 'WebServices/UserManagement.asmx/ActiveInactiveUser',
            dataType: UserManagement.dataType,
            data: JSON.stringify(d),
            contentType: UserManagement.contentType,
            async: false,
            success: function (data) {
                commonNotification.MessageBox(commonNotification.ActivateBox, commonNotification.messageSuccess);
            },
            error: function (xhr) {
            }

        });
        return false;
    },

    /***************************** Set UserId ***********************************/
    SetUserIdForTradingHistory: function (userDetailId) {
        var d = { userId: userDetailId };
        $.ajax({
            type: 'POST',
            url: UserManagement.SitePath + 'WebServices/UserManagement.asmx/SetUserIdToViewTradingHistory',
            dataType: UserManagement.dataType,
            data: JSON.stringify(d),
            contentType: UserManagement.contentType,
            async: false,
            success: function (data) {
            },
            error: function (xhr) {
            }

        });
        return false;
    },



    /***************************** Paging ***********************************/
    PagingGrid: function () {
        UserManagement.PageSize = $("#ddlUserManagementGridperpage").val();
        UserManagement.GetUsersDetail();
        $("#divUserManagementGridPaging").show();
        if (parseInt(UserManagement.NumberOfPages) > 1) {
            $("#divUserManagementGridPaging").show();
            $("#divUserManagementGridPageDDL").show();
            var displayPage = 8;
            if (UserManagement.NumberOfPages < displayPage) {
                displayPage = UserManagement.NumberOfPages;
            }

            if (UserManagement.PageNo > UserManagement.NumberOfPages) {
                UserManagement.PageNo = UserManagement.NumberOfPages;
            }
            $("#divUserManagementGridPaging").paginate({
                count: UserManagement.NumberOfPages,
                start: UserManagement.PageNo,
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
                    UserManagement.PageNo = page;
                    UserManagement.GetUsersDetail();
                }
            });
        }
        else if (parseInt(UserManagement.NumberOfPages) == 1) {

            $("#divUserManagementGridPaging").hide();
            $("#divUserManagementGridPageDDL").show();
        }
        else {

            $('#divUserManagementGridPaging, #divUserManagementGridPageDDL').hide();
        }
        return false;
    }

}


$(document).ready(function () {


    var bName = navigator.appName;
    var bVer = navigator.appVersion;

    if (bVer.indexOf('MSIE 7.0') > 0)
        UserManagement.BrowserVersion = "ie7";
    if (bVer.indexOf('MSIE 8.0') > 0)
        UserManagement.BrowserVersion = "ie8";
    if (bVer.indexOf('MSIE 9.0') > 0)
        UserManagement.BrowserVersion = "ie9";
    $(this).attr('placeholder', 'Username search');
    if (bVer.indexOf('MSIE 10.0') > 0)
        UserManagement.BrowserVersion = "ie10";
    if (bVer.indexOf('rv:11.0') > 0) {
        UserManagement.BrowserVersion = "ie11";
    }

    UserManagement.SitePath = $('#hdnSitePath').val();
    UserManagement.SetUserIdForTradingHistory(UserManagement.UserId);
    SessionCheck.IsSession();
    UserManagement.PageSize = $("#ddlUserManagementGridperpage").val();
    UserManagement.PagingGrid();
    $("#txtSearch").show();

    /***************************** Sorting ***********************************/
    $(document).on("click", ".IsActivesort", function () {
        $('.imgAsc').hide();
        $('.imgDesc').hide();
        if ($("#tbodyUserManagement tr").length > 0) {
            if (UserManagement.sort == '') {
                UserManagement.sort = 'DESC';
            }
            var ColName = $(this).attr('id');
            UserManagement.SortExp = ColName + ' ' + UserManagement.sort;
            var SortArray = UserManagement.SortExp.split(" ");
            if (SortArray[1] == 'ASC') {
                UserManagement.sort = 'DESC';
                $(this).find('.imgDesc').show();
                $(this).find('.imgAsc').hide();
            }
            else {
                UserManagement.sort = 'ASC';
                $(this).find('.imgAsc').show();
                $(this).find('.imgDesc').hide();
            }
            UserManagement.PageNo = 1;
            UserManagement.PageSize = $("#ddlUserManagementGridperpage").val();
            UserManagement.PagingGrid();
        }
        return false;
    });

    $(document).on("click", ".UserNamesort", function () {
        $('.imgAsc').hide();
        $('.imgDesc').hide();
        if ($("#tbodyUserManagement tr").length > 0) {
            if (UserManagement.sort == '') {
                UserManagement.sort = 'DESC';
            }
            var ColName = $(this).attr('id');
            UserManagement.SortExp = ColName + ' ' + UserManagement.sort;
            var SortArray = UserManagement.SortExp.split(" ");
            if (SortArray[1] == 'ASC') {
                UserManagement.sort = 'DESC';
                $(this).find('.imgDesc').show();
                $(this).find('.imgAsc').hide();
            }
            else {
                UserManagement.sort = 'ASC';
                $(this).find('.imgAsc').show();
                $(this).find('.imgDesc').hide();
            }
            UserManagement.PageNo = 1;
            UserManagement.PageSize = $("#ddlUserManagementGridperpage").val();
            UserManagement.PagingGrid();
        }
        return false;
    });

    $(document).on("click", ".FirstNamesort", function () {
        $('.imgAsc').hide();
        $('.imgDesc').hide();
        if ($("#tbodyUserManagement tr").length > 0) {
            if (UserManagement.sort == '') {
                UserManagement.sort = 'DESC';
            }
            var ColName = $(this).attr('id');
            UserManagement.SortExp = ColName + ' ' + UserManagement.sort;
            var SortArray = UserManagement.SortExp.split(" ");
            if (SortArray[1] == 'ASC') {
                UserManagement.sort = 'DESC';
                $(this).find('.imgDesc').show();
                $(this).find('.imgAsc').hide();
            }
            else {
                UserManagement.sort = 'ASC';
                $(this).find('.imgAsc').show();
                $(this).find('.imgDesc').hide();
            }
            UserManagement.PageNo = 1;
            UserManagement.PageSize = $("#ddlUserManagementGridperpage").val();
            UserManagement.PagingGrid();
        }
        return false;
    });

    $(document).on("click", ".LastNamesort", function () {
        $('.imgAsc').hide();
        $('.imgDesc').hide();
        if ($("#tbodyUserManagement tr").length > 0) {
            if (UserManagement.sort == '') {
                UserManagement.sort = 'DESC';
            }
            var ColName = $(this).attr('id');
            UserManagement.SortExp = ColName + ' ' + UserManagement.sort;
            var SortArray = UserManagement.SortExp.split(" ");
            if (SortArray[1] == 'ASC') {
                UserManagement.sort = 'DESC';
                $(this).find('.imgDesc').show();
                $(this).find('.imgAsc').hide();
            }
            else {
                UserManagement.sort = 'ASC';
                $(this).find('.imgAsc').show();
                $(this).find('.imgDesc').hide();
            }
            UserManagement.PageNo = 1;
            UserManagement.PageSize = $("#ddlUserManagementGridperpage").val();
            UserManagement.PagingGrid();
        }
        return false;
    });

    $(document).on("click", ".Balancesort", function () {
        $('.imgAsc').hide();
        $('.imgDesc').hide();
        if ($("#tbodyUserManagement tr").length > 0) {
            if (UserManagement.sort == '') {
                UserManagement.sort = 'DESC';
            }
            var ColName = $(this).attr('id');
            UserManagement.SortExp = ColName + ' ' + UserManagement.sort;
            var SortArray = UserManagement.SortExp.split(" ");
            if (SortArray[1] == 'ASC') {
                UserManagement.sort = 'DESC';
                $(this).find('.imgDesc').show();
                $(this).find('.imgAsc').hide();
            }
            else {
                UserManagement.sort = 'ASC';
                $(this).find('.imgAsc').show();
                $(this).find('.imgDesc').hide();
            }
            UserManagement.PageNo = 1;
            UserManagement.PageSize = $("#ddlUserManagementGridperpage").val();
            UserManagement.PagingGrid();
        }
        return false;
    });

    /***************************** Sorting ***********************************/


    /***************************** Activate User Status ***********************************/

    $(document).on('click', '.abtnActive', function () {
        var userDetailId = $(this).attr('userDetailId');
        UserManagement.ActiveOrInactiveAsset(userDetailId);
        UserManagement.GetUsersDetail();
        return false;
    });

    /***************************** DeActivate User Status ***********************************/

    $(document).on('click', '.abtnInactive', function () {
        var userDetailId = $(this).attr('userDetailId');
        UserManagement.ActiveOrInactiveAsset(userDetailId);
        UserManagement.GetUsersDetail();
        return false;
    });

    /***************************** Put UserId In Session ***********************************/
    $(document).on('click', '.aViewTrades', function () {
        var userDetailId = $(this).attr('userIdToViewTradingHistory');
        UserManagement.SetUserIdForTradingHistory(userDetailId);
        window.location.href = UserManagement.SitePath + "Admin/TradeHistory.aspx";
        return false;
    });

    /***************************** DDL Change Event ***********************************/

    $("#ddlUserManagementGridperpage").change(function () {
        UserManagement.NumberOfPages = 0;
        UserManagement.PageNo = 1;
        UserManagement.PageSize = $("#ddlUserManagementGridperpage").val();
        UserManagement.SortExp = "";
        UserManagement.PagingGrid();
    });

    /***************************** Search By Username ***********************************/

    $("#txtSearch").keypress(function (event) {
        UserManagement.searchText = "";
        if (event.which < 48 || (event.which > 57 && event.which < 65) || (event.which > 90 && event.which < 97) || (event.which >= 123 && event.which <= 126) || (event.which >= 48 && event.which <= 57)) {
            if (event.which != 0 && event.which != 8) {
                event.preventDefault();
            }
        }
        if (event.keyCode == 13) {
            UserManagement.searchText = $("#txtSearch").val();
            UserManagement.PageNo = 1;
            UserManagement.PagingGrid();
            return false;
        }
    });

    /********************* Place Container For Search Box ***************************/
    $('#txtSearch').focus(function () {
        $(this).attr('placeholder', '');
    });
    $('#txtSearch').blur(function () {
        $(this).attr('placeholder', 'Username search');
    });

    $('#btnAddUser').click(function () {
        window.location.href = UserManagement.SitePath + 'User/OpenAccount.aspx';
    });
});