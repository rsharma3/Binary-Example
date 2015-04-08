using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BinaryOptionBO.User
{
    /// <summary>
    /// Created By : Satish Verma
    /// Created Date : 15-Dec-2014
    /// Purpose : To keep properties of ForgetPasswordBO class
    /// </summary>
    public class ForgetPasswordBO
    {
        public string Email { get; set; }
        public string TransactionPassword { get; set; }
        public string EncrytedTransactionPassword { get; set; }
        public string TradingPassword { get; set; }
        public string EncrytedTradingPassword { get; set; }
        public string InvestorPassword { get; set; }
        public string EncrytedInvestorPassword { get; set; }
        public string Result { get; set; }
        public string UserName { get; set; }
    }
}
