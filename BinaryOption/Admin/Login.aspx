<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="BinaryOption.Admin.Login" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
   
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700' rel='stylesheet'
        type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
    <link type="text/css" rel="stylesheet" href="../Styles/easy-responsive-tabs.css" />
    <script src="../Scripts/Plugins/jquery-1.11.1.min.js" type="text/javascript"></script>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link href="../Styles/style.css" rel="stylesheet" type="text/css" />
    <script src="../Scripts/Admin/Login.js" type="text/javascript"></script>
     <script src="../Scripts/Plugins/jquery.validationEngine.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery.validationEngine-en.js" type="text/javascript"></script>
    <link href="../Styles/validationEngine.jquery.css" rel="stylesheet" type="text/css" />
    <link href="../Styles/msgBoxLight.css" rel="stylesheet" type="text/css" />
    <script src="../Scripts/Plugins/jquery.msgBox.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/jquery.toastmessage.tests.js" type="text/javascript"></script>
    <script src="../Scripts/Plugins/Notification.js" type="text/javascript"></script>
    <title>Binary Option :: Admin Login</title>
</head>
<body>
<form runat="server">
    <!-- header-->
    <div class="bg_sec">
        <div class="container">
            <div class="row">
                <!-- logo section-->
                <div class="logo-sec">
                    <a href="">
                        <img src="../Images/logo.png" />
                        <img src="<img src="../Images/logo.png" />" />
                    </a>
                </div>
                <!-- right sec-->
                <!-- right sec-->
                <!-- logo section-->
                <!-- header-->
                <!-- form section -->
                <div class="main-sec">
                    <div class="info_sec">
                        <%-- <div class="ac_open">
                            <h1>
                                Open Account with Company</h1>
                        </div>--%>
                        <%-- <div class="ac_nav">
                            <ul>                               
                            </ul>
                        </div>--%>
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
                                   <a style="cursor:pointer" id="btnLogin">Login</a>
                              <%--  <input id="btnLogin" type="submit" value="Log in" />--%>
                            </div>
                          
                        </div>
                        <!-- right section-->
                    </div>
                </div>
                <!-- form section-->
            </div>
        </div>
    </div>
    <!-- footer sec-->
    <asp:HiddenField runat="server" ID="hdnSitePath" ClientIDMode="Static"></asp:HiddenField>
    <div class="footer_sec">
        <div class="container">
            <div style="vertical-align: middle;">
                <ul>
                    <li>All Rights Reserved &copy; for Binary Option 2014</li>
                </ul>
            </div>
        </div>
    </div>
    <!-- footer sec-->
    </form>
</body>
</html>
