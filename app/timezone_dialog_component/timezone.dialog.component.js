System.register(["angular2/core"], function (exports_1, context_1) {
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
    var core_1, TimezoneDialog;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            TimezoneDialog = (function () {
                function TimezoneDialog() {
                    this.timezones = [];
                    this.launchDialog = new core_1.EventEmitter();
                    this.closeMe = function () {
                        this.launchDialog.emit(false);
                    };
                    this.timezoneMap = CIQ.timeZoneMap;
                }
                TimezoneDialog.prototype.launchTimezoneDialog = function (chart) {
                    for (var i in this.timezoneMap) {
                        this.timezones.push(this.timezoneMap[i]);
                    }
                    this.ciq = chart;
                    this.launchDialog.emit(true);
                };
                TimezoneDialog.prototype.setTimezone = function (zone) {
                    this.ciq.setTimeZone(this.ciq.dataZone, zone);
                    if (this.ciq.chart.symbol)
                        this.ciq.draw();
                    this.launchDialog.emit(false);
                };
                ;
                return TimezoneDialog;
            }());
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], TimezoneDialog.prototype, "launchDialog", void 0);
            TimezoneDialog = __decorate([
                core_1.Component({
                    selector: 'timezone-dialog',
                    styleUrls: ['app/css/CIQ_Seed.css'],
                    templateUrl: 'app/timezone_dialog_component/timezone.dialog.component.html',
                }),
                __metadata("design:paramtypes", [])
            ], TimezoneDialog);
            exports_1("TimezoneDialog", TimezoneDialog);
        }
    };
});
//# sourceMappingURL=timezone.dialog.component.js.map