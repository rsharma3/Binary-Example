using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using BinaryOptionBO.User;
using BinaryOptionDA.User;

namespace BinaryOptionBL.User
{
    public class NotificationBL
    {
        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 17-Dec-2014
        /// Purpose : To get trade notifications  
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public List<NotificationBO> GetTradeNotifications(Guid userId)
        {
            NotificationBO objNotificationBO = null;
            List<NotificationBO> lstNotificationBO = new List<NotificationBO>();
            DataTable objDataTable = new NotificationDA().GetTradeNotifications(userId);
            foreach (DataRow row in objDataTable.Rows)
            {
                objNotificationBO = new NotificationBO();
                objNotificationBO.TradingHistoryId = Convert.ToInt64(row["TradingHistoryId"]);
                objNotificationBO.Asset = Convert.ToString(row["Asset"]);
                objNotificationBO.InvestedAmount = Convert.ToString(row["InvestedAmount"]);
                objNotificationBO.ExpirtyType = Convert.ToString(row["ExpiryType"]);
                objNotificationBO.ExpirtyStatus = Convert.ToInt32(row["ExpirtyStatus"]);
                objNotificationBO.ReturnAmount = Convert.ToString(row["ReturnAmount"]);

                lstNotificationBO.Add(objNotificationBO);
            }
            return lstNotificationBO;
        }
    }
}
