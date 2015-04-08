using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BinaryOptionBL.Admin;
using BinaryOptionBO.Admin;

namespace BinaryOption.WebServices
{
    /// <summary>
    /// Summary description for UserManagement
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class UserManagement : System.Web.Services.WebService
    {
        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 11-Dec-2014
        /// Purpose : To Active/InActive User
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        public string ActiveInactiveUser(string userId)
        {
            string strResult = string.Empty;
            try
            {
                // 1 for success
                strResult = new UserManagementBL().ActiveInactiveUser(Convert.ToInt64(userId));
                if (strResult == "1")
                {
                    strResult = "Update";
                }
                else
                {
                    strResult = "NoUpdate";
                }
            }
            catch (Exception ex)
            {
                strResult = "5"; // Exception
            }
            return strResult;
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 11-Dec-2014
        /// Purpose : To get user details
        /// </summary>
        /// <param name="pageNumber"></param>
        /// <param name="pageSize"></param>
        /// <param name="sort"></param>
        /// <param name="searchText"></param>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        public List<UserManagementBO> GetUserDetails(string pageNumber, string pageSize, string sort, string searchText)
        {
            try
            {
                if (string.IsNullOrEmpty(pageNumber))
                    pageNumber = "0";

                if (string.IsNullOrEmpty(pageSize))
                    pageSize = "0";

                UserManagementBO objUserManagementBO = new UserManagementBO();
                objUserManagementBO.PageNumber = Convert.ToInt32(pageNumber);
                objUserManagementBO.PageSize = Convert.ToInt32(pageSize);
                objUserManagementBO.Sort = sort;
                objUserManagementBO.SearchText = searchText;

                List<UserManagementBO> lstUserManagementBO = new UserManagementBL().GetUserDetails(objUserManagementBO);
                return lstUserManagementBO;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 18-Dec-2014
        /// Purpose : To get trading history by user
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        public List<TradingHistoryBO> GetTradingHistoryByUserId(string userId, string pageNumber, string pageSize, string sort, string searchText, string fromDate, string toDate)
        {
            try
            {
                if (string.IsNullOrEmpty(pageNumber))
                    pageNumber = "0";

                if (string.IsNullOrEmpty(pageSize))
                    pageSize = "0";

                TradingHistoryBO objTradingHistoryBO = new TradingHistoryBO();
                objTradingHistoryBO.PageNumber = Convert.ToInt32(pageNumber);
                objTradingHistoryBO.PageSize = Convert.ToInt32(pageSize);
                objTradingHistoryBO.Sort = sort;
                objTradingHistoryBO.SearchText = searchText;
                if (!string.IsNullOrEmpty(fromDate))
                    objTradingHistoryBO.FromDate = Convert.ToDateTime(fromDate).ToString("yyyy-MM-dd"); //fromDate;   
                else
                    objTradingHistoryBO.FromDate = string.Empty;

                if (!string.IsNullOrEmpty(toDate))
                    objTradingHistoryBO.ToDate = Convert.ToDateTime(toDate).ToString("yyyy-MM-dd");  //toDate;
                else
                    objTradingHistoryBO.ToDate = string.Empty;

                List<TradingHistoryBO> lstTradingHistoryBO = new List<TradingHistoryBO>();
                if (!string.IsNullOrEmpty(Convert.ToString(HttpContext.Current.Session["UserIdToViewTradingHistory"])))
                {
                    objTradingHistoryBO.UserId = new Guid(Convert.ToString(HttpContext.Current.Session["UserIdToViewTradingHistory"]));

                    //Guid id = new Guid(Convert.ToString(userId));
                    lstTradingHistoryBO = new UserManagementBL().GetTradingHistoryByUserId(objTradingHistoryBO);
                }
                return lstTradingHistoryBO;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 18-Dec-2014
        /// Purpose : To set userid to view trading history
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        public string SetUserIdToViewTradingHistory(string userId)
        {
            HttpContext.Current.Session["UserIdToViewTradingHistory"] = userId;
            return "";
        }
    }
}
