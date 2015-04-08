<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/AdminNew.Master" AutoEventWireup="true"
    CodeBehind="ChangePassword.aspx.cs" Inherits="BinaryOption.Admin.ChangePassword" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <title>Binary Options :: Change Password</title>
    <script src='<%= ResolveClientUrl("~/Scripts/Admin/ChangePassword.js")%>' type="text/javascript"></script>
    <script type="text/javascript">
        var Id_Session = '<%= Session["UserId"] %>' 
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentMain" runat="server">
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
                    Change Password</h1>
            </div>
            <!-- fields-->
            <div class="per_sec">
                <div class="field_sec">
                    <div class="sec1">
                        <label>
                            <span>* </span>Old Password:</label>
                        <input id="txtOldPassword" type="password" value="" class="validate[required]" tabindex="1" />
                    </div>
                    <div class="sec1">
                        <label>
                            <span>* </span>New Password:</label>
                        <input id="txtNewPassword" type="password" value="" class="validate[required,minSize[6],maxSize[12]]"
                            tabindex="2" />
                    </div>
                    <div class="clr">
                    </div>
                    <div class="sec1">
                        <label>
                            <span>* </span>Re-enter Password:</label>
                        <input id="txtConfirmPassword" type="password" value="" class="validate[required,equals[txtNewPassword],minSize[6],maxSize[12]]"
                            tabindex="3" />
                    </div>
                    <div class="submit_btn">
                        <a style="cursor: pointer" id="btnSave" tabindex="4">Change Password</a>
                    </div>
                </div>
            </div>
            <!-- fields-->
        </div>
    </div>
    <asp:HiddenField runat="server" ID="hdnSitePath" ClientIDMode="Static"></asp:HiddenField>
    <%-- <div class="row"> 
        <div class="per_sec">
            <h1> Change Password </h1>

            <div class="field_sec">
                <div class="sec1">
                    <label>
                        <span>* </span>Old Password:</label>
                    <input id="txtOldPassword" type="password" value="" class="validate[required]"/>
                </div>
            </div>

            <div class="field_sec">
                <div class="sec1">
                    <label>
                        <span>* </span>New Password:</label>                       
                    <input id="txtNewPassword" type="password" value="" class="validate[required,minSize[6],maxSize[12]]" />
                </div>
            </div>

            <div class="field_sec" >
                <div class="sec1">
                    <label >
                        <span>* </span>Confirm Password:</label>
                    <input id="txtConfirmPassword" type="password" value="" class="validate[required,equals[txtNewPassword],minSize[6],maxSize[12]]" />
                </div>
            </div>

            <div class="field_sec">
            </div>

            <div class="open_ac_btn">
                <a style="cursor:pointer" id="btnSave">Change Password</a>               
            </div>

        </div>
    </div>--%>
</asp:Content>
