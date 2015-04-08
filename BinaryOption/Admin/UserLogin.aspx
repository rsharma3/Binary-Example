<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/AdminNew.Master" AutoEventWireup="true"
    CodeBehind="UserLogin.aspx.cs" Inherits="BinaryOption.Admin.UserLogin" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Binary Options :: Admin Login</title>
    <script src='<%= ResolveClientUrl("~/Scripts/Plugins/jqueryLogin.cookie.js")%>' type="text/javascript"></script>
    <script src='<%= ResolveClientUrl("~/Scripts/Admin/Login.js")%>' type="text/javascript"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentMain" runat="server">
    <form id="formLogin">
    <asp:HiddenField runat="server" ID="hdnSitePath" ClientIDMode="Static"></asp:HiddenField>
    <div class="pass_sec">
        <div class="bg">
            <div class="pass-bg">
                <img src="<%=_sitePath %>images/pass.png" />
                <h1>
                    Login</h1>
            </div>
            <!-- fields-->
            <div class="per_sec">
                <div class="field_sec">
                    <div class="sec1">
                        <label>
                            <span>* </span>User Name:</label>
                        <input id="txtUserName" class="validate[required] text-input" type="text" tabindex="1" />
                    </div>
                    <div class="sec1">
                        <label>
                            <span>* </span>Password:</label>
                        <input id="txtPassword" class="validate[required,maxSize[20]]" type="password" tabindex="3" />
                    </div>
                    <div class="clr">
                    </div>
                    <div class="sec1">
                        <div class="cap_sec">
                            <input id="chkRememberMe" type="checkbox" tabindex="3" />
                            <label id="lblRemberme">
                                Remember Me</label>
                            <div class="term">
                                <a href="ForgotPassword.aspx" id="linkForgetPassword" tabindex="4">Forgot Password</a></div>
                        </div>
                    </div>
                    <div class="submit_btn">
                        <a style="cursor: pointer" id="btnLogin" tabindex="5">Login</a>
                    </div>
                </div>
            </div>
            <!-- fields-->
        </div>
    </div>
    <%--<div class="main-sec">
        <div class="info_sec">
            <!-- right section-->
            <div class="per_sec">
                <h1>
                    Admin Login</h1>
                <div class="field_sec">
                    <div class="sec1">
                        <label>
                            <span>* </span>User Name:</label>
                        <input id="txtUserName" class="validate[required] text-input" type="text" />
                    </div>
                </div>
                <div class="field_sec">
                    <div class="sec1">
                        <label>
                            <span>* </span>Password:</label>
                        <input id="txtPassword" class="validate[required,maxSize[20]]" type="password" />
                    </div>
                </div>
                <div class="field_sec">
                </div>
                <div class="field_sec">
                    <div class="cap_sec">
                        <input id="chkRememberMe" type="checkbox" />
                        <div class="term">
                            Remember Me
                        </div>
                        <div class="term">
                            <a href="ForgetPassword.aspx" id="linkForgetPassword">Forget Password</a></div>
                    </div>
                </div>
                <div class="open_ac_btn">
                    <a style="cursor: pointer" id="btnLogin">Login</a>
                </div>
            </div>
            <!-- right section-->
        </div>
    </div>--%>
    </form>
</asp:Content>
