<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/AdminNew.Master" AutoEventWireup="true"
    CodeBehind="ForgotPassword.aspx.cs" Inherits="BinaryOption.Admin.ForgotPassword1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Binary Options :: Forgot Password</title>
    <script src='<%= ResolveClientUrl("~/Scripts/Admin/forgotPassword.js")%>' type="text/javascript"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentMain" runat="server">
    <asp:HiddenField runat="server" ID="HiddenField1" ClientIDMode="Static"></asp:HiddenField>
    <div id="divoverlay" style="height: 100%; width: 100%; position: fixed; top: 0; left: 0;
        background: #B8B8B8; opacity: 0.5; z-index: 1; display: none;">
        <img alt="" src="<%=_sitePath %>Images/loading.gif" style="position: relative; top: 50%;
            left: 50%;" />
    </div>
    <div class="pass_sec">
        <div class="bg">
            <div class="pass-bg">
                <img src="<%=_sitePath %>images/pass.png" />
                <h1>
                    Forgot Password</h1>
            </div>
            <!-- fields-->
            <div class="per_sec">
                <div class="field_sec">
                    <div class="sec1">
                        <label>
                            <span>* </span>User Email:</label>
                        <input class="validate[required,custom[email]] text-input" id="txtEmail" type="text"
                            value="" tabindex="1" />
                    </div>
                    <div class="sec1">
                    </div>
                    <div class="clr">
                    </div>
                    <%--<div class="sec1">
                        <div class="cap_sec">
                            <input id="chkRememberMe" type="checkbox" />
                            <label>
                                <span>* </span>Remember Me</label>
                            <div class="term">
                                <a href="ForgetPassword.aspx" id="linkForgetPassword">Forget Password</a></div>
                        </div>
                    </div>--%>
                    <div class="submit_btn">
                        <a style="cursor: pointer;" id="btnForgotPassword" tabindex="2">Forget Password</a>
                    </div>
                    <div class="submit_btn">
                        <a href="UserLogin.aspx" style="cursor: pointer;" id="" tabindex="3">Back</a>
                    </div>
                </div>
            </div>
            <!-- fields-->
        </div>
    </div>
    <asp:HiddenField runat="server" ID="hdnSitePath" ClientIDMode="Static"></asp:HiddenField>
</asp:Content>
