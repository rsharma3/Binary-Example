<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/AdminNew.Master" AutoEventWireup="true"
    CodeBehind="ForexManagement.aspx.cs" Inherits="BinaryOption.Admin.WebForm1" %>

<%@ Register Src="~/UserControl/Menu.ascx" TagName="MenuUserControl" TagPrefix="MenuUserControl" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Binary Options :: Forex Management</title>
    <%--   <link href='<%= ResolveClientUrl("~/css/style2.css")%>' rel="stylesheet" type="text/css" />--%>
    <link href='<%= ResolveClientUrl("~/css/style.css")%>' rel="stylesheet" type="text/css" />
    <link href='<%= ResolveClientUrl("~/Styles/style.css")%>' rel="stylesheet" type="text/css" />
    <script src='<%= ResolveClientUrl("~/Scripts/Common/jquery.paginate.js")%>' type="text/javascript"></script>
    <script src='<%= ResolveClientUrl("~/Scripts/Admin/ForexTrade.js")%>' type="text/javascript"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentMain" runat="server">
    <asp:HiddenField runat="server" ID="hdnSitePath" ClientIDMode="Static"></asp:HiddenField>
    <MenuUserControl:MenuUserControl ID="ucMenuUserControl" runat="server"></MenuUserControl:MenuUserControl>
    <br />
    <div class="binary_sec">
        <div class="head-bar_div">
            <p style="float: right; margin-top: -3%; width: 23.5%; z-index: 9999; position: relative;">
                <input type="text" id="txtSearch" onpaste="return false" ondrop="blur();return false;"
                    class="search-bg2" style="min-width: 90%; display: none;" placeholder="Asset search" />
            </p>
            <table id="tblForexAsset" width="1102" border="1" cellspacing="0" cellpadding="0">
                <thead>
                    <tr>
                        <th class="Forexsort" id="AssetStatus" width="97" height="35" style="cursor: pointer;">
                            Status
                            <img class="imgDesc" style="display: none;" src="<%=_sitePath %>images/downarrow.png" />
                            <img class="imgAsc" style="display: none;" src="<%=_sitePath %>images/uparrow.png" />
                        </th>
                        <th class="Forexsort" id="Asset" width="84" cursor="pointer" style="cursor: pointer;">
                            Asset
                            <img class="imgDesc" style="display: none;" src="<%=_sitePath %>images/downarrow.png" />
                            <img class="imgAsc" style="display: none;" src="<%=_sitePath %>images/uparrow.png" />
                        </th>
                        <th width="82">
                            Price
                        </th>
                        <th width="119">
                            Telnet Value 1
                        </th>
                        <th width="92">
                            Telnet Value 2
                        </th>
                        <th width="100">
                            % Payout
                        </th>
                        <th width="98">
                            Expires
                        </th>
                        <th width="130">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody id="tbodyForexAsset">
                </tbody>
            </table>
        </div>
        <p style="height: 10px;">
            <div id="divForexAssetGridPaging" style="float: left; width: 50%;">
            </div>
            <div style="float: right; width: 180px;" id="divForexAssetGridPageDDL">
                <span id="spanForexAssetGridPageSize" style="padding-left: 25%; color: White;">Page
                    Size:</span>
                <select id="ddlForexAssetGridperpage" style="width: 55px; height: 29px; margin: 0;
                    float: right">
                    <option selected="selected">10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
            </div>
        </p>
    </div>
</asp:Content>
