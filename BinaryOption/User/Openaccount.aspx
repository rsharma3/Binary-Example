<%@ Page Title="" Language="C#" MasterPageFile="~/User/Use.Master" AutoEventWireup="true"
    CodeBehind="OpenAccount.aspx.cs" Inherits="BinaryOption.User.OpenAccount" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Binary Options :: Open Account</title>
    <%--  <link rel="stylesheet" href="../css/tradestyle.css" media="screen" />
    <link href="../Styles/validationEngine.jquery.css" rel="stylesheet" type="text/css" />
    <script src="../Scripts/Plugins/jquery-1.11.1.min.js" type="text/javascript"></script>
    <script src="../Scripts/User/Registration.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery.validationEngine.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery.validationEngine-en.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery.toastmessage.tests.js" type="text/javascript"></script>
    <link href="../Styles/jquery.toastmessage.css" rel="stylesheet" type="text/css" />--%>
    <script src="../Scripts/User/Registration.js" type="text/javascript"></script>
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
					<li><a href="#">Home</a></li>
					<li>Open Account</li>
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
                                Create Account</h4>
                        </div>
                        <div class="one-thrid pull-right">
                            <span class="mandatory">*</span> Mandatory Fields</div>
                           <%-- <a class="Refresh" id="dddlogin">
                                    <img src="../images/refresh.png" style="width: 16px;"
                                       </a>--%>
                    </div>
                </div>
                <div class="account-conatent one">
                    <div class="one-half vertical-line">
                        <div class="personal-info">
                            <h2>
                                Personal Information</h2>
                            <div class="one-half">
                                <label>
                                    First Name <span class="mandatory">*</span>
                                </label>
                                <input class="validate[required]" id="txtRegFirstName" maxlength="20" type="text"
                                    tabindex="1">
                            </div>
                            <div class="one-half">
                                <label>
                                    Last Name <span class="mandatory">*</span>
                                </label>
                                <input class="validate[required]" id="txtRegLastName" maxlength="20" type="text"
                                    tabindex="2">
                            </div>
                            <div class="one-half">
                                <label>
                                    Title
                                    <%-- <span class="mandatory">*</span>--%>
                                </label>
                                <select id="ddlRegTitle" class="select-option" tabindex="3">
                                    <option value="Mr">Mr</option>
                                    <option value="Miss">Miss</option>
                                    <option value="Mrs">Mrs</option>
                                </select>
                            </div>
                            <div class="one-half">
                                <label>
                                    Email <span class="mandatory">*</span>
                                </label>
                                <input class="validate[required,custom[email]]" id="txtRegEmail" type="email" tabindex="4">
                            </div>
                            <div class="one-half">
                                <label>
                                    Country <span class="mandatory">*</span>
                                </label>
                                <select tabindex="5" class="validate[required]" id="ddlRegCountry">
                                    <option value="">Select</option>
                                    <option value="1">14</option>
                                </select>
                            </div>
                            <div class="one-half">
                                <label>
                                    Phone Number <span class="mandatory">*</span>
                                </label>
                                <input class="validate[required]" id="txtRegPhoneNO" ondrop="blur();return false;"
                                    onpaste="return false" type="text" maxlength="16" tabindex="6">
                            </div>
                            <div class="one-half">
                                <label>
                                    Date of Birth <span class="mandatory">*</span>
                                </label>
                                <select class="validate[required]" id="ddlRegYear" style="width: 80px; float: left;
                                    margin-right: 1px;" tabindex="7">
                                    <option value="">Select</option>
                                </select>
                                <select class="validate[required]" id="ddlRegMonth" style="width: 80px; float: left;
                                    margin-right: 1px;" tabindex="8">
                                    <option value="">Month</option>
                                </select>
                                <select class="validate[required]" id="ddlRegDay" style="width: 80px; float: left;
                                    margin-right: 1px;" tabindex="9">
                                    <option value="">Day</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="one-half ">
                        <div class="account-info">
                            <h2>
                                Account Information</h2>
                            <div class="one-half">
                                <label>
                                    User Name <span class="mandatory">*</span>
                                </label>
                                <input class="validate[required]" id="txtRegUserName" maxlength="20" type="text"
                                    tabindex="10">
                            </div>
                            <div class="one-half">
                                <label>
                                    Password <span class="mandatory">*</span>
                                </label>
                                <input class="validate[required,minSize[6],maxSize[12]]" id="txtRegPassword" type="password"
                                    tabindex="11">
                            </div>
                            <div class="one-half">
                                <label>
                                    Re-enter Password <span class="mandatory">*</span>
                                </label>
                                <input class="validate[required,equals[txtRegPassword],minSize[6],maxSize[12]]" id="txtRegRePassword"
                                    tabindex="12" type="password">
                            </div>
                            <div class="one-half">
                                <label style="visibility: hidden;">
                                    Account Base Currency <span class="mandatory">*</span>
                                </label>
                                <div style="margin: 43px;">
                                </div>
                            </div>
                            <div class="one-half">
                                <label>
                                    Enter Security Code <span class="mandatory">*</span>
                                </label>
                                <input class="validate[required]" id="txtRegSecurityCode" type="text" tabindex="13">
                            </div>
                            <div class="one-half">
                                <label>
                                    Captcha <span class="mandatory">*</span>
                                </label>
                                <input id="txtCaptha" type="text" style="background-color: rgb(128, 128, 128); color: seashell;
                                    width: 75%;" disabled="disabled">
                                <a class="Refresh" id="aRefreshCaptha">
                                    <img src="../images/refresh.png" style="width: 10%; margin-top: -10%; float: right;
                                        margin-right: 5%;" /></a>
                            </div>
                            <div style="width: 15px; margin: 5px 0 0 0; padding-right: 5px;" class="pull-left spece">
                                <input id="chkRegLegal" style="margin: 0;" type="checkbox" tabindex="14"></div>
                            <div class="pull-left widthfix">
                                I am over 18 years of age and i accept these <a href="javascript:void(0);">Legal Terms
                                    & Conditions</a></div>
                            <div class="clearfix">
                            </div>
                            <div style="width: 15px; margin: 5px 0 0 0; padding-right: 5px;" class="pull-left spece">
                                <input id="chkRegeBook" style="margin: 0;" type="checkbox" tabindex="15"></div>
                            <div class="pull-left widthfix">
                                I would like to receive a free eBook and important information regarding my account
                            </div>
                        </div>
                    </div>
                    <div class="clearfix">
                    </div>
                    <div class="action-btn">
                        <a href="javascript:void(0);" id="btnCreateAccount" class="button yellow big" tabindex="16">
                            Create Account</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>
