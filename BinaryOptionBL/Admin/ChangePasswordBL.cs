using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BinaryOptionDA.Admin;
using BinaryOptionBO;

namespace BinaryOptionBL.Admin
{
    public class ChangePasswordBL
    {
        public string ChangePassword(ChangePasswordBO objChangePasswordBO)
        {
            ChangePasswordDA objForgetPasswordDA = new ChangePasswordDA();
            return objForgetPasswordDA.ChangePassword(objChangePasswordBO);
        }

        public string GetEmail(ChangePasswordBO objGetEmailBO)
        {
            ChangePasswordDA objGetEmailDA = new ChangePasswordDA();
            return objGetEmailDA.GetEmail(objGetEmailBO);
        }
    }
}
