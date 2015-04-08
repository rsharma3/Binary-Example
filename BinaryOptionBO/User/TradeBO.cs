using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BinaryOptionBO.User
{
    public class TradeBO
    {
        public Int32 Id { get; set; }
        public Guid AssetId { get; set; }
        public string Asset { get; set; }
        public double Price { get; set; }
        public string Payout { get; set; }
        public Int32 ExpireTime { get; set; }
        public string ExpiryTime { get; set; }
        public string LogTime { get; set; }
        public Int32 AssetTypeId { get; set; }
        public Guid UserId { get; set; }
        public Int32 TradingTypeId { get; set; }
        public string  BidType { get; set; }
        public Double InvestedAmount { get; set; }
        public Double TargetPrice { get; set; }
        public Double MarkeetPrice { get; set; }
        public string TradingType { get; set; }
        public string TradeTime { get; set; }
        public string ExpiryType { get; set; }
        public string CountingTime { get; set; }
        public string TradeName { get; set; }
        public Double ReturnAmount { get; set; }
        public int GraphType { get; set; }
    }
    
    public class TradingType
    {
        public int typeId { get; set; }
        public string Name { get; set; }
        public List<Asset> lstAsset { get; set; }
    }

    public class Asset
    {
        public Guid AssetId { get; set; }
        public string AssetName { get; set; }
        public Int32 TypeId { get; set; }
        public Int16 ischecked { get; set; }
    }
}
