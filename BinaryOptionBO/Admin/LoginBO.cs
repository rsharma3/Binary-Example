using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BinaryOptionBO.Admin
{
    public class LoginBO
    {
        public Guid Id { get; set; }
        public string UserName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public int RoleId { get; set; }
        public DateTime CreatedOn { get; set; }
        public int CreatedBy { get; set; }
        public DateTime ModifyOn { get; set; }
        public int ModifyBy { get; set; }
        public bool IsSessionExist { get; set; }
    }

}
