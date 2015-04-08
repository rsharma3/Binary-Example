using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BinaryOptionDA.Admin;
using BinaryOptionBO.Admin;
using System.Data;

namespace BinaryOptionBL.Admin
{
    public class UserManagementBL
    {
        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 11-Dec-2014
        /// Purpose : To Active/InActive User
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public string ActiveInactiveUser(Int64 userId)
        {
            return new UserManagementDA().ActiveInactiveUser(userId);
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 11-Dec-2014
        /// Purpose : To get user details
        /// </summary>
        /// <param name="objUserManagementBO"></param>
        /// <returns></returns>
        public List<UserManagementBO> GetUserDetails(UserManagementBO objUserManagementBO)
        {
            DataTable objDataTable = new UserManagementDA().GetUserDetails(objUserManagementBO);
            List<UserManagementBO> lstUserManagementBO = new List<UserManagementBO>();
            foreach (DataRow Row in objDataTable.Rows)
            {
                UserManagementBO obUserManagementBO = new UserManagementBO();
                obUserManagementBO.UserDetailId = Convert.ToInt32(Row["UserDetailId"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["FirstName"])))
                    obUserManagementBO.FirstName = string.Empty;
                else
                    obUserManagementBO.FirstName = Convert.ToString(Row["FirstName"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["LastName"])))
                    obUserManagementBO.LastName = string.Empty;
                else
                    obUserManagementBO.LastName = Convert.ToString(Row["LastName"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["CountryId"])))
                    obUserManagementBO.CountryId = null;
                else
                    obUserManagementBO.CountryId = Convert.ToInt32(Row["CountryId"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["Phone"])))
                    obUserManagementBO.Phone = null;
                else
                    obUserManagementBO.Phone = Convert.ToInt64(Row["Phone"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["Email"])))
                    obUserManagementBO.Email = string.Empty;
                else
                    obUserManagementBO.Email = Convert.ToString(Row["Email"]);

                obUserManagementBO.DOB = Convert.ToDateTime(Row["DOB"]).ToString("dd-MMM-yyyy");

                if (string.IsNullOrEmpty(Convert.ToString(Row["Balance"])))
                    obUserManagementBO.Balance = string.Empty;
                else
                    obUserManagementBO.Balance = Convert.ToString(Row["Balance"]);


                obUserManagementBO.IsActive = Convert.ToBoolean(Row["IsActive"]);
                obUserManagementBO.UserLoginId = (Guid)Row["UserLoginId"];
                obUserManagementBO.UserName = Convert.ToString(Row["UserName"]);
                obUserManagementBO.Email = Convert.ToString(Row["Email"]);
                obUserManagementBO.RoleId = Convert.ToInt32(Row["RoleId"]);
                obUserManagementBO.Total = Convert.ToInt32(Row["Total"]);
                lstUserManagementBO.Add(obUserManagementBO);
            }
            return lstUserManagementBO;
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 18-Dec-2014
        /// Purpose : To get trading history by user
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public List<TradingHistoryBO> GetTradingHistoryByUserId(TradingHistoryBO obTradingHistoryBO)
        {
            DataTable objDataTable = new UserManagementDA().GetTradingHistoryByUserId(obTradingHistoryBO);
            List<TradingHistoryBO> lstTradingHistoryBO = new List<TradingHistoryBO>();
            foreach (DataRow Row in objDataTable.Rows)
            {
                TradingHistoryBO objTradingHistoryBO = new TradingHistoryBO();
                objTradingHistoryBO.TradingHistoryId = Convert.ToInt64(Row["TradingHistoryId"]);
                objTradingHistoryBO.TradingTypeId = Convert.ToInt32(Row["TradingTypeId"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["TradingType"])))
                    objTradingHistoryBO.TradingType = string.Empty;
                else
                    objTradingHistoryBO.TradingType = Convert.ToString(Row["TradingType"]);

                objTradingHistoryBO.BidType = Convert.ToString(Row["BidType"]);
                objTradingHistoryBO.AssetId = (Guid)Row["AssetId"];
                objTradingHistoryBO.Asset = Convert.ToString(Row["Asset"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["InvestedAmount"])))
                    objTradingHistoryBO.InvestedAmount = string.Empty;
                else
                    objTradingHistoryBO.InvestedAmount = Convert.ToString(Row["InvestedAmount"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["Payout"])))
                    //  objTradingHistoryBO.Payout = string.Empty;
                    objTradingHistoryBO.Payout = "0";
                else
                    objTradingHistoryBO.Payout = Convert.ToString(Row["Payout"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["TargetPrice"])))
                    objTradingHistoryBO.TargetPrice = string.Empty;
                else
                    objTradingHistoryBO.TargetPrice = Convert.ToString(Row["TargetPrice"]);

                objTradingHistoryBO.TradeTime = Convert.ToDateTime(Row["TradeTime"]).ToString("HH:mm:ss");

                if (string.IsNullOrEmpty(Convert.ToString(Row["ExpiryPrice"])))
                    objTradingHistoryBO.ExpiryPrice = string.Empty;
                else
                    objTradingHistoryBO.ExpiryPrice = Convert.ToString(Row["ExpiryPrice"]);

                objTradingHistoryBO.ExpiryTime = Convert.ToDateTime(Row["ExpiryTime"]).ToString("HH:mm:ss");

                if (string.IsNullOrEmpty(Convert.ToString(Row["ExpirtyStatus"])))
                    objTradingHistoryBO.ExpirtyStatus = null;
                else
                    objTradingHistoryBO.ExpirtyStatus = Convert.ToInt32(Row["ExpirtyStatus"]);

                objTradingHistoryBO.ExpirtyStatusName = Convert.ToString(Row["ExpirtyStatusName"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["TradingStatus"])))
                    objTradingHistoryBO.TradingStatus = null;
                else
                    objTradingHistoryBO.TradingStatus = Convert.ToInt32(Row["TradingStatus"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["ReturnAmount"])))
                    objTradingHistoryBO.ReturnAmount = string.Empty;
                else
                    objTradingHistoryBO.ReturnAmount = Convert.ToString(Row["ReturnAmount"]);

                objTradingHistoryBO.UserId = (Guid)Row["UserId"];
                objTradingHistoryBO.IsRead = Convert.ToBoolean(Row["IsRead"]);
                objTradingHistoryBO.Total = Convert.ToInt32(Row["Total"]);
                lstTradingHistoryBO.Add(objTradingHistoryBO);
            }
            return lstTradingHistoryBO;
        }
    }
}
