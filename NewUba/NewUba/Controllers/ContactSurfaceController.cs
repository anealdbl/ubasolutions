using NewUba.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using Umbraco.Web.Mvc;

namespace NewUba.Controllers
{
    public class ContactSurfaceController : SurfaceController
    {
        public ActionResult ShowForm()
        {
            return PartialView("contactForm", new ContactModel());
        }

        public ActionResult HandleFormPost(ContactModel model)
        {
            return RedirectToCurrentUmbracoPage();
        }
      [HttpPost]
        public ActionResult FormData(ContactModel model)
        {
           // 

            try
            {
                //if (ModelState.IsValid)
                //{
                //    var body = "<p>Email From: {0} {1} ({2})</p><p>Message:</p><p>{3}</p>";
                //    var mailMessage = new MailMessage();
                //    mailMessage.Subject = model.Subject;
                //    mailMessage.Body = string.Format(body, model.FirstName, model.LastName, model.Email, model.Message);
                //    mailMessage.IsBodyHtml = true;
                //    mailMessage.From = (new MailAddress(model.Email));
                //    mailMessage.To.Add(new MailAddress("ravishresthaubatest@gmail.com"));

                //    SmtpClient smtpClient = new SmtpClient();
                //    smtpClient.Send(mailMessage);
                //}
            }
            catch (Exception)
            {

                throw;
            }
            return View();
        }

    }
}