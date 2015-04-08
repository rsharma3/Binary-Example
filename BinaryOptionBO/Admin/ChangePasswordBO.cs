using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BinaryOptionBO
{
    public class ChangePasswordBO
    {
        public Guid Id { get; set; }
        public string OldPassword { get; set; }
        public string NewPassword { get; set; }
        public string Email { get; set; }
    }
}
