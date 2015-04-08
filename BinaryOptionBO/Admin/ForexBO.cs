using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BinaryOptionBO.Admin
{
    public class ForexBO
    {
        public int Id { get; set; }
        public int AssetDetailId { get; set; }
        public Guid AssetId { get; set; }
        public string Asset { get; set; }
        public double Price { get; set; }
        public string TelnetValue1 { get; set; }
        public string TelnetValue2 { get; set; }
        public int? Payout { get; set; }
        public string ExpireTime { get; set; }
        public double? UpperLimit { get; set; }
        public double? LowerLimit { get; set; }
        public double? Kvalue { get; set; }
        public int TradingTypeId { get; set; }
        public int Total { get; set; }
        public string TradingType { get; set; }
        public bool AssetStatus { get; set; }
    }
}
