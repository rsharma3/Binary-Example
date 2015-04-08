using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BinaryOptionDA.Common;
using System.Data;
using System.Data.SqlClient;
using BinaryOptionBO.Admin;

namespace BinaryOptionDA.Admin
{
    public class ForexDA : Connect
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
            string strResult = string.Empty;
            DataTable objDataTable = new DataTable();
            try
            {
                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "Sp_AssetActiveInActive";
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@Id", assetId);
                sqlDataAdapter = new SqlDataAdapter(sqlCommand);
                sqlDataAdapter.Fill(objDataTable);
                foreach (DataRow Row in objDataTable.Rows)
                {
                    strResult = (Convert.ToString(Row["Result"]));
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                sqlDataAdapter.Dispose();
                sqlCommand.Dispose();
                sqlConnection.Close();
                sqlConnection.Dispose();
            }
            return strResult;
        }

        /// <summary>
        /// Created By : Satish Verma
        /// Created Date : 1-Dec-2014
        /// Purpose : To Get Asset Data
        /// </summary>
        /// <param name="tradingTypeId"></param>
        /// <returns></returns>
        public DataTable GetGridDataByTradingType(int assetTypeId, int? tradingTypeId, int pageNumber, int pageSize, string sort, string searchText)
        {
            DataTable objDataTable = new DataTable();
            try
            {
                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "Sp_GetAssetDataByTradingType";
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@AssetTypeId", assetTypeId);
                if(tradingTypeId==0)
                {
                    tradingTypeId = null;
                }
                sqlCommand.Parameters.AddWithValue("@TradingTypeId", tradingTypeId);
                sqlCommand.Parameters.AddWithValue("@PageNumber", pageNumber);
                sqlCommand.Parameters.AddWithValue("@PageSize", pageSize);
                sqlCommand.Parameters.AddWithValue("@Sort", sort);
                sqlCommand.Parameters.AddWithValue("@SearchText", searchText);
                sqlDataAdapter = new SqlDataAdapter(sqlCommand);
                sqlDataAdapter.Fill(objDataTable);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                sqlDataAdapter.Dispose();
                sqlCommand.Dispose();
                sqlConnection.Close();
                sqlConnection.Dispose();
            }
            return objDataTable;
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
            string strResult = string.Empty;
            DataTable objDataTable = new DataTable();
            try
            {
                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "Sp_UpdateAssetDetails";
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@AssetDetailId", objForexBO.AssetDetailId);
                sqlCommand.Parameters.AddWithValue("@Payout", objForexBO.Payout);
                sqlCommand.Parameters.AddWithValue("@Price", objForexBO.Price);
                sqlDataAdapter = new SqlDataAdapter(sqlCommand);
                sqlDataAdapter.Fill(objDataTable);
                foreach (DataRow Row in objDataTable.Rows)
                {
                    strResult = (Convert.ToString(Row["Result"]));
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                sqlDataAdapter.Dispose();
                sqlCommand.Dispose();
                sqlConnection.Close();
                sqlConnection.Dispose();
            }
            return strResult;
        }
    }
}
