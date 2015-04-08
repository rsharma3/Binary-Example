using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BinaryOptionBO;
using BinaryOptionBO.User;
using System.Data;
using BinaryOptionDA.User;

namespace BinaryOptionBL.User
{
    public class TradeBL
    {
        /// <summary>
        /// Get Data for tradding type grid 
        /// </summary>
        /// <param name="tradingTypeId">tradingTypeId</param>
        /// <param name="assetTypeId">assetTypeId</param>
        /// <param name="UserId">UserId</param>
        /// <returns>Data for Grid</returns>
        public List<TradeBO> GetGridDataByTradingTypeID(int tradingTypeId, int assetTypeId, Guid UserId)
        {
            try
            {
                DataTable objDataTable = new TradeDA().GetGridDataByTradingTypeID(tradingTypeId, assetTypeId, UserId);
                List<TradeBO> lstTradeBO = new List<TradeBO>();
                if (objDataTable.Rows.Count > 0)
                {
                    foreach (DataRow Row in objDataTable.Rows)
                    {
                        TradeBO obTradeBO = new TradeBO();
                        obTradeBO.AssetId = (Guid)Row["Id"];
                        if (!String.IsNullOrEmpty((Row["Asset"]).ToString()))
                        {
                            obTradeBO.Asset = Convert.ToString(Row["Asset"]);
                        }
                        else
                        {
                            obTradeBO.Asset = null;
                        }
                        if (!String.IsNullOrEmpty((Row["Price"]).ToString()))
                        {
                            obTradeBO.Price = Convert.ToDouble(Row["Price"]);
                        }
                        else
                        {
                            obTradeBO.Price = 0;
                        }
                        if (!String.IsNullOrEmpty((Row["Payout"]).ToString()))
                        {
                            obTradeBO.Payout = Convert.ToString(Row["Payout"]);
                        }
                        else
                        {
                            obTradeBO.Payout = "0";
                        }
                        if (!String.IsNullOrEmpty((Row["ExpireTime"]).ToString()))
                        {
                            obTradeBO.ExpireTime = Convert.ToInt32(Row["ExpireTime"]);
                        }
                        else
                        {
                            obTradeBO.ExpireTime = 0;
                        }
                        obTradeBO.ExpiryTime = obTradeBO.ExpireTime.ToString();
                        lstTradeBO.Add(obTradeBO);
                    }
                }
                else
                {
                    lstTradeBO = null; 
                }
                return lstTradeBO;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        /// <summary>
        /// GetGraphFeed
        /// </summary>
        /// <param name="assetId">assetId</param>
        /// <returns> Data for binding graph chart</returns>
        public List<TradeBO> GetGraphFeed(TradeBO objBO)
        {
            try
            {
                DataTable objDataTable = new TradeDA().GetGraphFeed(objBO);
                List<TradeBO> lstTradeBO = new List<TradeBO>();
                if (objDataTable.Rows.Count > 0)
                {
                    foreach (DataRow Row in objDataTable.Rows)
                    {
                        TradeBO obTradeBO = new TradeBO();
                        obTradeBO.Asset = Convert.ToString(Row["Asset"]);
                        obTradeBO.Price = Convert.ToDouble(Row["Price"]);
                        obTradeBO.LogTime = Convert.ToString(Row["LogTime"]);

                        lstTradeBO.Add(obTradeBO);

                    }
                }
                else
                {
                    lstTradeBO = null;
                }
                return lstTradeBO;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        /// <summary>
        /// CustomGridData
        /// </summary>
        /// <param name="UserId">UserId</param>
        /// <returns>Data for Custom trading typeon setting click</returns>
        public List<TradingType> CustomGridData(Guid UserId)
        {
            List<TradingType> lstobjTradingType = new List<TradingType>();
            TradeDA objTradeDA = new TradeDA();
            DataSet dsData = new DataSet();
            DataTable dtAssetType = new DataTable();
            DataTable dtAsset = new DataTable();
            try
            {

                dsData = objTradeDA.CustomGridData(UserId);
                if (dsData.Tables.Count > 0)
                {
                    dtAssetType = dsData.Tables[0];
                    dtAsset = dsData.Tables[1];

                    DataRow[] drAssets = null;

                    foreach (DataRow drAssetType in dtAssetType.Rows)
                    {
                        TradingType objTradingType = new TradingType();
                        objTradingType.typeId = Convert.ToInt32(drAssetType["Id"]);
                        objTradingType.Name = Convert.ToString(drAssetType["Name"]);
                        drAssets = dtAsset.Select("TypeId = " + objTradingType.typeId);
                        List<Asset> lstobjAsset = new List<Asset>();
                        foreach (DataRow drAsset in drAssets)
                        {
                            Asset objAsset = new Asset();
                            objAsset.AssetId = (Guid)drAsset["Id"];
                            objAsset.AssetName = Convert.ToString(drAsset["Asset"]);
                            objAsset.TypeId = Convert.ToInt32(drAsset["TypeId"]);
                            objAsset.ischecked = Convert.ToInt16(drAsset["ischecked"]);
                            lstobjAsset.Add(objAsset);

                        }
                        objTradingType.lstAsset = lstobjAsset;
                        lstobjTradingType.Add(objTradingType);

                    }
                }
                else
                {
                    lstobjTradingType = null;
                }
                return lstobjTradingType;

            }

            catch (Exception ex)
            {
                throw ex;
            }
        }
        /// <summary>
        /// InsertCustomGrid
        /// </summary>
        /// <param name="objBO">objBO</param>
        /// <param name="assetId">assetId</param>
        /// <returns>Insert Data of Custom Trade</returns>
        public string InsertCustomGrid(TradeBO objBO, string assetId)
        {
            string result = "";
            try
            {

                DataTable objDataTable = new TradeDA().InsertCustomGrid(objBO.UserId, assetId);
                result = objDataTable.Rows[0]["Result"].ToString();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        /// <summary>
        /// InsertBidData
        /// </summary>
        /// <param name="objBO">objBO</param>
        /// <param name="serverDateTime">serverDateTime</param>
        /// <returns>Place Bid</returns>
        public string InsertBidData(TradeBO objBO, string serverDateTime)
        {
            string result = "";
            try
            {

                DataTable objDataTable = new TradeDA().InsertBidData(objBO,serverDateTime);
                result = objDataTable.Rows[0]["Result"].ToString();
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        /// <summary>
        /// GetOpenTradeData
        /// </summary>
        /// <param name="objBO">objBO</param>
        /// <returns>Data about Current Bid</returns>
        public List<TradeBO> GetOpenTradeData(TradeBO objBO)
        {
            try
            {
                DataTable objDataTable = new TradeDA().GetOpenTradeData(objBO);
                List<TradeBO> objList = new List<TradeBO>();
                DateTime time=DateTime.Now;
                string time1 = time.ToString("HH:mm:ss");
                if (objDataTable.Rows.Count > 0)
                {
                    foreach (DataRow rw in objDataTable.Rows)
                    {
                        objList.Add(new TradeBO
                        {
                            Id =Convert.ToInt32( rw["Id"]),
                            Asset = rw["Asset"].ToString(),
                            AssetId = (Guid)rw["AssetId"],
                            TradingType = rw["TradingType"].ToString(),
                            TradeName = rw["ParentTrade"].ToString(),
                            BidType = rw["BidType"].ToString(),
                            InvestedAmount = Convert.ToDouble(rw["InvestedAmount"]),
                            TargetPrice = Convert.ToDouble(rw["TargetPrice"]),
                            MarkeetPrice = Convert.ToDouble(rw["MarkeetPrice"]),
                            ExpiryTime =Convert.ToDateTime(rw["ExpiryTime"]).ToString("HH:mm:ss"),
                            CountingTime = rw["Counter"].ToString(),
                            //CountingTime = (Convert.ToDateTime(rw["ExpiryTime"]) - DateTime.Parse(time1)).ToString(),
                        });
                    }
                 
                }
                else
                {
                    objList = null;
                }
                return objList;

            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
        /// <summary>
        /// GetTradeHistoryData
        /// </summary>
        /// <param name="objBO">objBO</param>
        /// <returns>Data about Trading History </returns>

        public List<TradeBO> GetTradeHistoryData(TradeBO objBO)
        {
            try
            {
                DataTable objDataTable = new TradeDA().GetTradeHistoryData(objBO);
                List<TradeBO> objList = new List<TradeBO>();
                if (objDataTable.Rows.Count > 0)
                {
                    foreach (DataRow rw in objDataTable.Rows)
                    {
                        objList.Add(new TradeBO
                        {
                            AssetId = (Guid)(rw["AssetId"]),
                            TradingType = (rw["TraddingType"]).ToString(),
                            BidType = (rw["BidType"]).ToString(),
                            Asset = (rw["AssetName"]).ToString(),
                            InvestedAmount = Convert.ToDouble(rw["InvestedAmount"]),
                            TradeTime = Convert.ToDateTime(rw["TradeTime"]).ToString("d/M/yy HH:mm:ss"),
                            Payout = rw["Payout"].ToString(),
                            ExpiryTime = Convert.ToDateTime(rw["ExpiryTime"]).ToString("d/M/yy HH:mm:ss"),
                            TargetPrice = Convert.ToDouble(rw["TargetPrice"]),
                            MarkeetPrice = Convert.ToDouble(rw["ExpiryPrice"]),
                            ExpiryType = (rw["ExpiryType"]).ToString(),
                            ReturnAmount = Convert.ToDouble(rw["ReturnAmount"]),
                        });
                    }
                }
                else
                {
                    objList = null;
                }
                return objList;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }

}
