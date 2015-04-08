using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BinaryOptionBO.Admin;
using BinaryOptionDA.Admin;
using System.Data;

namespace BinaryOptionBL.Admin
{
    public class ForgetPasswordBL
    {
        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 25-Nov-2014
        /// Purpose : To save the regenerated password by system in encryted form
        /// </summary>
        /// <param name="objForgotPasswordBO"></param>
        /// <returns></returns>
        public ForgetPasswordBO ForgetPassword(ForgetPasswordBO objForgotPasswordBO)
        {
            //DataTable objDataTable = new DataTable();
            ForgetPasswordBO obForgetPasswordBO = new ForgetPasswordBO();
            DataTable objDataTable = new ForgetPasswordDA().ForgetPassword(objForgotPasswordBO);

            foreach (DataRow dr in objDataTable.Rows)
            {
                obForgetPasswordBO.Result = Convert.ToString(dr["Result"]);
                obForgetPasswordBO.UserName = Convert.ToString(dr["UserName"]);
            }
            return obForgetPasswordBO;
        }
    }
}
