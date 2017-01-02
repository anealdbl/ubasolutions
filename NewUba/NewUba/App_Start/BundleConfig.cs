using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;
using Umbraco.Core.Logging;

namespace Monotype.Com.Web.App_Start
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            //bundles.Add(new StyleBundle("~/Content/jpstyles.css")
            //   .Include("~/Content/Vendor/stylesheet/css/jp-style.css", new CssRewriteUrlTransform())
            //   .Include("~/css/Tiny Mce.css", new CssRewriteUrlTransform())
            //   .Include("~/Content/themes/jquery-ui.min.css"));


            bundles.Add(new ScriptBundle("~/Scripts/Site").Include( 
                "~/Scripts/jquery.validate.js",              
                   "~/Scripts/bootstrap.min.js",
                  "~/Content/javascript/countries.js",
                "~/Content/javascript/site.js"));
          
        }
    }
}