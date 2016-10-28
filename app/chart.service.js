System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ChartService;
    return {
        setters:[],
        execute: function() {
            ChartService = (function () {
                function ChartService() {
                }
                ChartService.prototype.attachQuoteFeed = function (chart) {
                    chart.attachQuoteFeed(new STX.QuoteFeed.Demo(), { refreshInterval: 1 });
                };
                return ChartService;
            }());
            exports_1("ChartService", ChartService);
        }
    }
});
//# sourceMappingURL=chart.service.js.map