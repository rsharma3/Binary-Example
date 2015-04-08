using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BinaryOptionBO.User;
using BinaryOptionDA.User;
using System.Net.Mail;
using System.Data;

namespace BinaryOptionBL.User
{
    public class RegistrationBL
    {

        public List<CountryBO> GetCountry()
        {
            List<CountryBO> listCountryBO = new List<CountryBO>();
            DataTable dtCountry = new DataTable();
            RegistrationDA objRegistrationDA = new RegistrationDA();

            dtCountry = objRegistrationDA.GetCountry();
            if (dtCountry.Rows.Count > 0)
            {
                for (int index = 0; index < dtCountry.Rows.Count; index++)
                {
                    CountryBO objCountryBO = new CountryBO();
                    objCountryBO.Id = Convert.ToInt32(dtCountry.Rows[index]["id"]);
                    objCountryBO.Name = Convert.ToString(dtCountry.Rows[index]["Name"]);
                    objCountryBO.Code = Convert.ToString(dtCountry.Rows[index]["Code"]);

                    listCountryBO.Add(objCountryBO);
                }

                return listCountryBO;
            }
            else
            {
                listCountryBO = null;
                return listCountryBO;

            }


        }



        public string Registration(RegistrationBO objRegistrationBO)
        {
            try
            {
                RegistrationDA objRegistrationDA = new RegistrationDA();
                DataTable dtdetails = new DataTable();

                dtdetails = objRegistrationDA.Registration(objRegistrationBO);

                if (dtdetails.Rows.Count > 0)
                {
                    if (Convert.ToString(dtdetails.Rows[0]["Status"]) == "1")
                    {
                        SendMail(objRegistrationBO.Email, objRegistrationBO.UserName, Convert.ToString(dtdetails.Rows[0]["TranPass"]), Convert.ToString(dtdetails.Rows[0]["tradPass"]), Convert.ToString(dtdetails.Rows[0]["InvPassword"]));
                        return "1";
                    }
                    else
                    {
                        return Convert.ToString(dtdetails.Rows[0]["Status"]);
                    }
                }
                else
                {
                    return Convert.ToString(dtdetails.Rows[0]["Status"]);
                }
            }
            finally
            {

            }
        }

        private string SendMail(string Useremail, string userName, string transPassword, string tradePassword, string investPassword)
        {
            string strResult = string.Empty;
            try
            {
                MailMessage email = new MailMessage();
                email.To.Add(new MailAddress(Useremail));
                email.From = new MailAddress("lkumar@seasiainfotech.com");
                email.Subject = "Binary Options Account Registration";
                email.Body = "Hi " + userName + ",<br><br>We Welcome you in the Binary Option. Thanks for registering. <br><br> Your account details are as given :- <br /> User name : " + userName + "<br /> Your Transaction Password is: " + transPassword + "<br /> Your Trading Password is: " + tradePassword + "<br /> Your Investor Password is: " + investPassword + ".<br><br><br>Thanks || Regards<br><br> Team Binary Option";
                email.IsBodyHtml = true;
                System.Net.Mail.SmtpClient smtpc = new System.Net.Mail.SmtpClient();
                smtpc.Host = ("10.8.18.41");
                smtpc.Port = 25;
                smtpc.UseDefaultCredentials = false;
                smtpc.EnableSsl = false;
                smtpc.Credentials = new System.Net.NetworkCredential("lkumar@seasiainfotech.com", "mind@123");
                //System.Net.ServicePointManager.ServerCertificateValidationCallback = delegate(object s, System.Security.Cryptography.X509Certificates.X509Certificate certificate, System.Security.Cryptography.X509Certificates.X509Chain chain, System.Net.Security.SslPolicyErrors sslPolicyErrors) { return true; };
                smtpc.Send(email);
                strResult = "Sent";
            }
            catch (Exception ex)
            {
                strResult = "NotSent";
            }
            return strResult;
        }
    }
}
