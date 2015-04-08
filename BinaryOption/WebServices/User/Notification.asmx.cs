using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BinaryOptionBO.User;
using BinaryOptionBL.User;

namespace BinaryOption.WebServices.User
{
    /// <summary>
    /// Summary description for Notification
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class Notification : System.Web.Services.WebService
    {
        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 17-Dec-2014
        /// Purpose : To get trade notifications  
        /// </summary>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        public List<NotificationBO> GetTradeNotifications()
        {
            List<NotificationBO> lstNotificationBO = new List<NotificationBO>();
            UserLoginBO objUserLoginBO = new UserLoginBO();
            TradeBO objBO = new TradeBO();
            objUserLoginBO = HttpContext.Current.Session["UserDetails"] as UserLoginBO;
            if (objUserLoginBO == null)
            {
                objBO.UserId = new Guid();
                lstNotificationBO = null;
                return lstNotificationBO;
            }
            else
            {
                objBO.UserId = (Guid)objUserLoginBO.UserId;
                try
                {
                    // Guid userId = new Guid(Convert.ToString(HttpContext.Current.Session["UserId"]));
                    lstNotificationBO = new NotificationBL().GetTradeNotifications(objBO.UserId);
                }
                catch (Exception ex)
                {
                    throw ex;
                }
                finally
                {
                }

                return lstNotificationBO;
            }

           
        }
    }
}
