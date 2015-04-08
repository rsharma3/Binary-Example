using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BinaryOptionBL.User;
using BinaryOptionBO.User;

namespace BinaryOption.WebServices
{
    /// <summary>
    /// Summary description for UserLogin
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class UserLogin : System.Web.Services.WebService
    {

        [WebMethod(EnableSession = true)]
        public string Login(string userName, string password)
        {
            try
            {
                UserLoginBO objSessionUserLoginBO = new UserLoginBO();
                UserLoginBL objUserLoginBL = new UserLoginBL();

                UserLoginBO objUserLoginBO = new UserLoginBO();
                objUserLoginBO.UserName = userName;
                objUserLoginBO.Password = password;
                objSessionUserLoginBO = objUserLoginBL.Login(objUserLoginBO);
                HttpContext.Current.Session["UserDetails"] = objSessionUserLoginBO;
                return objSessionUserLoginBO.RoleId;
                //if (objSessionUserLoginBO != null)
                //{
                //    HttpContext.Current.Session["UserDetails"] = objSessionUserLoginBO;
                //    return "1";
                //}
                //else
                //{
                //    return "0";
                //}


            }
            catch (Exception ex)
            {
                HttpContext.Current.Session["Exception"] = ex;
                HttpContext.Current.Session["ExcSource"] = System.Web.HttpContext.Current.Request.Url.AbsolutePath;
                throw ex;
            }
            finally
            {
            }

        }


        [WebMethod(EnableSession = true)]
        public UserLoginBO CheckUserSession()
        {
            try
            {
                UserLoginBO listUserLoginBO = new UserLoginBO();
                return listUserLoginBO = HttpContext.Current.Session["UserDetails"] as UserLoginBO;


            }
            catch (Exception ex)
            {
                HttpContext.Current.Session["Exception"] = ex;
                HttpContext.Current.Session["ExcSource"] = System.Web.HttpContext.Current.Request.Url.AbsolutePath;
                throw ex;
            }
            finally
            {
            }

        }
        [WebMethod(EnableSession = true)]
        public UserLoginBO CheckUserActiveOrNotSession()
        {
            try
            {
                UserLoginBO listUserLoginBO = new UserLoginBO();
                UserLoginBL objUserLoginBL = new UserLoginBL();
                listUserLoginBO = HttpContext.Current.Session["UserDetails"] as UserLoginBO;
                listUserLoginBO = objUserLoginBL.UserActiveOrNot(listUserLoginBO);
                return listUserLoginBO;
            }
            catch (Exception ex)
            {
                HttpContext.Current.Session["Exception"] = ex;
                HttpContext.Current.Session["ExcSource"] = System.Web.HttpContext.Current.Request.Url.AbsolutePath;
                throw ex;
            }
            finally
            {
            }

        }


        [WebMethod(EnableSession = true)]
        public string Logout()
        {
            try
            {
                List<UserLoginBO> listUserLoginBO = new List<UserLoginBO>();
                listUserLoginBO = null;
                HttpContext.Current.Session["UserDetails"] = listUserLoginBO;
                return "1";

            }
            catch (Exception ex)
            {
                HttpContext.Current.Session["Exception"] = ex;
                HttpContext.Current.Session["ExcSource"] = System.Web.HttpContext.Current.Request.Url.AbsolutePath;
                throw ex;
            }
            finally
            {
            }

        }

    }
}
