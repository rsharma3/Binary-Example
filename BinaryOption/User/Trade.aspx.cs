﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace BinaryOption.User
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        public String _sitePath = string.Empty;
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!Page.IsPostBack)
            {
                _sitePath = System.Configuration.ConfigurationManager.AppSettings["SitePath"].ToString();
                hdnSitePath.Value = _sitePath;
            }
        }
    }
}