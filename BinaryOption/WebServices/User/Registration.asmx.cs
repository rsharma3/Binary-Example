using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Data;
using System.Web.Services;
using BinaryOptionBO.User;
using BinaryOptionBL.User;

namespace BinaryOption.WebServices.User
{
    /// <summary>
    /// Summary description for Registration
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class Registration : System.Web.Services.WebService
    {

        [WebMethod(EnableSession = true)]
        public List<CountryBO> GetCountry()
        {
            RegistrationBL objRegistrationBL = new RegistrationBL();
            List<CountryBO> objlstCountries = new List<CountryBO>();
            try
            {

                return objRegistrationBL.GetCountry();

            }
            catch (Exception ex)
            {
                throw ex;
            }
        }




        [WebMethod(EnableSession = true)]
        public string UserRegistration(string userName, string transPassword, string email, string firstName, string lastName, string title, string countryId, string phone, string dob, string isSubscribed)
        {
            try
            {
                RegistrationBL objRegistrationBL = new RegistrationBL();

                RegistrationBO objRegistrationBO = new RegistrationBO();
                objRegistrationBO.UserName = userName;
                objRegistrationBO.TransactionPassword = transPassword;
                objRegistrationBO.Email = email;
                objRegistrationBO.FirstName = firstName;
                objRegistrationBO.LastName = lastName;
                objRegistrationBO.Title = title;
                objRegistrationBO.CountryId = countryId;
                objRegistrationBO.Phone = phone;
                objRegistrationBO.DOB = dob;
                objRegistrationBO.isSubscribed = isSubscribed;

                return objRegistrationBL.Registration(objRegistrationBO);
            }
            catch (Exception ex)
            {
                HttpContext.Current.Session["Exception"] = ex;
                HttpContext.Current.Session["ExcSource"] = System.Web.HttpContext.Current.Request.Url.AbsolutePath;
                throw ex;
            }
            finally
            {
            }

        }







    }


}
