using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BinaryOptionDA.Admin;
using System.Data;
using BinaryOptionBO.Admin;

namespace BinaryOptionBL.Admin
{
    public class ForexBL
    {
        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 1-Dec-2014
        /// Purpose : To Active/InActive Asset
        /// </summary>
        /// <param name="assetId"></param>
        /// <param name="isActive"></param>
        /// <returns></returns>
        public string ActiveInactiveAsset(Guid assetId)
        {
            return new ForexDA().ActiveInactiveAsset(assetId);
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 1-Dec-2014
        /// Purpose : To Get Asset Data
        /// </summary>
        /// <param name="tradingTypeId"></param>
        /// <returns></returns>
        public List<ForexBO> GetGridDataByTradingType(int assetTypeId, int tradingTypeId, int pageNumber, int pageSize, string sort, string searchText)
        {
            DataTable objDataTable = new ForexDA().GetGridDataByTradingType(assetTypeId, tradingTypeId, pageNumber, pageSize, sort, searchText);
            List<ForexBO> lstForexBO = new List<ForexBO>();
            foreach (DataRow Row in objDataTable.Rows)
            {
                ForexBO obForexBO = new ForexBO();
                obForexBO.Total = Convert.ToInt32(Row["Total"]);
                obForexBO.AssetId = (Guid)Row["AssetId"];
                obForexBO.AssetDetailId = Convert.ToInt32(Row["AssetDetailId"]); // Used to Update asset details
                obForexBO.Asset = Convert.ToString(Row["Asset"]);
                obForexBO.Price = Convert.ToDouble(Row["Price"]);
                obForexBO.TelnetValue1 = Convert.ToString(Row["TelnetValue1"]);
                obForexBO.TelnetValue2 = Convert.ToString(Row["TelnetValue2"]);
                obForexBO.AssetStatus = Convert.ToBoolean(Row["AssetStatus"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["UpperLimit"])))
                    obForexBO.UpperLimit = null;
                else
                    obForexBO.UpperLimit = Convert.ToDouble(Row["UpperLimit"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["LowerLimit"])))
                    obForexBO.LowerLimit = null;
                else
                    obForexBO.LowerLimit = Convert.ToDouble(Row["LowerLimit"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["Payout"])))
                    obForexBO.Payout = 0;
                else
                    obForexBO.Payout = Convert.ToInt32(Row["Payout"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["ExpireTime"])))
                    obForexBO.ExpireTime = "null";
                else
                    obForexBO.ExpireTime = Convert.ToString(Row["ExpireTime"]);

                if (string.IsNullOrEmpty(Convert.ToString(Row["Kvalue"])))
                    obForexBO.Kvalue = null;
                else
                    obForexBO.Kvalue = Convert.ToDouble(Row["Kvalue"]);

                //obForexBO.UpperLimit = Convert.ToDouble(Row["UpperLimit"]);
                //obForexBO.LowerLimit = Convert.ToDouble(Row["LowerLimit"]);
                //obForexBO.Payout = Convert.ToInt32(Row["Payout"]);
                //obForexBO.ExpireTime = Convert.ToString(Row["ExpireTime"]);
                //obForexBO.Kvalue = Convert.ToDouble(Row["Kvalue"]);
                obForexBO.TradingTypeId = Convert.ToInt32(Row["TradingTypeId"]);
                obForexBO.TradingType = Convert.ToString(Row["TradingType"]);
                lstForexBO.Add(obForexBO);
            }
            return lstForexBO;
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 2-Dec-2014
        /// Purpose : To Update Asset Detail
        /// </summary>
        /// <param name="objForexBO"></param>
        /// <returns></returns>
        public string UpdateAssetDetail(ForexBO objForexBO)
        {
            return new ForexDA().UpdateAssetDetail(objForexBO);
        }
    }
}
