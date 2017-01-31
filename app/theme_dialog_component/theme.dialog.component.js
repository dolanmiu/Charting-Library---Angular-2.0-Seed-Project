System.register(["angular2/core", "../colorpicker_component/colorpicker"], function (exports_1, context_1) {
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
    var core_1, colorpicker_1, ThemeDialog;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (colorpicker_1_1) {
                colorpicker_1 = colorpicker_1_1;
            }
        ],
        execute: function () {
            ThemeDialog = (function () {
                function ThemeDialog() {
                    this.activeOutput = {};
                    this.themeHelper = {};
                    this.themeToPush = new core_1.EventEmitter();
                    this.launchDialog = new core_1.EventEmitter();
                    this.launchColorpickerEvent = new core_1.EventEmitter();
                    this.updateThemeHelper = function (color, themeDetail) {
                        switch (themeDetail) {
                            case 'candleUp':
                                this.themeHelper.settings.chartTypes["Candle/Bar"].up.color = CIQ.hexToRgba('#' + color);
                                break;
                            case 'candleDown':
                                this.themeHelper.settings.chartTypes["Candle/Bar"].down.color = CIQ.hexToRgba('#' + color);
                                break;
                            case 'wickUp':
                                this.themeHelper.settings.chartTypes["Candle/Bar"].up.wick = CIQ.hexToRgba('#' + color);
                                break;
                            case 'wickDown':
                                this.themeHelper.settings.chartTypes["Candle/Bar"].down.wick = CIQ.hexToRgba('#' + color);
                                break;
                            case 'borderUp':
                                this.themeHelper.settings.chartTypes["Candle/Bar"].up.border = CIQ.hexToRgba('#' + color);
                                break;
                            case 'borderDown':
                                this.themeHelper.settings.chartTypes["Candle/Bar"].down.border = CIQ.hexToRgba('#' + color);
                                break;
                            case 'lineBar':
                                this.themeHelper.settings.chartTypes["Line"].color = CIQ.hexToRgba('#' + color);
                                break;
                            case 'mountain':
                                this.themeHelper.settings.chartTypes["Mountain"].color = CIQ.hexToRgba('#' + color);
                                break;
                            case 'chartBackground':
                                this.themeHelper.settings.chart["Background"].color = CIQ.hexToRgba('#' + color);
                                break;
                            case 'dividers':
                                this.themeHelper.settings.chart["Grid Dividers"].color = CIQ.hexToRgba('#' + color);
                                break;
                            case 'lines':
                                this.themeHelper.settings.chart["Grid Lines"].color = CIQ.hexToRgba('#' + color);
                                break;
                            case 'axis':
                                this.themeHelper.settings.chart["Axis Text"].color = CIQ.hexToRgba('#' + color);
                                break;
                        }
                    };
                    this.showDialog = function (chart) {
                        var _this = this;
                        this.ciq = chart;
                        this.zone.run(function () {
                            _this.themeHelper = new CIQ.ThemeHelper({ 'stx': _this.ciq });
                            _this.candleUp = _this.themeHelper.settings.chartTypes["Candle/Bar"].up;
                            _this.candleDown = _this.themeHelper.settings.chartTypes["Candle/Bar"].down;
                            _this.lineBarChart = _this.themeHelper.settings.chartTypes["Line"];
                            _this.mountainChart = _this.themeHelper.settings.chartTypes["Mountain"];
                            _this.axis = _this.themeHelper.settings.chart["Axis Text"];
                            _this.background = _this.themeHelper.settings.chart["Background"];
                            _this.gridDividers = _this.themeHelper.settings.chart["Grid Dividers"];
                            _this.gridLines = _this.themeHelper.settings.chart["Grid Lines"];
                            _this.launchDialog.emit(true);
                        });
                    };
                    this.closeMe = function (saveTheme) {
                        if (saveTheme) {
                            var clone = CIQ.clone(this.themeHelper.settings);
                            var newTheme = { 'name': this.themeName, 'settings': clone };
                            this.themeToPush.emit(newTheme);
                            this.updateTheme(newTheme);
                        }
                        this.launchDialog.emit(false);
                    };
                    this.zone = new core_1.NgZone({ enableLongStackTrace: false });
                }
                ThemeDialog.prototype.updateTheme = function (theme) {
                    var _this = this;
                    if (theme.name == "Default") {
                        this.themeHelper = new CIQ.ThemeHelper({ 'stx': this.ciq });
                    }
                    this.zone.run(function () {
                        _this.themeHelper.settings = theme.settings;
                        _this.themeHelper.update();
                    });
                };
                ThemeDialog.prototype.launchColorpicker = function (setting, event) {
                    this.activeOutput['div'] = event.target;
                    this.launchColorpickerEvent.emit({
                        swatch: event.target,
                        setting: setting
                    });
                };
                ThemeDialog.prototype.setColorFromPicker = function (params) {
                    this.updateThemeHelper(params.color, params.params);
                    this.activeOutput.div.style.backgroundColor = CIQ.hexToRgba('#' + params.color);
                };
                return ThemeDialog;
            }());
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], ThemeDialog.prototype, "themeToPush", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], ThemeDialog.prototype, "launchDialog", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], ThemeDialog.prototype, "launchColorpickerEvent", void 0);
            ThemeDialog = __decorate([
                core_1.Component({
                    selector: 'theme-dialog',
                    styleUrls: ['app/css/CIQ_Seed.css', 'app/css/CIQ_Demo.css'],
                    templateUrl: 'app/theme_dialog_component/theme.dialog.component.html',
                    directives: [colorpicker_1.Colorpicker]
                }),
                __metadata("design:paramtypes", [])
            ], ThemeDialog);
            exports_1("ThemeDialog", ThemeDialog);
        }
    };
});
//# sourceMappingURL=theme.dialog.component.js.map