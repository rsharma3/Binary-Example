using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using System.Data;
using BinaryOptionBO;


namespace BinaryOptionDA.Admin
{
    public class ChangePasswordDA
    {

        public string ChangePassword(ChangePasswordBO objChangePasswordBO)
        {
            string strResult = string.Empty;
            SqlConnection sqlConnection = getConnection();
            SqlCommand cmd = new SqlCommand();
            try
            {
                sqlConnection.Open();
                DataTable dt = new DataTable();
                cmd.Connection = sqlConnection;
                cmd.CommandText = "Sp_AdminChangePassword";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@UserId", objChangePasswordBO.Id);
                cmd.Parameters.AddWithValue("@OldPassword", objChangePasswordBO.OldPassword);
                cmd.Parameters.AddWithValue("@NewPassword", objChangePasswordBO.NewPassword);
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);

                foreach (DataRow Row in dt.Rows)
                {
                    strResult = (Convert.ToString(Row["Result"]));
                }

            }

            catch (Exception ex)
            {
                throw ex;
            }

            return strResult;
        }


        public static SqlConnection getConnection()
        {
            string Connection = System.Configuration.ConfigurationSettings.AppSettings["Connection"].ToString();
            SqlConnection conn = new SqlConnection(Connection);
            return conn;
        }


        public string GetEmail(ChangePasswordBO objGetEmailBO)
        {
            string Email = string.Empty;
            SqlConnection sqlConnection = getConnection();
            SqlCommand cmd = new SqlCommand();
            try
            {
                sqlConnection.Open();
                DataTable dt = new DataTable();
                cmd.Connection = sqlConnection;
                cmd.CommandText = "Sp_GetEmail";
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@UserId", objGetEmailBO.Id);                
                SqlDataAdapter da = new SqlDataAdapter(cmd);
                da.Fill(dt);

                foreach (DataRow Row in dt.Rows)
                {
                    Email = (Convert.ToString(Row["Email"]));
                }

            }

            catch (Exception ex)
            {

            }

            return Email;

        }

    }
}
