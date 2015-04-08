using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BinaryOptionBO;
using BinaryOptionBO.Admin;
using BinaryOptionBL.Admin;
using BinaryOptionBL.Common;


namespace BinaryOption.WebServices
{
    /// <summary>
    /// Summary description for Login
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]

    [System.Web.Script.Services.ScriptService]

    public class Login : System.Web.Services.WebService
    {
        [WebMethod(EnableSession = true)]
        public LoginBO AuthenticateUser(string UserName, string Password, bool rememberMe)
        {
            HttpContext context = HttpContext.Current;
            if (rememberMe)
            {

                HttpCookie username = new HttpCookie("username", UserName);
                HttpCookie password = new HttpCookie("password", Password);
                context.Response.Cookies.Add(username);
                context.Response.Cookies.Add(password);
            }
            else
            {
                context.Response.Cookies["username"].Expires = DateTime.Now.AddDays(-1);
                context.Response.Cookies["password"].Expires = DateTime.Now.AddDays(-1);
            }
            LoginBO objLoginBO = new LoginBO();
            objLoginBO.UserName = UserName;
            objLoginBO.Password = new MD5Secure().Encrypt(Password);
            //  objLoginBO.Password = Password;
            LoginBL objLoginBL = new LoginBL();
            objLoginBO = objLoginBL.AuthenticateUser(UserName, objLoginBO.Password);
            if (objLoginBO != null)
            {
                HttpContext.Current.Session["RoleId"] = objLoginBO.RoleId;
                HttpContext.Current.Session["UserId"] = objLoginBO.Id;
                HttpContext.Current.Session["Email"] = objLoginBO.Email;
                HttpContext.Current.Session["UserName"] = objLoginBO.UserName;
            }
            return objLoginBO;

        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 3-Dec-2014
        /// Purpose : To check session
        /// </summary>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        public LoginBO IsSession()
        {
            LoginBO objLoginBO = new LoginBO();
            if (!string.IsNullOrEmpty(Convert.ToString(HttpContext.Current.Session["UserId"])) && !string.IsNullOrEmpty(Convert.ToString(HttpContext.Current.Session["UserName"])))
            {
                //objLoginBO.Id = Convert.ToInt32(HttpContext.Current.Session["UserId"]);
                objLoginBO.Id = (Guid) HttpContext.Current.Session["UserId"];
                objLoginBO.UserName = Convert.ToString(HttpContext.Current.Session["UserName"]);
                objLoginBO.IsSessionExist = true;
            }
            else
            {
                objLoginBO.IsSessionExist = false;
            }
            return objLoginBO;
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 3-Dec-2014
        /// Purpose : To destroy session
        /// </summary>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        public string SessionEnd()
        {
            HttpContext.Current.Session.Abandon();
            return "true";
        }

    }
}
