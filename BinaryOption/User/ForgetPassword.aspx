<%@ Page Title="" Language="C#" MasterPageFile="~/User/Use.Master" AutoEventWireup="true"
    CodeBehind="ForgetPassword.aspx.cs" Inherits="BinaryOption.User.ForgetPassword" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Binary Options :: Forgot Password</title>
    <%-- <link href="../Styles/validationEngine.jquery.css" rel="stylesheet" type="text/css" />
    <script src="../Scripts/Plugins/jquery-1.11.1.min.js" type="text/javascript"></script>--%>
    <script src='<%= ResolveClientUrl("~/Scripts/User/ForgetPassword.js")%>' type="text/javascript"></script>
    <%-- <script src="../Scripts/Plugins/jquery.validationEngine.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery.validationEngine-en.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery.toastmessage.tests.js" type="text/javascript"></script>
    <link href="../Styles/jquery.toastmessage.css" rel="stylesheet" type="text/css" />--%>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="divoverlay" style="height: 100%; width: 100%; position: fixed; top: 0; left: 0;
        background: #B8B8B8; opacity: 0.5; z-index: 1; display: none;">
        <img alt="" src="<%=_sitePath %>Images/ajax-loader.gif" style="position: relative;
            top: 40%; left: 40%;" />
    </div>
    <asp:HiddenField runat="server" ID="hdnSitePath" ClientIDMode="Static"></asp:HiddenField>
    <div id="content">
        <div id="breadcrumb">
            <!-- breadcrumb starts-->
            <div class="container">
                <div class="two-third">
                    <h4>
                        Open Account</h4>
                </div>
                <div class="one-third">
                    <nav id="breadcrumbs">
				<!--breadcrumb nav starts-->
				<ul>
					<li>You are here:</li>
					<li><a href="index.html">Home</a></li>
					<li>Registration</li>
				</ul>
				</nav>
                    <!--breadcrumb nav ends -->
                </div>
            </div>
        </div>
        <!--breadcrumbs ends -->
        <div class="container">
            <div class="open-account">
                <div class="account-header one">
                    <div class="padding-btm">
                        <div class="one-half">
                            <h4>
                                Forgot Password</h4>
                        </div>
                        <div class="one-thrid pull-right">
                            <span class="mandatory">*</span> Mandatory Fields</div>
                    </div>
                </div>
                <div class="account-conatent one">
                    <div class="one-half vertical-line">
                        <div class="personal-info">
                            <div class="one-half">
                                <label>
                                    User Email: <span class="mandatory">*</span>
                                </label>
                                <input class="validate[required,custom[email]] text-input" id="txtEmail" type="text"
                                    value="" tabindex="1" />
                            </div>
                            <div class="one-half">
                                <label>
                                </label>
                                <div class="action-btn">
                                    <a href="#" id="btnForgotPassword" class="button yellow big" tabindex="2">Forgot Password</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <%--    <div class="clearfix">
                    </div>--%>
                    <%-- <div class="action-btn">
                        <a href="#" id="btnForgotPassword" class="button yellow big">Forget Password</a>
                    </div>--%>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
