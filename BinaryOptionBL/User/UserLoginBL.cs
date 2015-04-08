using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web;
using BinaryOptionBO.User;
using BinaryOptionDA.User;
using System.Net.Mail;
using System.Data;

namespace BinaryOptionBL.User
{
    public class UserLoginBL
    {
        public UserLoginBO Login(UserLoginBO objUserLoginBO)
        {
            try
            {
                //List<UserLoginBO> listUserLoginBO = new List<UserLoginBO>();
                UserLoginDA objUserLoginDA = new UserLoginDA();
                DataTable dtdetails = new DataTable();
                UserLoginBO objUserLogin = new UserLoginBO();

                dtdetails = objUserLoginDA.Login(objUserLoginBO);

                if (dtdetails.Rows.Count > 0)
                {
                    if (Convert.ToInt32(dtdetails.Rows[0]["RoleId"]) > 0)
                    {
                        //UserLoginBO objUserLogin = new UserLoginBO();
                        objUserLogin.UserId = (Guid)dtdetails.Rows[0]["Id"];
                        objUserLogin.UserName = Convert.ToString(dtdetails.Rows[0]["UserName"]);
                        objUserLogin.Email = Convert.ToString(dtdetails.Rows[0]["Email"]);
                        objUserLogin.RoleId = Convert.ToString(dtdetails.Rows[0]["RoleId"]);
                        objUserLogin.FirstName = Convert.ToString(dtdetails.Rows[0]["FirstName"]);
                        objUserLogin.LastName = Convert.ToString(dtdetails.Rows[0]["LastName"]);
                        objUserLogin.Balance = Convert.ToString(dtdetails.Rows[0]["Balance"]);
                        objUserLogin.Isactive=Convert.ToBoolean(dtdetails.Rows[0]["IsActive"]);
                        //listUserLoginBO.Add(objUserLogin);
                        return objUserLogin;
                    }
                    else
                    {
                        objUserLogin.RoleId = Convert.ToString(dtdetails.Rows[0]["RoleId"]);
                        //objUserLogin = null;
                        return objUserLogin;
                    }
                }
                else
                {
                    objUserLogin = null;
                    return objUserLogin;
                }
            }
            finally
            {

            }
        }
        public UserLoginBO UserActiveOrNot(UserLoginBO objUserLoginBO)
        {
            try
            {
                //List<UserLoginBO> listUserLoginBO = new List<UserLoginBO>();
                UserLoginDA objUserLoginDA = new UserLoginDA();
                DataTable dtdetails = new DataTable();
                UserLoginBO objUserLogin = new UserLoginBO();

                dtdetails = objUserLoginDA.UserActiveOrNot(objUserLoginBO);
                if (dtdetails.Rows.Count > 0)
                {
                    if (Convert.ToInt32(dtdetails.Rows[0]["RoleId"]) > 0)
                    {
                        //UserLoginBO objUserLogin = new UserLoginBO();
                        objUserLogin.UserId = (Guid)dtdetails.Rows[0]["Id"];
                        objUserLogin.UserName = Convert.ToString(dtdetails.Rows[0]["UserName"]);
                        objUserLogin.Email = Convert.ToString(dtdetails.Rows[0]["Email"]);
                        objUserLogin.RoleId = Convert.ToString(dtdetails.Rows[0]["RoleId"]);
                        objUserLogin.FirstName = Convert.ToString(dtdetails.Rows[0]["FirstName"]);
                        objUserLogin.LastName = Convert.ToString(dtdetails.Rows[0]["LastName"]);
                        objUserLogin.Balance = Convert.ToString(dtdetails.Rows[0]["Balance"]);
                        objUserLogin.Isactive = Convert.ToBoolean(dtdetails.Rows[0]["IsActive"]);
                        return objUserLogin;
                    }
                    else
                    {
                        objUserLogin.RoleId = Convert.ToString(dtdetails.Rows[0]["RoleId"]);
                        return objUserLogin;
                    }
                }
                else
                {
                    objUserLogin = null;
                    return objUserLogin;
                }
            }
            finally
            {

            }
        }

    }
}
