﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BinaryOption.Admin
{
    public partial class Dashboard : System.Web.UI.Page
    {
        public String _sitePath = string.Empty;
        protected void Page_Load(object sender, EventArgs e)
        {
            Response.Cache.SetCacheability(HttpCacheability.NoCache);
            Response.Cache.SetExpires(DateTime.UtcNow.AddHours(-1));
            Response.Cache.SetNoStore();

            if (!Page.IsPostBack)
            {
                _sitePath = System.Configuration.ConfigurationManager.AppSettings["SitePath"].ToString();
                hdnSitePath.Value = _sitePath;
            }

        }
    }
}