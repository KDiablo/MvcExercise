using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcEEmpty.Controllers
{
    public class TestController : Controller
    {
        // GET: Test
        public ActionResult TestTemplate()
        {
            return View();
        }
    }
}