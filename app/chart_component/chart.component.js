System.register(['angular2/core', '../chart_service/chart.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, chart_service_1;
    var ChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chart_service_1_1) {
                chart_service_1 = chart_service_1_1;
            }],
        execute: function() {
            ChartComponent = (function () {
                function ChartComponent(chartService) {
                    this.chartService = chartService;
                    this.chartSeries = [];
                }
                ;
                ChartComponent.prototype.ngOnInit = function () {
                    this.ciq = new CIQ.ChartEngine({ container: $$$("#chartContainer") });
                    this.ciq.setPeriodicityV2(1, 5);
                    this.chartService.attachQuoteFeed(this.ciq);
                    this.ciq.newChart("IBM");
                };
                ChartComponent.prototype.getLayout = function () {
                    return this.ciq.layout;
                };
                ChartComponent.prototype.removeSeries = function (series) {
                    var index = this.chartSeries.indexOf(series, 0);
                    if (index > -1) {
                        this.chartSeries.splice(index, 1);
                    }
                    this.ciq.removeSeries(series.display, this.ciq.ciq);
                };
                ChartComponent = __decorate([
                    core_1.Component({
                        selector: 'chart',
                        styleUrls: ['app/chart_component/chart.component.css'],
                        templateUrl: 'app/chart_component/chart.component.html',
                        providers: [chart_service_1.ChartService]
                    }), 
                    __metadata('design:paramtypes', [chart_service_1.ChartService])
                ], ChartComponent);
                return ChartComponent;
            }());
            exports_1("ChartComponent", ChartComponent);
        }
    }
});
//# sourceMappingURL=chart.component.js.map