using System.Web;
using System.Web.Optimization;

namespace MT.Web
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"
                        ));

            bundles.Add(new ScriptBundle("~/bundles/app").Include(
                        "~/Scripts/angular.min.js",
                        "~/Scripts/angular-route.min.js",
                        "~/app/app.js",                        
                        "~/app/mentor/*.js",
                        "~/app/mentor/add/*.js",
                        "~/app/mentor/details/*.js",
                        "~/app/mentor/list/*.js",
                        "~/app/trainee/*.js",
                        "~/app/trainee/add/*.js",
                        "~/app/trainee/details/*.js",
                        "~/app/trainee/list/*.js"
                        ));


        }
    }
}
