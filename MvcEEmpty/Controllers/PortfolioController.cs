using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcEEmpty.Controllers
{
    public class PortfolioController : Controller
    {
        // GET: Portfolio
        public ActionResult HtmlSkills()
        {
            return View();
        }
        public ActionResult CSharpSkills()
        {
            return View();
        }
    }
}