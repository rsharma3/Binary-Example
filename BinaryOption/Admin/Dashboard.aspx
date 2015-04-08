<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/AdminNew.Master" AutoEventWireup="true"
    CodeBehind="Dashboard.aspx.cs" Inherits="BinaryOption.Admin.Dashboard" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Binary Options :: Dashboard</title>
    <script type="text/javascript">
        $(document).ready(function () {
            SessionCheck.IsSession();
        });
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentMain" runat="server">
    <asp:HiddenField runat="server" ID="hdnSitePath" ClientIDMode="Static"></asp:HiddenField>
    <!--1-->
    <div class="stat1">
        <h1>
            FOREX</h1>
        <div class="img-sec">
            <img src="<%=_sitePath %>images/forex.jpg" />
        </div>
        <div class="val_sec">
            <div class="val1">
                <div class="box1">
                </div>
                <a href="ForexManagement.aspx" class="link">Manage Forex </a>
            </div>
            <%--<div class="val1">
                <div class="box1">
                </div>
                <a class="link">Add Forex </a>
            </div>--%>
        </div>
    </div>
    <!--1-->
    <!--2-->
    <div class="stat1">
        <h1>
            INDICES</h1>
        <div class="img-sec">
            <img src="<%=_sitePath %>images/indices.jpg" />
        </div>
        <div class="val_sec">
            <div class="val1">
                <div class="box1">
                </div>
                <a class="link">Manage Indices </a>
            </div>
            <%--<div class="val1">
                <div class="box1">
                </div>
                <a class="link">Add Indices </a>
            </div>--%>
        </div>
    </div>
    <!--2-->
    <!--3-->
    <div class="stat1">
        <h1>
            STOCKS</h1>
        <div class="img-sec">
            <img src="<%=_sitePath %>images/stock.jpg" />
        </div>
        <div class="val_sec">
            <div class="val1">
                <div class="box1">
                </div>
                <a class="link">Manage Stocks </a>
            </div>
            <%-- <div class="val1">
                <div class="box1">
                </div>
                <a class="link">Add Stocks </a>
            </div>--%>
        </div>
    </div>
    <!--3-->
    <div class="clr">
    </div>
    <div class="clr">
    </div>
</asp:Content>
