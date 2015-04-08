using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BinaryOptionDA.Common;
using System.Data;
using System.Data.SqlClient;
using BinaryOptionBO.Admin.Common;


namespace BinaryOptionDA.Admin.Common
{
    public class TradingTypeDA : Connect
    {

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 1-Dec-2014
        /// Purpose : To get Trading Type
        /// </summary>
        /// <param name="objForgotPasswordBO"></param>
        /// <returns></returns>
        public DataTable GetTradingType(TradingTypeBO objTradingTypeBO)
        {
            DataTable objDataTable = new DataTable();
            try
            {
                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "Sp_GetTradingType";
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@ParentId", objTradingTypeBO.ParentId);
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
