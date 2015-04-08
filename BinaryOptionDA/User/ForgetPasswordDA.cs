using System;
using System.Data;
using System.Data.SqlClient;
using BinaryOptionBO.User;
using BinaryOptionDA.Common;

namespace BinaryOptionDA.User
{
    public class ForgetPasswordDA : Connect
    {
        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 15-Dec-2014
        /// Purpose : To save the regenerated passwords by system in encryted form
        /// </summary>
        /// <param name="objForgotPasswordBO"></param>
        /// <returns></returns>
        public DataTable ForgetPassword(ForgetPasswordBO objForgotPasswordBO)
        {
            DataTable objDataTable = new DataTable();
            string strResult = string.Empty;
            try
            {
                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "Sp_UserForgetPassword";
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@Email", objForgotPasswordBO.Email);
                //sqlCommand.Parameters.AddWithValue("@TransactionPassword", objForgotPasswordBO.EncrytedTransactionPassword);
                //sqlCommand.Parameters.AddWithValue("@TradingPassword", objForgotPasswordBO.EncrytedTradingPassword);
                //sqlCommand.Parameters.AddWithValue("@InvestorPassword", objForgotPasswordBO.EncrytedInvestorPassword);
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
