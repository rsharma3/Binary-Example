using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BinaryOptionBO.Admin
{
    /// <summary>
    /// Created By : Satish Verma
    /// Created Date : 25-Nov-2014
    /// Purpose : To keep properties of ForgetPasswordBO class
    /// </summary>
    public class ForgetPasswordBO
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string EncrytedPassword { get; set; }
        public string Result { get; set; }
        public string UserName { get; set; }

    }
}
