using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BinaryOptionBO.Admin.Common
{
    public class TradingTypeBO
    {
        public int Id { get; set; }
        public string TradingType { get; set; }
        public int? ParentId { get; set; }
        public bool IsActive { get; set; }
    }
}
