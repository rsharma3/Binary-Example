using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BinaryOptionBO;
using BinaryOptionDA;
using System.Data;
using BinaryOptionBO.Admin;
using BinaryOptionDA.Admin;



namespace BinaryOptionBL.Admin
{

    public class LoginBL
    {
        public LoginBO AuthenticateUser(string UserName, string Password)
        {
            try
            {
                DataSet ds = new DataSet();
                DataTable dt1 = new DataTable();
                LoginDA objLoginDA = new LoginDA();
                ds = objLoginDA.AuthenticateUser(UserName, Password);
                dt1 = ds.Tables[0];
                LoginBO objLoginBO = new LoginBO();
                if (dt1.Rows.Count > 0)
                {
                    if (Convert.ToInt32(dt1.Rows[0]["Result"]) > 0)
                    {
                        objLoginBO.Id = (Guid)dt1.Rows[0]["Id"];
                        objLoginBO.Email = Convert.ToString(dt1.Rows[0]["Email"]);
                        objLoginBO.UserName = Convert.ToString(dt1.Rows[0]["UserName"]);
                        objLoginBO.RoleId = Convert.ToInt32(dt1.Rows[0]["RoleId"]);
                        objLoginBO.Password = Convert.ToString(dt1.Rows[0]["Password"]);
                    }
                    else
                    {
                        objLoginBO = null;
                    }


                }
                return objLoginBO;
            }

            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                // objLoginDa = null;
            }
        }





    }
}
