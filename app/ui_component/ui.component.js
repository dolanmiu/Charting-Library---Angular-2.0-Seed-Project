System.register(['angular2/core', '../chart_component/chart.component'], function(exports_1, context_1) {
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
    var core_1, chart_component_1;
    var ChartUI;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chart_component_1_1) {
                chart_component_1 = chart_component_1_1;
            }],
        execute: function() {
            ChartUI = (function () {
                function ChartUI() {
                    this.periodicityOptions = [
                        {
                            period: 1,
                            interval: 1,
                            label: '1 Min',
                        },
                        {
                            period: 1,
                            interval: 3,
                            label: '3 Min',
                        },
                        {
                            period: 1,
                            interval: 5,
                            label: '5 Min',
                        },
                        {
                            period: 1,
                            interval: 10,
                            label: '10 Min',
                        },
                        {
                            period: 3,
                            interval: 5,
                            label: '15 Min',
                        },
                        {
                            period: 1,
                            interval: 30,
                            label: '30 Min',
                        },
                        {
                            period: 2,
                            interval: 30,
                            label: '1 Hour',
                        },
                        {
                            period: 8,
                            interval: 30,
                            label: '4 Hour',
                        },
                        {
                            period: 1,
                            interval: 'day',
                            label: '1 Day',
                        },
                        {
                            period: 2,
                            interval: 'day',
                            label: '2 Day',
                        },
                        {
                            period: 3,
                            interval: 'day',
                            label: '3 Day',
                        },
                        {
                            period: 5,
                            interval: 'day',
                            label: '5 Day',
                        },
                        {
                            period: 10,
                            interval: 'day',
                            label: '10 Day',
                        },
                        {
                            period: 20,
                            interval: 'day',
                            label: '20 Day',
                        },
                        {
                            period: 1,
                            interval: 'week',
                            label: '1 Wk',
                        },
                        {
                            period: 1,
                            interval: 'month',
                            label: '1 Mon',
                        }
                    ];
                }
                ChartUI.prototype.changeSymbol = function () {
                    this.chartComponent.chart.newChart(this.symbolInput, this.chartComponent.sampleData);
                    this.symbolInput = '';
                };
                ChartUI.prototype.changePeriodicity = function () {
                    this.chartComponent.chart.setPeriodicityV2(this.selectedPeriodicityOption[0].period, this.selectedPeriodicityOption[0].interval);
                };
                __decorate([
                    core_1.ViewChild(chart_component_1.ChartComponent), 
                    __metadata('design:type', chart_component_1.ChartComponent)
                ], ChartUI.prototype, "chartComponent", void 0);
                ChartUI = __decorate([
                    core_1.Component({
                        selector: 'chart-ui',
                        styleUrls: ['app/ui_component/ui.component.css'],
                        templateUrl: 'app/ui_component/ui.component.html',
                        directives: [chart_component_1.ChartComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ChartUI);
                return ChartUI;
            }());
            exports_1("ChartUI", ChartUI);
        }
    }
});
//# sourceMappingURL=ui.component.js.map