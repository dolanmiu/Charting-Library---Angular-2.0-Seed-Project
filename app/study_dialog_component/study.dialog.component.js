System.register(["angular2/core", "../pipes/property.filter.pipe"], function (exports_1, context_1) {
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
    var core_1, property_filter_pipe_1, StudyDialog;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (property_filter_pipe_1_1) {
                property_filter_pipe_1 = property_filter_pipe_1_1;
            }
        ],
        execute: function () {
            StudyDialog = (function () {
                function StudyDialog() {
                    this.studyHelper = {};
                    this.inputs = [];
                    this.activeOutput = {};
                    this.launchDialog = new core_1.EventEmitter();
                    this.launchColorpickerEvent = new core_1.EventEmitter();
                    this.showDialog = function (params) {
                        var _this = this;
                        this.zone.run(function () {
                            _this.studyHelper = new CIQ.Studies.DialogHelper({ sd: params.sd, stx: params.stx });
                            _this.inputs = _this.studyHelper.inputs;
                            _this.outputs = _this.studyHelper.outputs;
                            _this.parameters = _this.studyHelper.parameters;
                            _this.studyId = _this.studyHelper.name;
                            _this.studyName = _this.studyHelper.title;
                            _this.launchDialog.emit(true);
                        });
                    };
                    this.removeStudy = function (args) {
                        CIQ.Studies.removeStudy(args.stx, args.sd);
                    };
                    this.closeMe = function () {
                        this.launchDialog.emit(false);
                    };
                    this.updateStudy = function (inputs, outputs, params) {
                        var currentInputs = {};
                        var currentOutputs = {};
                        var currentParams = {};
                        for (var i = 0; i < inputs.length; i++) {
                            currentInputs[inputs[i].name] = inputs[i].value;
                        }
                        for (var x = 0; x < outputs.length; x++) {
                            currentOutputs[outputs[x].name] = outputs[x].color;
                        }
                        for (var y = 0; y < params.length; y++) {
                            currentParams[params[y].name + 'Value'] = params[y].value;
                            currentParams[params[y].name + 'Color'] = params[y].color;
                        }
                        this.studyHelper.updateStudy({ inputs: currentInputs, outputs: currentOutputs, parameters: currentParams });
                    };
                    this.zone = new core_1.NgZone({ enableLongStackTrace: false });
                }
                StudyDialog.prototype.addStudy = function (study, ciq) {
                    var self = this;
                    function closure(fc) {
                        return function () {
                            fc.apply(self, arguments);
                        };
                    }
                    ciq.callbacks.studyOverlayEdit = closure(this.removeStudy);
                    ciq.callbacks.studyPanelEdit = closure(this.showDialog);
                    CIQ.Studies.addStudy(ciq, study);
                };
                StudyDialog.prototype.updateStudyHelperColors = function (color, params) {
                    for (var x in this.studyHelper.outputs) {
                        if (this.studyHelper.outputs.hasOwnProperty(x)) {
                            if (this.studyHelper.outputs[x].name == params.name) {
                                this.studyHelper.outputs[x].color = '#' + color;
                            }
                        }
                    }
                    for (var y in this.studyHelper.parameters) {
                        if (this.studyHelper.parameters.hasOwnProperty(y)) {
                            if (this.studyHelper.parameters[y].name == params.name) {
                                this.studyHelper.parameters[y].color = '#' + color;
                            }
                        }
                    }
                };
                ;
                StudyDialog.prototype.launchColorpicker = function (setting, event) {
                    this.activeOutput['div'] = event.target;
                    this.launchColorpickerEvent.emit({
                        swatch: event.target,
                        setting: setting
                    });
                };
                StudyDialog.prototype.setColorFromPicker = function (params) {
                    this.updateStudyHelperColors(params.color, params.params);
                    this.activeOutput.div.style.backgroundColor = CIQ.hexToRgba('#' + params.color);
                };
                return StudyDialog;
            }());
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], StudyDialog.prototype, "launchDialog", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", Object)
            ], StudyDialog.prototype, "launchColorpickerEvent", void 0);
            StudyDialog = __decorate([
                core_1.Component({
                    selector: 'study-dialog',
                    styleUrls: ['app/css/CIQ_Seed.css', 'app/css/CIQ_Demo.css'],
                    templateUrl: 'app/study_dialog_component/study.dialog.component.html',
                    pipes: [property_filter_pipe_1.FilterByPropertyPipe]
                }),
                __metadata("design:paramtypes", [])
            ], StudyDialog);
            exports_1("StudyDialog", StudyDialog);
        }
    };
});
//# sourceMappingURL=study.dialog.component.js.map