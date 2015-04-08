using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using BinaryOptionDA.Common;
using BinaryOptionBO.User;

namespace BinaryOptionDA.User
{
    public class TradeDA : Connect
    {
        /// <summary>
        /// GetGridDataByTradingTypeID
        /// </summary>
        /// <param name="tradingTypeId">tradingTypeId</param>
        /// <param name="assetTypeId">assetTypeId</param>
        /// <param name="UserId">UserId</param>
        /// <returns>data for trading grid</returns>
        public DataTable GetGridDataByTradingTypeID(int tradingTypeId, int assetTypeId, Guid UserId)
        {
            DataTable objDataTable = new DataTable();
            try
            {
                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "SpGetCurrencyRates";
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@tradeType", tradingTypeId);
                sqlCommand.Parameters.AddWithValue("@AssetType", assetTypeId);
                sqlCommand.Parameters.AddWithValue("@UserId", UserId);
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
        /// GetGraphFeed
        /// </summary>
        /// <param name="assetId">assetId</param>
        /// <returns>data for graph</returns>
        public DataTable GetGraphFeed(TradeBO objBO)
        {
            DataTable objDataTable = new DataTable();
            try
            {
                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "Sp_GetGraphNewFeed";
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlCommand.Parameters.AddWithValue("@AssetId", objBO.AssetId);
                sqlCommand.Parameters.AddWithValue("@TradingTypeID", objBO.TradingTypeId);
                sqlCommand.Parameters.AddWithValue("@GraphType", objBO.GraphType);
                sqlCommand.Parameters.AddWithValue("@GraphTime", DateTime.Now);
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
        /// CustomGridData
        /// </summary>
        /// <param name="UserId">UserId</param>
        /// <returns>Custom trade data on setting click</returns>
        public DataSet CustomGridData(Guid UserId)
        {
            DataSet ds = new DataSet();
            try
            {
                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "Sp_GetCustomFilter";
                sqlCommand.Parameters.AddWithValue("@UserId", UserId);
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlDataAdapter = new SqlDataAdapter(sqlCommand);
                sqlDataAdapter.Fill(ds);
                sqlConnection.Close();
                return ds;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        /// <summary>
        /// InsertCustomGrid
        /// </summary>
        /// <param name="userId">userId</param>
        /// <param name="assetId">assetId</param>
        /// <returns>Insert Data of Custom Trade </returns>
        public DataTable InsertCustomGrid(Guid userId, string assetId)
        {
            DataTable dt = new DataTable();
            try
            {
                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "Usp_InsertUpdate";
                sqlCommand.Parameters.AddWithValue("@UserId", userId);
                if (assetId == null)
                {
                    sqlCommand.Parameters.AddWithValue("@AssetId", new Guid());
                }
                else{
                     sqlCommand.Parameters.AddWithValue("@AssetId", assetId);
                }
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlDataAdapter = new SqlDataAdapter(sqlCommand);
                sqlDataAdapter.Fill(dt);
                sqlConnection.Close();
                return dt;
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
        /// <param name="TradeTime">TradeTime</param>
        /// <returns>Place Bid</returns>
        public DataTable InsertBidData(TradeBO objBO,string TradeTime)
        {
            DataTable dt = new DataTable();
            try
            {
                
                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "sp_InsertBet";
                sqlCommand.Parameters.AddWithValue("@TradingTypeId ", objBO.TradingTypeId);
                sqlCommand.Parameters.AddWithValue("@BidType ", objBO.BidType);
                sqlCommand.Parameters.AddWithValue("@AssestId ", objBO.AssetId);
                sqlCommand.Parameters.AddWithValue("@InvestedAmount ", objBO.InvestedAmount);
                //sqlCommand.Parameters.AddWithValue("@TargetPrice ", objBO.TargetPrice);
                sqlCommand.Parameters.AddWithValue("@TraddingTime ", Convert.ToDateTime(TradeTime));
                sqlCommand.Parameters.AddWithValue("@ExpiryTime ", Convert.ToDateTime(objBO.ExpiryTime));
                sqlCommand.Parameters.AddWithValue("@UserId ", objBO.UserId);
                 
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlDataAdapter = new SqlDataAdapter(sqlCommand);
                sqlDataAdapter.Fill(dt);
                sqlConnection.Close();
                return dt;
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
        /// <returns>Data for Current Bid</returns>
        public DataTable GetOpenTradeData(TradeBO objBO)
        {
            DataTable dt = new DataTable();
            try
            {

                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "Usp_GetOpenTradeHistory";
                sqlCommand.Parameters.AddWithValue("@UserId ", objBO.UserId);
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlDataAdapter = new SqlDataAdapter(sqlCommand);
                sqlDataAdapter.Fill(dt);
                sqlConnection.Close();
                return dt;
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
        /// <returns>get Data for Tradding History</returns>
        public DataTable GetTradeHistoryData(TradeBO objBO)
        {
            DataTable dt = new DataTable();
            try
            {

                sqlConnection.Open();
                sqlCommand = new SqlCommand();
                sqlCommand.Connection = sqlConnection;
                sqlCommand.CommandText = "Usp_GetTradeHidtory";
                sqlCommand.Parameters.AddWithValue("@UserId ", objBO.UserId);
                sqlCommand.CommandType = CommandType.StoredProcedure;
                sqlDataAdapter = new SqlDataAdapter(sqlCommand);
                sqlDataAdapter.Fill(dt);
                sqlConnection.Close();
                return dt;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

    }
}
