<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ForgetPassword.aspx.cs"
    Inherits="BinaryOption.Admin.ForgotPassword" %>


<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <%--    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet'
        type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>--%>
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
    <link href="../Styles/validationEngine.jquery.css" rel="stylesheet" type="text/css" />
    <link type="text/css" rel="stylesheet" href="../Styles/easy-responsive-tabs.css" />
    <link href="../Styles/msgBoxLight.css" rel="stylesheet" type="text/css" />
    <script src="../Scripts/Plugins/jquery-1.6.3.min.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery-2.0.3.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery.msgBox.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery.toastmessage.tests.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/Notification.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery.validationEngine.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery.validationEngine-en.js" type="text/javascript"></script>
    <script src="../Scripts/Admin/forgotPassword.js" type="text/javascript"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link href="../Styles/style.css" rel="stylesheet" type="text/css" />
    <title>Binary Option :: Forget Password</title>
</head>
<body>
    <form id="forgetPassword" runat="server">
    <!-- header-->
    <div class="bg_sec">
        <div class="container">
            <div class="row">
                <!-- logo section-->
                <div class="logo-sec">
                    <a href="">
                        <img src="../Images/logo.png" />
                    </a>
                </div>
                <div id="divoverlay" style="height: 100%; width: 100%; position: fixed; top: 0; left: 0;
                    background: #B8B8B8; opacity: 0.5; z-index: 1; display: none;">
                    <img alt="" src="../Images/JsLoader.gif" style="position: relative; top: 50%; left: 50%;" />
                </div>
                <!-- form section -->
                <div class="main-sec">
                    <div class="info_sec">
                        <div class="per_sec">
                            <h1>
                                Forget Password</h1>
                            <div class="field_sec">
                                <div class="sec1">
                                    <label>
                                        <span>* </span>User Email:</label>
                                    <input class="validate[required,custom[email]] text-input" id="txtEmail" type="text"
                                        value="" />
                                </div>
                            </div>
                            <div class="field_sec">
                            </div>
                            <div class="open_ac_btn">
                                <a style="cursor: pointer;" id="btnForgotPassword">Forget Password</a>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- form section-->
            </div>
        </div>
    </div>
    <asp:HiddenField runat="server" ID="hdnSitePath" ClientIDMode="Static"></asp:HiddenField>
    <%--<div class="blck_bar" style="padding: 125px 0; background: none repeat scroll 0 0 #1c1b1b;">
        <div class="container">
            <div class="row">
                <div class="l_sec">
                </div>
            </div>
        </div>
    </div>--%>
   
   
    </form>
</body>
</html>
