using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BinaryOptionBO.Admin;
using System.Data.SqlClient;
using System.Data;
using System.Configuration;
using BinaryOptionDA.Common;

namespace BinaryOptionDA.Admin
{
    public class ForgetPasswordDA : Connect
    {
        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 25-Nov-2014
        /// Purpose : To save the regenerated password by system in encryted form
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
                sqlCommand.CommandText = "Sp_AdminForgetPassword";
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@Email", objForgotPasswordBO.Email);
                sqlCommand.Parameters.AddWithValue("@Password", objForgotPasswordBO.EncrytedPassword);
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
