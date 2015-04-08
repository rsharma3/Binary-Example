using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BinaryOptionBO.Admin.Common;
using BinaryOptionBL.Admin.Common;
using BinaryOptionBL.Admin;
using BinaryOptionBO.Admin;

namespace BinaryOption.WebServices
{
    /// <summary>
    /// Summary description for Forex
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]

    public class Forex : System.Web.Services.WebService
    {
        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 1-Dec-2014
        /// Purpose : To get Trading Type
        /// </summary>
        /// <param name="parentId"></param>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        public List<TradingTypeBO> GetTradingType(string ParentId)
        {
            List<TradingTypeBO> lstTradingTypeBO = new List<TradingTypeBO>();
            try
            {
                TradingTypeBO objTradingTypeBO = new TradingTypeBO();
                Int32? Id = null;
                if (!(ParentId.ToUpper() == "NULL"))
                {
                    Id = Convert.ToInt32(ParentId);
                }

                objTradingTypeBO.ParentId = Id;
                lstTradingTypeBO = new TradingTypeBL().GetTradingType(objTradingTypeBO);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return lstTradingTypeBO;
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 1-Dec-2014
        /// Purpose : To Active/InActive Asset
        /// </summary>
        /// <param name="assetId"></param>
        /// <param name="isActive"></param>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        public string ActiveInactiveAsset(string assetId)
        {
            string strResult = string.Empty;
            try
            {
                var myGuid = new Guid();
                if (Guid.TryParse(assetId, out myGuid))
                {
                    // Parsed OK
                }

                // 1 for success
                strResult = new ForexBL().ActiveInactiveAsset(myGuid);
                if(strResult=="1")
                {
                    strResult = "Update";
                }
                else
                {
                    strResult = "NoUpdate";
                }
            }
            catch (Exception ex)
            {
                strResult = "5"; // Exception
            }
            return strResult;
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 1-Dec-2014
        /// Purpose : To Get Data By tradingTypeId
        /// </summary>
        /// <param name="tradingTypeId"></param>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        public List<ForexBO> GetGridDataByTradingType(string assetTypeId, string tradingTypeId, string pageNumber, string pageSize, string sort, string searchText)
        {
            try
            {
                if (string.IsNullOrEmpty(pageNumber))
                    pageNumber = "0";

                if (string.IsNullOrEmpty(pageSize))
                    pageSize = "0";

                List<ForexBO> lstForexBO = new ForexBL().GetGridDataByTradingType(Convert.ToInt32(assetTypeId), Convert.ToInt32(tradingTypeId), Convert.ToInt32(pageNumber), Convert.ToInt32(pageSize), sort, searchText);
                return lstForexBO;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 2-Dec-2014
        /// Purpose : To Update Asset Detail
        /// </summary>
        /// <param name="objForexBO"></param>
        /// <returns></returns>
        [WebMethod(EnableSession = true)]
        public string UpdateAssetDetail(string assetDetailId, string payout, string price)
        {
            string strResult = string.Empty;
            try
            {
                ForexBO objForexBO = new ForexBO();
                objForexBO.AssetDetailId = Convert.ToInt32(assetDetailId);
                objForexBO.Payout = Convert.ToInt32(payout);
                objForexBO.Price =Convert.ToDouble(price);
                //double upper_Limit = 0.0;
                //if (upperLimit != "")
                //    objForexBO.UpperLimit = float.Parse(upperLimit);
                //else
                //    objForexBO.UpperLimit = (float)upper_Limit;

                // 1 for success
                strResult = new ForexBL().UpdateAssetDetail(objForexBO);
            }
            catch (Exception ex)
            {
                strResult = "5"; // Exception
            }
            return strResult;
        }
    }
}
