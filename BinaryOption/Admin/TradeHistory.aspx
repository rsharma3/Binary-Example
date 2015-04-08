<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/AdminNew.Master" AutoEventWireup="true"
    CodeBehind="TradeHistory.aspx.cs" Inherits="BinaryOption.Admin.TradeHistory" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Binary Options :: Trade History</title>
    <link href='<%= ResolveClientUrl("~/css/style.css")%>' rel="stylesheet" type="text/css" />
    <link href='<%= ResolveClientUrl("~/Styles/style.css")%>' rel="stylesheet" type="text/css" />
    <script src='<%= ResolveClientUrl("~/Scripts/Common/jquery.paginate.js")%>' type="text/javascript"></script>
    <link href='<%= ResolveClientUrl("~/css/jquery.ui.datepicker.css")%>' rel="stylesheet"
        type="text/css" />
    <script src='<%= ResolveClientUrl("~/Scripts/Plugins/jquery.ui.datepicker.js")%>'
        type="text/javascript"></script>
    <script src='<%= ResolveClientUrl("~/Scripts/Admin/TradingHistory.js")%>' type="text/javascript"></script>
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
            padding: 0 5px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentMain" runat="server">
    <asp:HiddenField runat="server" ID="hdnSitePath" ClientIDMode="Static"></asp:HiddenField>
    <div class="binary_sec">
        <div class="head-bar_div">
            <div style="width: 500px; float: left; margin: 15px 0px; padding: 0px;">
                <div style="float: left; margin: 0; padding: 0;">
                    <label style="float: left; width: auto; line-height: 30px; margin: 0px 10px 0px 0px;">
                        Date From
                    </label>
                    <span style="float: left; width: auto; margin: 0px 30px 0px 0px;">
                        <input type="text" id="txtFromDate" style="width: 80px; border-radius: 2px; background: #fff;"
                            ondrop="blur();return false;" onpaste="return false" class="search-bg2" placeholder="From Date" /></span>
                </div>
                <div style="float: left; margin: 0; padding: 0;">
                    <label style="float: left; width: auto; line-height: 30px; margin: 0px 10px 0px 0px;">
                        To
                    </label>
                    <span style="float: left; width: auto; margin: 0px 30px 0px 0px;">
                        <input type="text" id="txtToDate" style="width: 80px; border-radius: 2px; background: #fff;"
                            ondrop="blur();return false;" onpaste="return false" class="search-bg2" placeholder="To Date" /></span>
                </div>
            </div>
          <%--  <div class="submit_btn" style="float: right; margin: 15px 2px 15px 0px; width: 8.5%;
                z-index: 9999; position: relative;">
                <a style="cursor: pointer" id="btnViewTradings" tabindex="4">Search</a>
            </div>--%>  <div class="submit_btn" style="margin: 15px 2px 15px 340px; width: 8.5%;
                z-index: 9999; position: relative;">
                <a style="cursor: pointer" id="btnViewTradings" tabindex="4">Search</a>
            </div>
              <div class="submit_btn" style="float: right; margin: 15px 2px 15px 0px; width: 8.5%;
                z-index: 9999; position: relative;">
                <a style="cursor: pointer" id="btnBack" tabindex="4">Back</a>
            </div>
            <div style="width: 100%; float: left; background: none repeat scroll 0% 0% rgb(75, 75, 75);
                margin-top: 10px;">
                <table id="tblTradingHistory" width="1102" border="1" cellspacing="0" cellpadding="0">
                    <thead>
                        <tr>
                            <th class="TradingTypesort" id="TradingType" width="97" height="35" style="cursor: pointer;">
                                Trading Type
                                <img alt="" class="imgDesc" style="display: none;" src="<%=_sitePath %>images/downarrow.png" />
                                <img alt="" class="imgAsc" style="display: none;" src="<%=_sitePath %>images/uparrow.png" />
                            </th>
                            <th class="BidTypesort" id="BidType" width="84" style="cursor: pointer;">
                                Bid Type
                                <img alt="" class="imgDesc" style="display: none;" src="<%=_sitePath %>images/downarrow.png" />
                                <img alt="" class="imgAsc" style="display: none;" src="<%=_sitePath %>images/uparrow.png" />
                            </th>
                            <th class="Assetsort" id="Asset" width="84" style="cursor: pointer;">
                                Asset
                                <img alt="" class="imgDesc" style="display: none;" src="<%=_sitePath %>images/downarrow.png" />
                                <img alt="" class="imgAsc" style="display: none;" src="<%=_sitePath %>images/uparrow.png" />
                            </th>
                            <th width="90">
                                Invested Amount
                            </th>
                            <th width="90">
                                Payout (%)
                            </th>
                            <th width="92">
                                Target Price
                            </th>
                            <th width="92">
                                Trade Time
                            </th>
                            <th width="92">
                                Expiry Price
                            </th>
                            <th width="92">
                                Expiry Time
                            </th>
                            <th width="92">
                                Expiry Status
                            </th>
                            <th width="92">
                                Trading Status
                            </th>
                            <th width="92">
                                Return Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody id="tbodyTradingHistory">
                    </tbody>
                </table>
            </div>
        </div>
        <p style="height: 10px;">
            <div id="divTradingHistoryGridPaging" style="float: left; margin-top: 20px; padding-left: 64px;
                width: 50%;">
            </div>
            <div style="float: right; margin-top: 20px; width: 180px;" id="divTradingHistoryGridPageDDL ">
                <span id="spanTradingHistoryGridPageSize" style="color: White; line-height: 30px;
                    padding-left: 25%;">Page Size:</span>
                <select id="ddlTradingHistoryGridperpage" style="width: 55px; height: 29px; margin: 0;
                    float: right">
                    <option selected="selected">10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
            </div>
        </p>
    </div>
</asp:Content>
