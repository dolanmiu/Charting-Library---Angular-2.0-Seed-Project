System.register(["angular2/core", "../chart_component/chart.component", "../study_dialog_component/study.dialog.component", "../theme_dialog_component/theme.dialog.component", "../timezone_dialog_component/timezone.dialog.component", "../colorpicker_component/colorpicker"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, chart_component_1, study_dialog_component_1, theme_dialog_component_1, timezone_dialog_component_1, colorpicker_1, ChartUI, _a;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (chart_component_1_1) {
                chart_component_1 = chart_component_1_1;
            },
            function (study_dialog_component_1_1) {
                study_dialog_component_1 = study_dialog_component_1_1;
            },
            function (theme_dialog_component_1_1) {
                theme_dialog_component_1 = theme_dialog_component_1_1;
            },
            function (timezone_dialog_component_1_1) {
                timezone_dialog_component_1 = timezone_dialog_component_1_1;
            },
            function (colorpicker_1_1) {
                colorpicker_1 = colorpicker_1_1;
            }
        ],
        execute: function () {
            ChartUI = (function () {
                function ChartUI(zone) {
                    this.zone = zone;
                    this.studies = {
                        list: Object.keys(CIQ.Studies.studyLibrary),
                        selectedOption: ''
                    };
                    this.themes = [{ "name": "Default",
                            "settings": // the default theme settings
                            { "chart": { "Axis Text": { "color": "rgba(102,102,102,1)" },
                                    "Background": { "color": "rgba(255,255,255,1)" },
                                    "Grid Dividers": { "color": "rgba(204,204,204,1)" },
                                    "Grid Lines": { "color": "rgba(239,239,239,1)" } },
                                "chartTypes": { "Candle/Bar": { "down": { "border": "rgba(0,0,0,1)", "color": "rgba(184,44,12,1)", "wick": "rgba(0,0,0,1)" },
                                        "up": { "border": "rgba(0,0,0,1)", "color": "rgba(140,193,118,1)", "wick": "rgba(0,0,0,1)" } },
                                    "Line": { "color": "rgba(0,0,0,1)" },
                                    "Mountain": { "color": "rgba(102,202,196,0.498039)" } } } },
                        { "name": "+ New Theme" }];
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
                    this.periodicity = "5 min";
                    this.chartType = "candle";
                }
                ChartUI.prototype.ngAfterViewChecked = function () {
                    this.chartLayout = this.getChartLayout();
                };
                ChartUI.prototype.changeSymbol = function () {
                    this.chartComponent.ciq.newChart(this.symbolInput, this.chartComponent.sampleData);
                    this.symbolInput = '';
                };
                ChartUI.prototype.changePeriodicity = function (period, interval) {
                    var _this = this;
                    this.chartComponent.ciq.setPeriodicityV2(period, interval);
                    for (var i in this.periodicityOptions) {
                        if (this.periodicityOptions[i].interval == this.chartLayout.interval && this.periodicityOptions[i].period == this.chartLayout.periodicity) {
                            this.zone.run(function () { _this.periodicity = _this.periodicityOptions[i].label; });
                        }
                    }
                };
                ChartUI.prototype.changeChartType = function (type) {
                    if ((type.aggregationEdit && this.chartComponent.ciq.layout.aggregationType != type.type) || type.type == 'heikinashi') {
                        //ctrl.ciq.setChartType('candle');  This might make this chart type more useful for the end user
                        this.chartComponent.ciq.setAggregationType(type.type);
                    }
                    else {
                        this.chartComponent.ciq.setChartType(type.type);
                    }
                    //update the ui
                    this.chartType = type.label;
                };
                ChartUI.prototype.toggleCrosshairs = function () {
                    var state = this.chartComponent.ciq.layout.crosshair;
                    this.chartComponent.ciq.layout.crosshair = !state;
                };
                ChartUI.prototype.addComparison = function () {
                    if (this.symbolComparison) {
                        // Note that this color generator has a bias toward darker colors. Just needed a quick solution here.
                        function getRandomColor() {
                            var letters = '0123456789ABCDEF';
                            var color = '#';
                            for (var i = 0; i < 6; i++) {
                                color += letters[Math.floor(Math.random() * 16)];
                            }
                            return color;
                        }
                        var newSeries = this.chartComponent.ciq.addSeries(this.symbolComparison, {
                            isComparison: true,
                            color: getRandomColor(),
                            data: { useDefaultQuoteFeed: true },
                            permanent: true
                        });
                        //update the comparison legend
                        this.chartComponent.chartSeries.push(newSeries);
                        this.symbolComparison = null;
                    }
                    else {
                        console.log("Error: no symbol for comparison entered");
                    }
                };
                ChartUI.prototype.getChartLayout = function () {
                    return this.chartComponent.getLayout();
                };
                ChartUI.prototype.handleThemeSelect = function (theme) {
                    if (theme.name == "+ New Theme") {
                        this.themeDialog.showDialog(this.chartComponent.ciq);
                    }
                    else {
                        this.themeDialog.updateTheme(theme);
                    }
                };
                ChartUI.prototype.updateThemeList = function (params) {
                    if (params.name) {
                        var duplicate = false;
                        for (var i = 0; i < this.themes.length; i++) {
                            if (this.themes[i].name == params.name) {
                                this.themes[i].settings = params.settings;
                                duplicate = true;
                            }
                        }
                        if (!duplicate)
                            this.themes.push(params);
                    }
                    else
                        console.error("Please name your custom theme.");
                };
                ;
                return ChartUI;
            }());
            __decorate([
                core_1.ViewChild(chart_component_1.ChartComponent),
                __metadata("design:type", chart_component_1.ChartComponent)
            ], ChartUI.prototype, "chartComponent", void 0);
            __decorate([
                core_1.ViewChild(theme_dialog_component_1.ThemeDialog),
                __metadata("design:type", theme_dialog_component_1.ThemeDialog)
            ], ChartUI.prototype, "themeDialog", void 0);
            ChartUI = __decorate([
                core_1.Component({
                    selector: 'chart-ui',
                    styleUrls: ['app/css/CIQ_Seed.css', 'app/css/CIQ_Demo.css'],
                    templateUrl: 'app/ui_component/ui.component.html',
                    directives: [chart_component_1.ChartComponent, study_dialog_component_1.StudyDialog, theme_dialog_component_1.ThemeDialog, timezone_dialog_component_1.TimezoneDialog, colorpicker_1.Colorpicker],
                    changeDetection: core_1.ChangeDetectionStrategy.OnPush,
                }),
                __metadata("design:paramtypes", [typeof (_a = typeof core_1.NgZone !== "undefined" && core_1.NgZone) === "function" && _a || Object])
            ], ChartUI);
            exports_1("ChartUI", ChartUI);
        }
    };
});
//# sourceMappingURL=ui.component.js.map