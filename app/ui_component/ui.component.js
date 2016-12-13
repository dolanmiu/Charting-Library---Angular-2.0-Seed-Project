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
                function ChartUI(zone) {
                    this.zone = zone;
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
                    this.chartTypes = [
                        {
                            type: 'bar',
                            label: 'bar',
                        },
                        {
                            type: 'candle',
                            label: 'candle',
                        },
                        {
                            type: 'colored_bar',
                            label: 'colored bar',
                        },
                        {
                            type: 'hollow_candle',
                            label: 'hollow candle',
                        },
                        {
                            type: 'line',
                            label: 'line',
                        },
                        {
                            type: 'mountain',
                            label: 'mountain',
                        },
                        {
                            type: 'volume_candle',
                            label: 'volume candle',
                        },
                        {
                            type: 'heikinashi',
                            label: 'Heikin-Ashi',
                        },
                        {
                            type: 'kagi',
                            label: 'kagi',
                            aggregationEdit: {
                                title: 'Set Reversal Percentage',
                                inputs: [
                                    {
                                        lookup: 'kagi',
                                        label: 'kagi',
                                    }
                                ]
                            }
                        },
                        {
                            type: 'linebreak',
                            label: 'line break',
                            aggregationEdit: {
                                title: 'Set Price Lines',
                                inputs: [
                                    {
                                        lookup: 'priceLines',
                                        label: 'price line'
                                    }
                                ]
                            }
                        },
                        {
                            type: 'renko',
                            label: 'renko',
                            aggregationEdit: {
                                title: 'Set Range',
                                inputs: [
                                    {
                                        lookup: 'renko',
                                        label: 'renko'
                                    }
                                ]
                            }
                        },
                        {
                            type: 'rangebars',
                            label: 'range bars',
                            aggregationEdit: {
                                title: 'Set Range',
                                inputs: [
                                    {
                                        lookup: 'range',
                                        label: 'range'
                                    }
                                ]
                            }
                        },
                        {
                            type: 'pandf',
                            label: 'point & figure',
                            aggregationEdit: {
                                title: 'Set Point & Figure Parameters',
                                inputs: [
                                    {
                                        lookup: 'pandf.box',
                                        label: 'box'
                                    },
                                    {
                                        lookup: 'pandf.reversal',
                                        label: 'reversal'
                                    }
                                ]
                            }
                        }
                    ];
                    console.log(this.chartComponent);
                    this.periodicity = "5 min";
                    this.chartType = "candle";
                }
                ChartUI.prototype.ngAfterViewChecked = function () {
                    this.chartLayout = this.getChartLayout();
                    //console.log(this.chartLayout);
                };
                ChartUI.prototype.changeSymbol = function () {
                    this.chartComponent.chart.newChart(this.symbolInput, this.chartComponent.sampleData);
                    this.symbolInput = '';
                };
                ChartUI.prototype.changePeriodicity = function (period, interval) {
                    var _this = this;
                    this.chartComponent.chart.setPeriodicityV2(period, interval);
                    var _loop_1 = function(i) {
                        if (this_1.periodicityOptions[i].interval == this_1.chartLayout.interval && this_1.periodicityOptions[i].period == this_1.chartLayout.periodicity) {
                            this_1.zone.run(function () { _this.periodicity = _this.periodicityOptions[i].label; });
                        }
                    };
                    var this_1 = this;
                    for (var i in this.periodicityOptions) {
                        _loop_1(i);
                    }
                };
                ChartUI.prototype.changeChartType = function (type) {
                    if ((type.aggregationEdit && this.chartComponent.chart.layout.aggregationType != type.type) || type.type == 'heikinashi') {
                        //ctrl.ciq.setChartType('candle');
                        this.chartComponent.chart.setAggregationType(type.type);
                    }
                    else {
                        this.chartComponent.chart.setChartType(type.type);
                    }
                    //update the ui
                    this.chartType = type.label;
                };
                ChartUI.prototype.getChartLayout = function () {
                    return this.chartComponent.getLayout();
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
                        directives: [chart_component_1.ChartComponent],
                        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                    }), 
                    __metadata('design:paramtypes', [core_1.NgZone])
                ], ChartUI);
                return ChartUI;
            }());
            exports_1("ChartUI", ChartUI);
        }
    }
});
//# sourceMappingURL=ui.component.js.map