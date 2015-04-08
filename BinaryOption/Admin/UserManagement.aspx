<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/AdminNew.Master" AutoEventWireup="true"
    CodeBehind="UserManagement.aspx.cs" Inherits="BinaryOption.Admin.UserManagement" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link href='<%= ResolveClientUrl("~/css/style.css")%>' rel="stylesheet" type="text/css" />
    <link href='<%= ResolveClientUrl("~/Styles/style.css")%>' rel="stylesheet" type="text/css" />
    <script src='<%= ResolveClientUrl("~/Scripts/Common/jquery.paginate.js")%>' type="text/javascript"></script>
    <script src='<%= ResolveClientUrl("~/Scripts/Admin/UserManagement.js")%>' type="text/javascript"></script>
    <title>Binary Options :: User Management</title>
    <style type="text/css">
        .ac_open
        {
            float: left;
            width: 100%;
        }
        .binary_sec .head-bar_div
        {
            background: none;
            display: inline-block;
            float: left;
        }
        .ui-datepicker-trigger
        {
            margin-left: 5px;
            margin-top: 6px;
        }
        .binary_sec .head-bar_div table th
        {
            padding: 0 0px;
        }
        .binary_sec .head-bar_div table td
        {
            padding: 10px 0;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentMain" runat="server">
    <asp:HiddenField runat="server" ID="hdnSitePath" ClientIDMode="Static"></asp:HiddenField>
    <div class="binary_sec" style="margin-top: 15px;">
        <div class="head-bar_div">
            <p style="float: left; margin-top: 0; width: 23.5%; z-index: 9999; position: relative;">
                <input type="text" id="txtSearch" onpaste="return false" ondrop="blur();return false;"
                    class="search-bg2" style="min-width: 90%; margin-top: 3px; display: none;" placeholder="Username search" />
            </p>
            <div class="submit_btn" style="float: right; margin-top: 0; width: 8.5%; z-index: 9999;
                position: relative;">
                <a style="cursor: pointer" id="btnAddUser" tabindex="4">Add User</a>
            </div>
            <div style="width: 100%; float: left; background: none repeat scroll 0% 0% rgb(75, 75, 75);
                margin-top: 15px;">
                <table id="tblUserManagement" width="1102" border="1" cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th class="IsActivesort" id="IsActive" width="90" height="35" style="cursor: pointer;">
                                Status
                                <img alt="" class="imgDesc" style="display: none;" src="<%=_sitePath %>images/downarrow.png" />
                                <img alt="" class="imgAsc" style="display: none;" src="<%=_sitePath %>images/uparrow.png" />
                            </th>
                            <th class="UserNamesort" id="UserName" width="90" height="35" style="cursor: pointer;">
                                User Name
                                <img alt="" class="imgDesc" style="display: none;" src="<%=_sitePath %>images/downarrow.png" />
                                <img alt="" class="imgAsc" style="display: none;" src="<%=_sitePath %>images/uparrow.png" />
                            </th>
                            <th class="FirstNamesort" id="FirstName" width="90" style="cursor: pointer;">
                                First Name
                                <img alt="" class="imgDesc" style="display: none;" src="<%=_sitePath %>images/downarrow.png" />
                                <img alt="" class="imgAsc" style="display: none;" src="<%=_sitePath %>images/uparrow.png" />
                            </th>
                            <th class="LastNamesort" id="LastName" width="84" style="cursor: pointer;">
                                Last Name
                                <img alt="" class="imgDesc" style="display: none;" src="<%=_sitePath %>images/downarrow.png" />
                                <img alt="" class="imgAsc" style="display: none;" src="<%=_sitePath %>images/uparrow.png" />
                            </th>
                            <th width="90">
                                Phone
                            </th>
                            <th width="90">
                                Email
                            </th>
                            <th width="92">
                                DOB
                            </th>
                            <th class="Balancesort" id="Balance" width="90" height="35" style="cursor: pointer;">
                                Balance
                                <img alt="" class="imgDesc" style="display: none;" src="<%=_sitePath %>images/downarrow.png" />
                                <img alt="" class="imgAsc" style="display: none;" src="<%=_sitePath %>images/uparrow.png" />
                            </th>
                            <th width="200">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody id="tbodyUserManagement">
                    </tbody>
                </table>
            </div>
        </div>
        <p style="height: 10px;">
            <div id="divUserManagementGridPaging" style="float: left; margin-top: 20px; padding-left: 64px;
                width: 50%;">
            </div>
            <div style="float: right; margin-top: 20px; width: 180px;" id="divUserManagementGridPageDDL">
                <span id="spanUserManagementGridPageSize" style="color: White; line-height: 30px;
                    padding-left: 25%;">Page Size:</span>
                <select id="ddlUserManagementGridperpage" style="width: 55px; height: 29px; margin: 0;
                    float: right">
                    <option selected="selected">10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
            </div>
        </p>
    </div>
</asp:Content>
