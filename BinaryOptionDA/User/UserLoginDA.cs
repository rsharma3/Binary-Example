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
    public class UserLoginDA : BinaryOptionDA.Common.Connect
    {




        public DataTable Login(UserLoginBO objUserLoginBO)
        {

            sqlParameter = new SqlParameter[2];
            try
            {
                sqlParameter[0] = new SqlParameter("@UserName", objUserLoginBO.UserName);
                sqlParameter[1] = new SqlParameter("@Password", objUserLoginBO.Password);

                return SqlHelper.ExecuteDataset(sqlConnection, CommandType.StoredProcedure, "sp_UserLogin", sqlParameter).Tables[0];
            }
            finally
            {

                sqlParameter = null;
            }

        }
        public DataTable UserActiveOrNot(UserLoginBO objUserLoginBO)
        {

            sqlParameter = new SqlParameter[2];
            try
            {
                sqlParameter[0] = new SqlParameter("@UserId", objUserLoginBO.UserId);
                return SqlHelper.ExecuteDataset(sqlConnection, CommandType.StoredProcedure, "Usp_CheckUserActiveOrNot", sqlParameter).Tables[0];
            }
            finally
            {

                sqlParameter = null;
            }

        }
    }
}
