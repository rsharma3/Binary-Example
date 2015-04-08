using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using System.Configuration;


namespace BinaryOptionDA.Common
{
    public class Connect
    {
        /// <summary>
        /// SqlConnection object accessible through derived class only not further
        /// </summary>
        protected SqlConnection sqlConnection = new SqlConnection();

        /// <summary>
        /// SqlCommand instance accessible through derived class only not further
        /// </summary>
        protected SqlCommand sqlCommand;

        /// <summary>
        /// SqlDataAdapter instance accessible through derived class only not further
        /// </summary>
        protected SqlDataAdapter sqlDataAdapter;

        /// <summary>
        /// SqlParameter instance accessible through derived class only not further
        /// </summary>
        protected SqlParameter[] sqlParameter;

        /// <summary>
        /// Connect Constructor Returns SqlConnection Object
        /// </summary>
        public Connect()
        {
            sqlConnection = new SqlConnection(ConfigurationManager.AppSettings["Connection"]);
        }

    }
}
