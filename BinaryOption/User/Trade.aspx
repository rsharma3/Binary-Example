<%@ Page Title="" Language="C#" MasterPageFile="~/User/Use.Master" AutoEventWireup="true"
    CodeBehind="Trade.aspx.cs" Inherits="BinaryOption.User.WebForm1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Binary Options :: Trade</title>
    <link rel="stylesheet" id="style-color" href="../css/colors/blue-color.css" media="screen"
        type='text/css' />
    <link href="../css/grid.css" rel="stylesheet" type="text/css" />
    <script src="../Scripts/Plugins/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="../Scripts/User/Notification.js" type="text/javascript"></script>
    <script src="../Scripts/User/Trade.js" type="text/javascript"></script>
    <%-- <script src="http://code.highcharts.com/highcharts.js"></script>
    <script src="http://code.highcharts.com/modules/exporting.js"></script>
    <script src="../js/GraphTheme.js" type="text/javascript"></script>--%>
    <script src="../Scripts/Plugins/highstock.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/exporting.js" type="text/javascript"></script>
    <%--<script src="http://code.highcharts.com/stock/highstock.js"></script>
    <script src="http://code.highcharts.com/stock/modules/exporting.js"></script>--%>
    <script src="../js/GraphTheme.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery.validationEngine.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery.validationEngine-en.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery.toastmessage.tests.js" type="text/javascript"></script>
    <link href="../Styles/jquery.toastmessage.css" rel="stylesheet" type="text/css" />
    <style type="text/css">
        .custombtnDiv
        {
            olor: rgb(255, 255, 255);
            font: 15px/43px 'Roboto' ,Arial,Helvetica,sans-serif;
            text-align: right;
            background-color: Black;
            float: left;
            width: 105%;
            padding: 0px 2px 0px 0px;
            margin: 0px -15px -19px;
        }
        .customBtn
        {
            float: right;
            line-height: 17px;
            margin: 10px;
            padding: 0;
            background: none repeat scroll 0 0 #E6BC26;
            border-radius: 3px;
            border-top: 1px solid #F2DB62;
            color: #000000;
            cursor: pointer;
            font: 12px/18px 'Roboto' ,Arial,Helvetica,sans-serif;
            height: 18px;
            min-width: 63px;
            padding: 0 20px;
            text-align: center;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="divoverlay" style="height: 100%; width: 100%; position: fixed; top: 0; left: 0;
        background: #B8B8B8; opacity: 0.5; z-index: 1; display: none;">
        <img alt="" src="<%=_sitePath %>Images/ajax-loader.gif" style="position: relative;
            top: 40%; left: 40%;" />
    </div>
    <asp:HiddenField runat="server" ID="hdnSitePath" ClientIDMode="Static"></asp:HiddenField>
    <div class="CustomGrid-popup">
        <div id="dvHeaderShow" style="color: #FFFFFF; font: 19px/0px 'Roboto',Arial,Helvetica,sans-serif;
            text-align: left; margin: 0; padding-bottom: 25px;">
            Please Select Your Preferences</div>
        <div id="divhead" style="width: 100%; float: left;">
        </div>
        <div id="tblCustomFilter" style="overflow-y: scroll; max-height: 200px; width: 100%;
            float: left;">
        </div>
        <div class="custombtnDiv">
            <a class="customBtn" id="btnCustomfilterApply">Apply</a></div>
    </div>
    <%--   <div class="LoginDiv-popup">
  <div style="background-color: #000000;height: 39px;margin-left: -14px;margin-top: -22%;width: 116%;"></div>
    
        <input  id="txtUserName" type="text" placeholder="Username" tabindex="100" style="margin-top:10px;">
                    <input  id="txtPassword" type="password" placeholder="********" tabindex="101" style="margin-top:10px;">
                    <div>
                    <a href="ForgetPassword.aspx"  tabindex="102">Forgot Password?</a>
                    <a href="javascript:void(0);" id="btnLogin" style="background:#FBA62A;color: #FFFFFF !important;cursor: pointer;font-family: "Roboto",Arial,Verdana;font-size: 7px;outline: medium none;position: relative;text-align: center; text-transform: capitalize !important;" tabindex="103">Login</a>
                    </div>
    </div>--%>
    <div class="two-third">
        <div class="status-header">
            <div class="trade-alert one">
                <div class=" one-fourth">
                    <div class="currency-compaire">
                        <span id="spnAssetName"></span><a id="ahtmlPayout" class="button small round white">
                            75%</a></div>
                </div>
                <div class="one-third">
                    <div class="expire">
                        Expires
                        <select id="ddlhtmlExpire" style="text-transform: none; margin-left: 74px; margin-top: -19px;">
                        </select>
                    </div>
                </div>
                <div class="one-fifth">
                    <div class="date-time">
                        <span id="spnhtmlDate"></span>
                    </div>
                </div>
            </div>
        </div>
        <div class="one">
            <div class="one-third">
                <div class="black-box">
                    <p>
                        Will the market be below the target price at expiration?</p>
                    <div class="market-status">
                        <div class="label">
                            Market:</div>
                        <div class="up">
                            <span id="spnMarkeet"></span>
                        </div>
                    </div>
                    <div class="market-status">
                        <div class="label">
                            Payout:</div>
                        <div class="below">
                            <span id="spnPayout"></span>
                        </div>
                    </div>
                    <%-- <div class="market-status" >
                        <div class="label" style="display:none;">
                            Target:</div>
                        <div class="below" style="display:none;">
                            <span id="spnTargetPrice"></span>
                        </div>
                    </div>--%>
                </div>
                <div class="below-banner one">
                    <div class="above-before">
                        <div class="one-half">
                            <a id="abtnHigh" class="clsBidType button color yellow yellow-gredient small round">
                                High</a></div>
                        <div class="one-thrid" style="text-align: right;">
                            <a id="abtnLow" class="clsBidType button yellow yellow-gredient color small round">Low</a></div>
                    </div>
                </div>
                <div class="black-box">
                    <div>
                        <label id="lblBidType" style="color: #FBA72A; font-size: 14px; font-weight: bold;
                            text-align: right;">
                        </label>
                        &nbsp;
                    </div>
                    <div class="textbox">
                        <input id="txtCountPercentage" ondrop="blur();return false;" onpaste="return false"
                            type="text" placeholder="Amount">
                        <span>$</span></div>
                    <div class="buy">
                        <a href="#" id="abtnBuyBet" class="button color small round yellow">Buy</a></div>
                    <div>
                        <div class="return">
                            Return:
                            <br>
                            <span id="spnreturn">$0.00</span> <span id="spnPayoutInPercentage">(75%) In the money</span>
                            <br>
                            $0.00 (0%) Out of the money
                        </div>
                    </div>
                </div>
            </div>
            <div class="two-third">
                <div class="bg-color">
                    <div id="graphcontainer" style="min-width: 310px; height: 400px; margin: 0 auto">
                    </div>
                    <%-- <div class="graph">
                        <img src="../images/grapha.png" alt="" /></div>--%>
                </div>
               <%-- <div class="display-ads">
                    <img src="../images/top-trader-rank-banner.png" alt="" /></div>--%>
            </div>
        </div>
        <div class="clearfix">
        </div>
        <div class="trading-overview">
            <ul class="tabs-nav">
                <li><a id="abtnOpenTrade" href="">Open Trades <span id="lblTradeCount">0</span></a>
                </li>
                <li><a id="abtnTradeHistory" href="#">Trade History</a> </li>
                <li class="active"><a href="#alert">Trading Alerts</a> </li>
            </ul>
            <div class="tabs-container">
                <div class="tab-content" id="dvopenTradeHistory" style="height: 300px; overflow-y: auto;">
                    <div class="datagrid">
                        <table width="100%" border="0" id="tblOpenTradeHistory" style="width: 100%;">
                            <thead style="background: linear-gradient(to bottom, #464646 0%, #2A2A2A 99%) repeat scroll 0 0 rgba(0, 0, 0, 0);">
                                <tr>
                                    <th style="text-align: left;">
                                        Trading Type
                                    </th>
                                    <th style="text-align: left;">
                                        Type
                                    </th>
                                    <th style="text-align: left;">
                                        Asset Name
                                    </th>
                                    <th style="text-align: left;">
                                        Invested Amount
                                    </th>
                                    <th style="text-align: left;">
                                        Target Price
                                    </th>
                                    <th style="text-align: left;">
                                        Market Price
                                    </th>
                                    <th style="text-align: left;">
                                        Close
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="tbodyOpenTradeHistory">
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- end #tab1 -->
                <div class="tab-content" id="dvtradeHistory" style="height: 300px; overflow-y: auto;">
                    <div class="datagrid">
                        <table id="tblTradeHistory" width="100%" border="0">
                            <thead>
                                <tr>
                                    <th style="text-align: left; width: 12%">
                                        Trading Type
                                    </th>
                                    <th style="text-align: left; width: 1%">
                                       Type
                                    </th>
                                    <th style="text-align: left; width: 5%">
                                        Asset
                                    </th>
                                    <th style="text-align: left; width: 5%">
                                     Invested Amount
                                    </th>
                                    <th style="text-align: left; width: 8%">
                                        Target Price
                                    </th>
                                    <th style="text-align: left; width: 12%">
                                        Trade Time
                                    </th>
                                    <th style="text-align: left; width: 8%">
                                        Expiry Price
                                    </th>
                                    <th style="text-align: left; width: 12%">
                                        Expiry Time
                                    </th>
                                    <th style="text-align: left; width: 8%">
                                        Expiry Type
                                    </th>
                                    <th style="text-align: left; width: 11%">
                                        Return Amount
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="tbodyTradeHistory">
                        </table>
                    </div>
                    <%--<table width="100%" border="0" id="tblTradeHistory" class="simple-table" style="width:100%"  >
                            <thead>
                                <tr>
                                    <th style="text-align:left;">
                                       TradingType
                                    </th>
                                    <th style="text-align:left;">
                                        BidType
                                    </th>
                                    <th style="text-align:left;">
                                       Asset
                                    </th>
                                    <th style="text-align:left;">
                                      TradeTime
                                    </th>
                                    <th style="text-align:left;">
                                        InvestedAmount
                                    </th>
                                    <th style="text-align:left;">
                                       Payout
                                    </th>
                                    <th style="text-align:left;">
                                      ExpiryTime
                                    </th>
                                    <th style="text-align:left;">
                                      TargetPrice
                                    </th>
                                    <th style="text-align:left;">
                                        Expiry Price
                                    </th>
                                    <th style="text-align:left;">
                                       ExpiryType
                                    </th>
                                </tr>
                            </thead>
                            <tbody id="tbodyTradeHistory">
                            </tbody>
                        </table>--%>
                </div>
                <!-- end #tab2 -->
                <div class="tab-content" id="alert">
                    <div class="trading-alert">
                        <h4>
                            Open your account Now and get a FREE signals package</h4>
                        <p>
                            Start trading with the power of the market using your FREE signals pack
                        </p>
                        <p>
                            <a href="#" class="button yellow huge round">Register Now</a></p>
                    </div>
                </div>
                <!-- end #tab3 -->
            </div>
        </div>
    </div>
    <div class="one-third market-analsis">
        <ul id="ulMainMenu" class="tabs-nav right-col">
            <%-- <li > <a id=" href="#tab1">Short Term</a> </li>
            <li> <a href="#tab2"> One Touch</a> </li>
            <li> <a href="#tab3"> Boundary</a> </li>
            <li> <a href="#tab2"> High / Low</a> </li>--%>
        </ul>
        <!-- end .tabs-nav -->
        <div class="tabs-container">
            <div class="tab-content" id="tab1">
                <%--<div class="btn-low-high"><a href="#" id="11" class="liSubMenu button black round" >30 sec.</a> <a id="12" href="#" class="liSubMenu button yellow yellow-gredient round ">60 sec.</a> <a id="13" href="#" class="liSubMenu button yellow yellow-gredient round">2 Min.</a>  <a id="14" href="#" class="liSubMenu button yellow yellow-gredient round">5 Min.</a> </div>--%>
                <div id="subMenu" class="btn-low-high">
                </div>
                <div class="clearfix">
                </div>
                <div class="one">
                    <div class="filter">
                        <div class="select-option">
                            <div class="control-group">
                                <div class="control-label" style="margin-top: 3px;">
                                    Filter
                                </div>
                                <select id="ddlTradeAsset" style="width: 140px; padding: 5px;">
                                    <option value="2" selected="selected">All</option>
                                    <option value="1">Indices</option>
                                    <option value="2">Forex</option>
                                    <option value="3">Stocks</option>
                                    <option value="4">Commodities</option>
                                </select>
                            </div>
                        </div>
                        <div class="setting">
                            <a id="abtnSetting" href="#"><i class="icon-cog "></i></a>
                        </div>
                    </div>
                </div>
                <div class="clearfix">
                </div>
                <div class="scrollableContainer">
                    <div class="scrollingArea" id="test1">
                        <table width="100%" border="0" class="market-up-down-table scrollable" cellspacing="0"
                            cellpadding="0">
                            <thead>
                                <tr>
                                    <th class="headerClick">
                                        Asset
                                    </th>
                                    <th class="headerClick">
                                        Target Price
                                    </th>
                                    <th class="headerClick">
                                        Expires
                                    </th>
                                </tr>
                            </thead>
                            <%--<tbody>
                  <tr>
                    <td><div class="curency">NIKKEI 225 FUTURE</div>
                      <div class="curency-percent">110% <br>250%
</div></td>
                    <td valign="top"><div class="white">1.28578</div></td>
                    <td><div class="expire-time">
                        <select>
                          <option>22/09 03:00</option>
                        </select>
                      </div>
                     </td>
                  </tr>
                  <tr>
                    <td><div class="curency">NIKKEI 225 FUTURE</div>
                      <div class="curency-percent">110% <br>250%
</div></td>
                    <td valign="top"><div class="white">1.28578</div></td>
                    <td><div class="expire-time">
                        <select>
                           <option>22/09 03:00</option>
                        </select>
                      </div>
                     </td>
                  </tr>
                  <tr>
                    <td><div class="curency">NIKKEI 225 FUTURE</div>
                      <div class="curency-percent">110% <br>250%
</div></td>
                    <td valign="top"><div class="white">1.28578</div></td>
                    <td><div class="expire-time">
                        <select>
                           <option>22/09 03:00</option>
                        </select>
                      </div>
                     </td>
                  </tr>
                  <tr>
                    <td><div class="curency">NIKKEI 225 FUTURE</div>
                      <div class="curency-percent">110% <br>250%
</div></td>
                    <td valign="top"><div class="white">1.28578</div></td>
                    <td><div class="expire-time">
                        <select >
                           <option>22/09 03:00</option>
                        </select>
                      </div>
                     </td>
                  </tr>
                  <tr>
                    <td><div class="curency">NIKKEI 225 FUTURE</div>
                      <div class="curency-percent">110% <br>250%
</div></td>
                    <td valign="top"><div class="white">1.28578</div></td>
                    <td><div class="expire-time">
                        <select >
                           <option>22/09 03:00</option>
                        </select>
                      </div>
                     </td>
                  </tr>
                  <tr>
                    <td><div class="curency">NIKKEI 225 FUTURE</div>
                      <div class="curency-percent">110% <br>250%
</div></td>
                    <td valign="top"><div class="white">1.28578</div></td>
                    <td><div class="expire-time">
                        <select >
                           <option>22/09 03:00</option>
                        </select>
                      </div>
                     </td>
                  </tr>
                  <tr>
                    <td><div class="curency">NIKKEI 225 FUTURE</div>
                      <div class="curency-percent">110% <br>250%
</div></td>
                    <td valign="top"><div class="white">1.28578</div></td>
                    <td><div class="expire-time">
                        <select>
                           <option>22/09 03:00</option>
                        </select>
                      </div>
                     </td>
                  </tr>
                  <tr>
                    <td><div class="curency">NIKKEI 225 FUTURE</div>
                      <div class="curency-percent">110% <br>250%
</div></td>
                    <td valign="top"><div class="white">1.28578</div></td>
                    <td><div class="expire-time">
                        <select>
                           <option>22/09 03:00</option>
                        </select>
                      </div>
                     </td>
                  </tr>
                  <tr>
                    <td><div class="curency">NIKKEI 225 FUTURE</div>
                      <div class="curency-percent">110% <br>250%
</div></td>
                    <td valign="top"><div class="white">1.28578</div></td>
                    <td><div class="expire-time">
                        <select>
                           <option>22/09 03:00</option>
                        </select>
                      </div>
                     </td>
                  </tr>
                  <tr>
                    <td><div class="curency">NIKKEI 225 FUTURE</div>
                      <div class="curency-percent">110% <br>250%
</div></td>
                    <td valign="top"><div class="white">1.28578</div></td>
                    <td><div class="expire-time">
                        <select>
                           <option>22/09 03:00</option>
                        </select>
                      </div>
                     </td>
                  </tr>
                  <tr>
                    <td><div class="curency">NIKKEI 225 FUTURE</div>
                      <div class="curency-percent">110% <br>250%
</div></td>
                    <td valign="top"><div class="white">1.28578</div></td>
                    <td><div class="expire-time">
                        <select>
                           <option>22/09 03:00</option>
                        </select>
                      </div>
                     </td>
                  </tr>
                   <tr>
                    <td><div class="curency">NIKKEI 225 FUTURE</div>
                      <div class="curency-percent">110% <br>250%
</div></td>
                    <td valign="top"><div class="white">1.28578</div></td>
                    <td><div class="expire-time">
                        <select>
                           <option>22/09 03:00</option>
                        </select>
                      </div>
                     </td>
                  </tr>
                   <tr>
                    <td><div class="curency">NIKKEI 225 FUTURE</div>
                      <div class="curency-percent">110% <br>250%
</div></td>
                    <td valign="top"><div class="white">1.28578</div></td>
                    <td><div class="expire-time">
                        <select>
                           <option>22/09 03:00</option>
                        </select>
                      </div>
                     </td>
                  </tr>
                   <tr>
                    <td><div class="curency">NIKKEI 225 FUTURE</div>
                      <div class="curency-percent">110% <br>250%
</div></td>
                    <td valign="top"><div class="white">1.28578</div></td>
                    <td><div class="expire-time">
                        <select>
                           <option>22/09 03:00</option>
                        </select>
                      </div>
                     </td>
                  </tr>
                </tbody>--%>
                            <tbody id="tbodymarket-up-down-table">
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- end #tab1 -->
            <div class="tab-content" id="tab2">
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores et ea rebum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores et ea rebum.
                </p>
            </div>
            <!-- end #tab2 -->
            <div class="tab-content" id="tab3">
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores et ea rebum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores et ea rebum.
                </p>
            </div>
            <!-- end #tab3 -->
            <div class="tab-content" id="tab4">
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores et ea rebum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                    eos et accusam et justo duo dolores et ea rebum.
                </p>
            </div>
            <!-- end #tab3 -->
        </div>
    </div>
</asp:Content>
