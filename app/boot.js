System.register(['angular2/platform/browser', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            // Configure requirejs. Otherwise the baseUrl would default to this directory
            // TODO change baseUrl to match where your ChartIQ js folder is located. This is how require.js knows where to start looking.
            require.config({
                baseUrl: 'chartiq_library/js/',
            });
            // Define the AMD module for the library
            // ['chartiq'] refers to chartiq.js in the ChartIQ library. Requiring this file kicks off require.js and grabs everything that is needed from the library.
            define('chartIQ', ['chartiq'], function (chartiq) {
                for (var key in chartiq) {
                    window[key] = chartiq[key];
                }
                return chartiq;
            });
            //Bootstrap the app after the required library is loaded
            require(['chartIQ'], function () {
                browser_1.bootstrap(app_component_1.AppComponent);
            });
        }
    }
});
//# sourceMappingURL=boot.js.map