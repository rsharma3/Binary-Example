using System;

namespace BinaryOptionBO.Admin
{
    public class UserManagementBO
    {
        public int UserDetailId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int? CountryId { get; set; }
        public Int64? Phone { get; set; }
        public string DOB { get; set; }
        public string Balance { get; set; }
        public bool IsActive { get; set; }
        public Guid UserLoginId { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string TransactionPassword { get; set; }
        public string TradingPassword { get; set; }
        public string InvestorPassword { get; set; }
        public string Email { get; set; }
        public int RoleId { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public string Sort { get; set; }
        public string SearchText { get; set; }
        public int Total { get; set; }
    }
}
