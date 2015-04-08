using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BinaryOptionDA.Common;
using System.Data;
using Microsoft.ApplicationBlocks.Data;
using System.Data.SqlClient;
namespace BinaryOptionDA.Admin
{
   public class LoginDA: Connect
    {
    
       public DataSet AuthenticateUser(string UserName, string Password)
       {
           DataSet ds = new DataSet();
           SqlConnection sqlConnection = getConnection();
           sqlParameter = new SqlParameter[2];
           try
           {
               sqlConnection.Open();
               sqlParameter[0] = new SqlParameter("@UserName", UserName);
               sqlParameter[1] = new SqlParameter("@Password", Password);
               return ds = SqlHelper.ExecuteDataset(sqlConnection, CommandType.StoredProcedure, "UDSP_UserLogin", sqlParameter);
           }

           catch (SqlException ex)
           {
               throw ex;
           }

           //finally
           //{
           //    sqlParameter = null;
           //    sqlConnection.Close();
           //}
       }

       public static SqlConnection getConnection()
       {
           string Connection = System.Configuration.ConfigurationSettings.AppSettings["Connection"].ToString();
           SqlConnection conn = new SqlConnection(Connection);
           return conn;
       }




    }
}
