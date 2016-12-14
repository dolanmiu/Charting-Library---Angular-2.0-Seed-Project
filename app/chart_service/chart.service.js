System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ChartService;
    return {
        setters:[],
        execute: function() {
            ChartService = (function () {
                function ChartService() {
                    // To implement your own quotefeed and see other methods of data loading, check out our tutorial: http://documentation.chartiq.com/tutorial-Data%20Loading.html
                    CIQ.QuoteFeed.MyFeed = function (url) {
                        this.url = url;
                    };
                    // Inherit from the base feed
                    CIQ.QuoteFeed.MyFeed.ciqInheritsFrom(CIQ.QuoteFeed);
                }
                ChartService.prototype.attachQuoteFeed = function (chart) {
                    chart.attachQuoteFeed(new CIQ.QuoteFeed.Demo(), { refreshInterval: 1 });
                };
                return ChartService;
            }());
            exports_1("ChartService", ChartService);
        }
    }
});
//# sourceMappingURL=chart.service.js.map