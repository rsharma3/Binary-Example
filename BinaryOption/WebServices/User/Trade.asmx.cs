using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BinaryOptionBO.User;
using BinaryOptionBL.User;

namespace BinaryOption.WebServices.User
{
    /// <summary>
    /// Summary description for Trade
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class Trade :UserLogin
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }

        [WebMethod(EnableSession = true)]
        public List<TradeBO> GetGridDataByTradingTypeID(string tradingTypeId, string assetTypeId)
        {
            try
            {
                UserLoginBO objUserLoginBO = new UserLoginBO();
                TradeBO objBO = new TradeBO();
                objUserLoginBO = HttpContext.Current.Session["UserDetails"] as UserLoginBO;
                if (objUserLoginBO == null)
                {
                    objBO.UserId = new Guid();
                }
                else
                {
                    objBO.UserId = (Guid)objUserLoginBO.UserId;
                }
                List<TradeBO> lstTradeBO = new TradeBL().GetGridDataByTradingTypeID(Convert.ToInt32(tradingTypeId), Convert.ToInt32(assetTypeId), objBO.UserId);
                return lstTradeBO;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [WebMethod(EnableSession = true)]
        public List<TradeBO> GetGraphFeed(string assetId, Int32 tradeId,Int32 graphType)
        {
            try
            {
                var myGuid = new Guid();
                if (Guid.TryParse(assetId, out myGuid))
                {
                    // Parsed OK
                }
                TradeBO objBO = new TradeBO();
                objBO.AssetId = myGuid;
                objBO.TradingTypeId = tradeId;
                objBO.GraphType = graphType;
                List<TradeBO> lstTradeBO = new TradeBL().GetGraphFeed(objBO);
                return lstTradeBO;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [WebMethod(EnableSession = true)]
        public List<TradingType> CustomGridData()
        {
            try
            {
                List<TradingType> lstobj = new List<TradingType>();
                UserLoginBO objUserLoginBO = new UserLoginBO();
                TradeBO objBO = new TradeBO();
                objUserLoginBO = HttpContext.Current.Session["UserDetails"] as UserLoginBO;
                if (objUserLoginBO == null)
                {
                    objBO.UserId = new Guid();
                }
                else
                {
                    objBO.UserId = (Guid)objUserLoginBO.UserId;
                }

                lstobj = new TradeBL().CustomGridData(objBO.UserId);
                return lstobj;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
        [WebMethod(EnableSession = true)]
        public string InsertCustomGrid(string assetId)
        {
            string result = "";
            try
            {
                UserLoginBO objUserLoginBO = new UserLoginBO();
                TradeBO objBO = new TradeBO();
                objUserLoginBO = HttpContext.Current.Session["UserDetails"] as UserLoginBO;
                objBO.UserId = (Guid)objUserLoginBO.UserId;
                if (assetId != "")
                {
                    assetId = assetId.Remove(assetId.Length - 1, 1);
                }
                else
                {
                    assetId = null;
                }
                result = new TradeBL().InsertCustomGrid(objBO, assetId);
                return result;
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        [WebMethod(EnableSession = true)]
        public string InsertBidData(string tradingTypeId, string bidType, string assestId, string investedAmount, string exTime)
        {
            string result = "";
            UserLoginBO objLoginBo = CheckUserActiveOrNotSession();
            if(objLoginBo.Isactive==true){
                result ="1";
            }
            else
            {
                result = "-1";  
            }
            try
            {
                if (result == "1")
                {
                    int ExTime;
                    var massestId = new Guid();
                    if (Guid.TryParse(assestId, out massestId))
                    {
                        // Parsed OK
                    }
                    var sec = exTime.Split(' ');
                    if (sec[1].ToLower() == "seconds")
                    {
                        ExTime = Convert.ToInt32(sec[0]);
                    }
                    else
                    {
                        ExTime = Convert.ToInt32(sec[0]) * 60;
                    }
                    TradeBO objBO = new TradeBO();
                    UserLoginBO objUserLoginBO = new UserLoginBO();
                    objUserLoginBO = HttpContext.Current.Session["UserDetails"] as UserLoginBO;
                    objBO.UserId = (Guid)objUserLoginBO.UserId;
                    objBO.TradingTypeId = Convert.ToInt32(tradingTypeId);
                    objBO.BidType = bidType;
                    objBO.AssetId = massestId;
                    objBO.InvestedAmount = Convert.ToDouble(investedAmount);
                    // objBO.TargetPrice = Convert.ToDouble(targetPrice);


                    string serverDateTime = DateTime.Now.ToString("M d yy HH:mm:ss");
                    DateTime Exptime = Convert.ToDateTime(serverDateTime).AddSeconds(Convert.ToDouble(ExTime));
                    //var TradeTime = serverDateTime.ToString("M/d/yy HH:mm:ss");
                    objBO.ExpiryTime = Exptime.ToString("HH:mm:ss");
                    result = new TradeBL().InsertBidData(objBO, serverDateTime);
                    return result;
                }
                else
                {
                    return result;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }


        [WebMethod(EnableSession = true)]
        public List<TradeBO> GetOpenTradeData()
        {

            try
            {
                TradeBO objBO = new TradeBO();
                List<TradeBO> objList = new List<TradeBO>();
                UserLoginBO objUserLoginBO = new UserLoginBO();
                objUserLoginBO = HttpContext.Current.Session["UserDetails"] as UserLoginBO;
                if (objUserLoginBO != null)
                {
                    objBO.UserId = (Guid)objUserLoginBO.UserId;
                    objList = new TradeBL().GetOpenTradeData(objBO);
                    return objList;
                }
                else
                {
                    objList = null;
                    return objList;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }

        }

        [WebMethod(EnableSession = true)]
        public List<TradeBO> GetTradeHistoryData()
        {

            try
            {
                TradeBO objBO = new TradeBO();
                List<TradeBO> objList = new List<TradeBO>();
                UserLoginBO objUserLoginBO = new UserLoginBO();
                objUserLoginBO = HttpContext.Current.Session["UserDetails"] as UserLoginBO;
                if (objUserLoginBO != null)
                {
                    objBO.UserId = (Guid)objUserLoginBO.UserId;
                    objList = new TradeBL().GetTradeHistoryData(objBO);
                    return objList;
                }
                else
                {
                    objList = null;
                    return objList;
                }





            }
            catch (Exception ex)
            {
                throw ex;
            }

        }
    }
}
