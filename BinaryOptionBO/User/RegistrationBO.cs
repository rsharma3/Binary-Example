using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BinaryOptionBO.User
{
    public class RegistrationBO
    {
        public string UserName { get; set; }
        public string TransactionPassword { get; set; }
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }
        public string CountryId { get; set; }
        public string Phone { get; set; }
        public string DOB { get; set; }
        public string isSubscribed { get; set; }
    }
    public class CountryBO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }

    }
}
