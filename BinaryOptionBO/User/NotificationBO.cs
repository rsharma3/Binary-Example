using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BinaryOptionBO.User
{
    public class NotificationBO
    {
        public double Amount { get; set; }
        public Int64 TradingHistoryId { get; set; }
        public int TradingTypeId { get; set; }
        public string BidType { get; set; }
        public Guid AssetId { get; set; }
        public string InvestedAmount { get; set; }
        public double Payout { get; set; }
        public string TargetPrice { get; set; }
        public DateTime TradeTime { get; set; }
        public double ExpiryPrice { get; set; }
        public DateTime ExpiryTime { get; set; }
        public string ExpirtyType { get; set; }
        public int ExpirtyStatus { get; set; }
        public string TradingStatus { get; set; }
        public string ReturnAmount { get; set; }
        public Guid UserId { get; set; }
        public bool IsRead { get; set; }

        public string Asset { get; set; }
    }
}
