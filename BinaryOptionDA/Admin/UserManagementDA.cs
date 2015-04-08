using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BinaryOptionDA.Common;
using System.Data;
using System.Data.SqlClient;
using BinaryOptionBO.Admin;

namespace BinaryOptionDA.Admin
{
    public class UserManagementDA : Connect
    {
        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 11-Dec-2014
        /// Purpose : To get user details
        /// </summary>
        /// <param name="objUserManagementBO"></param>
        /// <returns></returns>
        public DataTable GetUserDetails(UserManagementBO objUserManagementBO)
        {
            DataTable objDataTable = new DataTable();
            try
            {
                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "Sp_GetUserDetails";
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@PageNumber", objUserManagementBO.PageNumber);
                sqlCommand.Parameters.AddWithValue("@PageSize", objUserManagementBO.PageSize);
                sqlCommand.Parameters.AddWithValue("@Sort", objUserManagementBO.Sort);
                sqlCommand.Parameters.AddWithValue("@SearchText", objUserManagementBO.SearchText);
                sqlDataAdapter = new SqlDataAdapter(sqlCommand);
                sqlDataAdapter.Fill(objDataTable);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                sqlDataAdapter.Dispose();
                sqlCommand.Dispose();
                sqlConnection.Close();
                sqlConnection.Dispose();
            }
            return objDataTable;
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 11-Dec-2014
        /// Purpose : To Active/InActive User
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public string ActiveInactiveUser(Int64 userId)
        {
            string strResult = string.Empty;
            DataTable objDataTable = new DataTable();
            try
            {
                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "Sp_UserActiveInActive";
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@Id", userId);
                sqlDataAdapter = new SqlDataAdapter(sqlCommand);
                sqlDataAdapter.Fill(objDataTable);
                foreach (DataRow Row in objDataTable.Rows)
                {
                    strResult = (Convert.ToString(Row["Result"]));
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                sqlDataAdapter.Dispose();
                sqlCommand.Dispose();
                sqlConnection.Close();
                sqlConnection.Dispose();
            }
            return strResult;
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 18-Dec-2014
        /// Purpose : To get trading history by user
        /// </summary>
        /// <param name="objTradingHistoryBO"></param>
        /// <returns></returns>
        public DataTable GetTradingHistoryByUserId(TradingHistoryBO objTradingHistoryBO)
        {
            DataTable objDataTable = new DataTable();
            try
            {
                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "Sp_GetTradingHistoryByUserId";
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@UserId", objTradingHistoryBO.UserId);
                sqlCommand.Parameters.AddWithValue("@PageNumber", objTradingHistoryBO.PageNumber);
                sqlCommand.Parameters.AddWithValue("@PageSize", objTradingHistoryBO.PageSize);
                sqlCommand.Parameters.AddWithValue("@Sort", objTradingHistoryBO.Sort);
                sqlCommand.Parameters.AddWithValue("@SearchText", objTradingHistoryBO.SearchText);
                sqlCommand.Parameters.AddWithValue("@FromDate", objTradingHistoryBO.FromDate);
                sqlCommand.Parameters.AddWithValue("@ToDate", objTradingHistoryBO.ToDate);
                sqlDataAdapter = new SqlDataAdapter(sqlCommand);
                sqlDataAdapter.Fill(objDataTable);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                sqlDataAdapter.Dispose();
                sqlCommand.Dispose();
                sqlConnection.Close();
                sqlConnection.Dispose();
            }
            return objDataTable;
        }
    }
}
