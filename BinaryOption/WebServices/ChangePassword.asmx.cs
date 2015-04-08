using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Services;
using BinaryOptionBO.Admin;
using BinaryOptionBL.Admin;
using BinaryOptionBO;
using BinaryOptionBL.Common;
using System.Net.Mail;

namespace BinaryOption.WebServices
{
    /// <summary>
    /// Summary description for ChangePassword
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]      

    [System.Web.Script.Services.ScriptService]
    public class ChangePassword : System.Web.Services.WebService
    {
        
        [WebMethod(EnableSession = true)]
        public string ChangeUserPassword( string OldPassword, string NewPassword)
        {
            string strResult = string.Empty;
            string Email = string.Empty;
            try
            {
                ChangePasswordBL objChangePasswordBL = new ChangePasswordBL();
                ChangePasswordBO objChangePasswordBO = new ChangePasswordBO();
                 Guid Uid =new Guid();
                if (HttpContext.Current.Session != null)
                {
                    Uid = (Guid)HttpContext.Current.Session["UserId"];
                }
                objChangePasswordBO.Id = Uid;
                objChangePasswordBO.OldPassword = new MD5Secure().Encrypt(OldPassword);   //OldPassword;
                objChangePasswordBO.NewPassword = new MD5Secure().Encrypt(NewPassword);   //NewPassword;

                strResult = objChangePasswordBL.ChangePassword(objChangePasswordBO);
                Email = objChangePasswordBL.GetEmail(objChangePasswordBO);

                if (strResult == "1")
                {
                    if (Email != "")
                    {
                        SendMail(Email);
                    }
                }
                                
            }
            catch (Exception ex)
            {
                strResult = "0"; // Exception
            }
            return strResult;
        }

        private string SendMail(string Email)
        {
            string strResult = string.Empty;
            try
            {
                MailMessage email = new MailMessage();
                email.To.Add(new MailAddress(Email));
                email.From = new MailAddress("lkumar@seasiainfotech.com");
                email.Subject = "Change Password";
                email.Body = "Hi, Your password has been changed successfully .";
                email.IsBodyHtml = true;
                System.Net.Mail.SmtpClient smtpc = new System.Net.Mail.SmtpClient();
                smtpc.Host = ("10.8.18.41");
                smtpc.Port = 25;
                smtpc.UseDefaultCredentials = false;
                smtpc.EnableSsl = false;
                smtpc.Credentials = new System.Net.NetworkCredential("lkumar@seasiainfotech.com", "mind@123");                
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
