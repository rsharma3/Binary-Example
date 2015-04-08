using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using BinaryOptionBO.Admin;

namespace BinaryOption.Admin
{
    public partial class ChangePassword : System.Web.UI.Page
    {
        public String _sitePath = "";
        protected void Page_Load(object sender, EventArgs e)
        {
            _sitePath = System.Configuration.ConfigurationManager.AppSettings["SitePath"].ToString();
            hdnSitePath.Value = _sitePath;

            ////LoginBO objLoginBO = (LoginBO)HttpContext.Current.Session["UserName"];
            //if (Session["UserId"] != null && Session["UserName"] != null)
            //{
            //_SitePath = System.Configuration.ConfigurationManager.AppSettings["SitePath"].ToString();
            //    if (!IsPostBack)
            //    {

            //    }
            //}
            //else
            //{
            //    Response.Redirect("~/Admin/UserLogin.aspx");
            //}
        }
    }
}