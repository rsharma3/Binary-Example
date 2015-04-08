using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MatInc.DAL;
using System.Data.SqlClient;
using System.Data;
using BinaryOptionBO.User;
using BinaryOptionDA.Common;


namespace BinaryOptionDA.User
{
    public class RegistrationDA : BinaryOptionDA.Common.Connect
    {
        public DataTable Registration(RegistrationBO objRegistrationBO)
        {

            sqlParameter = new SqlParameter[11];
            try
            {
                sqlParameter[0] = new SqlParameter("@UserName", objRegistrationBO.UserName);
                sqlParameter[1] = new SqlParameter("@TransactionPassword", objRegistrationBO.TransactionPassword);
                sqlParameter[2] = new SqlParameter("@Email", objRegistrationBO.Email);
                sqlParameter[3] = new SqlParameter("@FirstName", objRegistrationBO.FirstName);
                sqlParameter[4] = new SqlParameter("@LastName", objRegistrationBO.LastName);
                sqlParameter[5] = new SqlParameter("@Title", objRegistrationBO.Title);
                sqlParameter[6] = new SqlParameter("@CountryId", objRegistrationBO.CountryId);
                sqlParameter[7] = new SqlParameter("@Phone", objRegistrationBO.Phone);
                sqlParameter[8] = new SqlParameter("@DOB", objRegistrationBO.DOB);
                sqlParameter[9] = new SqlParameter("@Balance", 1000);
                sqlParameter[10] = new SqlParameter("@isSubscribed", objRegistrationBO.isSubscribed);

                return SqlHelper.ExecuteDataset(sqlConnection, CommandType.StoredProcedure, "sp_UserRregistration", sqlParameter).Tables[0];
            }
            finally
            {
                
                sqlParameter = null;
            }

        }

        public DataTable GetCountry()
        {
            try
            {
                return SqlHelper.ExecuteDataset(sqlConnection, CommandType.StoredProcedure, "sp_GetCountries", sqlParameter).Tables[0];
            }
            finally
            {
                sqlConnection.Dispose();
                sqlParameter = null;
            }
        }
    }
}
