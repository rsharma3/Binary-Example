<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="Menu.ascx.cs" Inherits="BinaryOption.UserControl.Menu" %>
<script src="'<%= ResolveClientUrl("~/Scripts/Admin/ForexTrade.js")%>'" type="text/javascript"></script>
<style type="text/css">
    .TradeType ul
    {
        background: none repeat scroll 0 0 #4B4B4B;
        border-radius: 4px;
        display: inline-block;
        margin: 10px 0;
        padding: 0;
        width: auto;
    }
    .TradeType ul li
    {
        display: inline-block;
    }
    .TradeType ul li
    {
        font-family: "Helvetica Neue" , "Lucida Grande" , "Segoe UI" ,Arial,Helvetica,Verdana,sans-serif;
        border-radius: 4px 0 0 4px;
        color: #ffffff;
        display: inline-block;
        font-size: 16px;
        font-weight: 400;
        line-height: 35px;
        padding: 0 10px;
        text-align: center;
        text-decoration: none;
    }
    .TradeType ul li:hover
    {
        background: #024E81;
        color: #ffffff;
    }
    .TradeType ul li a.active
    {
        background: #fff;
        color: #333;
    }
    
    .TradeTypeActive
    {
        font-family: 'oswaldbold';
        background: #024E81;
        color: #ffffff;
    }
</style>
<div>
    <%-- <ul class="resp-tabs-list" style="cursor: pointer" id="menuTab">
    </ul>
    <ul id="submenu">
    </ul>--%>
    <div class="TradeType">
        <ul class="resp-tabs-list" style="cursor: pointer" id="menuTab">
        </ul>
    </div>
    <div id="DvSubMenu" class="TradeType">
        <ul class="resp-tabs-list" style="cursor: pointer" id="subMenuTab">
        </ul>
    </div>
</div>
