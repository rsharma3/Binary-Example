using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BinaryOptionBO.Admin.Common;
using BinaryOptionDA.Admin.Common;
using System.Data;

namespace BinaryOptionBL.Admin.Common
{
    public class TradingTypeBL
    {
        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 1-Dec-2014
        /// Purpose : To get Trading Type
        /// </summary>
        /// <param name="objTradingTypeBO"></param>
        /// <returns></returns>
        public List<TradingTypeBO> GetTradingType(TradingTypeBO objTradingTypeBO)
        {
            DataTable objDataTable = new TradingTypeDA().GetTradingType(objTradingTypeBO);
            List<TradingTypeBO> lstTradingTypeBO = new List<TradingTypeBO>();
            if (objDataTable.Rows.Count > 0)
            {
                foreach (DataRow Row in objDataTable.Rows)
                {
                    TradingTypeBO obTradingTypeBO = new TradingTypeBO();
                    obTradingTypeBO.Id = (Convert.ToInt32(Row["Id"]));
                    obTradingTypeBO.TradingType = (Convert.ToString(Row["TradingType"]));
                    obTradingTypeBO.ParentId = Row["ParentId"] == DBNull.Value ? 0 : Convert.ToInt32(Row["ParentId"]);
                    obTradingTypeBO.IsActive = (Convert.ToBoolean(Row["IsActive"]));
                    lstTradingTypeBO.Add(obTradingTypeBO);
                }
            }
            else
            {
                lstTradingTypeBO = null;
            }
            return lstTradingTypeBO;
        }
    }
}
