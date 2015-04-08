using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BinaryOptionDA.Common;
using System.Data;
using System.Data.SqlClient;

namespace BinaryOptionDA.User
{
    public class NotificationDA : Connect
    {
        /// <summary>      
        /// Created By : Satish Verma
        /// Created Date : 17-Dec-2014
        /// Purpose : To get trade notifications    
        /// </summary>
        /// <param name="userId"></param>
        /// <returns></returns>
        public DataTable GetTradeNotifications(Guid userId)
        {
            DataTable objDataTable = new DataTable();
            try
            {
                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "Sp_GetBetAmountAndNotification";
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@UserId", userId);
                sqlDataAdapter = new SqlDataAdapter(sqlCommand);
                sqlDataAdapter.Fill(objDataTable);
            }
            catch (Exception ex)
            {
                objDataTable = null;
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
