﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BinaryOption.User
{
    public partial class Use : System.Web.UI.MasterPage
    {
        public String _sitePath = string.Empty;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                _sitePath = System.Configuration.ConfigurationManager.AppSettings["SitePath"].ToString();
                hdnSitePath.Value = _sitePath;
            }


        }
    }
}