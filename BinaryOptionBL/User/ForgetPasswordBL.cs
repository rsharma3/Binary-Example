using BinaryOptionBO.User;
using BinaryOptionDA.User;
using System.Data;
using System;

namespace BinaryOptionBL.User
{
    public class ForgetPasswordBL
    {
        /// <summary>
        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 15-Dec-2014
        /// Purpose : To save the regenerated password by system in encryted form    
        /// </summary>
        /// <param name="objForgotPasswordBO"></param>
        /// <returns></returns>
        public ForgetPasswordBO ForgetPassword(ForgetPasswordBO objForgotPasswordBO)
        {
            //DataTable objDataTable = new DataTable();
            ForgetPasswordBO objForgetPasswordBO = new ForgetPasswordBO();
            DataTable objDataTable = new ForgetPasswordDA().ForgetPassword(objForgotPasswordBO);

            foreach (DataRow dr in objDataTable.Rows)
            {
                objForgetPasswordBO.Result = Convert.ToString(dr["Result"]);
                objForgetPasswordBO.UserName = Convert.ToString(dr["UserName"]);
                objForgetPasswordBO.TransactionPassword = Convert.ToString(dr["TransactionPassword"]);
                objForgetPasswordBO.TradingPassword = Convert.ToString(dr["TradingPassword"]);
                objForgetPasswordBO.InvestorPassword = Convert.ToString(dr["InvestorPassword"]);
            }
            return objForgetPasswordBO;
        }
    }
}
