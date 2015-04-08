using System;

namespace BinaryOptionBO.Admin
{
    public class TradingHistoryBO
    {
        public Int64 TradingHistoryId { get; set; }
        public int? TradingTypeId { get; set; }
        public string TradingType { get; set; }
        public string BidType { get; set; }
        public Guid? AssetId { get; set; }
        public string Asset { get; set; }
        public string InvestedAmount { get; set; }
        public string Payout { get; set; }
        public string TargetPrice { get; set; }
        public string TradeTime { get; set; }
        public string ExpiryPrice { get; set; }
        public string ExpiryTime { get; set; }
        public int? ExpirtyStatus { get; set; }
        public string ExpirtyStatusName { get; set; }
        public int? TradingStatus { get; set; }
        public string ReturnAmount { get; set; }
        public Guid? UserId { get; set; }
        public bool? IsRead { get; set; }
        public int PageNumber { get; set; }
        public int PageSize { get; set; }
        public string Sort { get; set; }
        public string SearchText { get; set; }
        public int Total { get; set; }
        public string FromDate { get; set; }
        public string ToDate { get; set; }
    }
}
