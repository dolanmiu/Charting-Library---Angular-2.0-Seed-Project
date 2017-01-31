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
    var core_1, Colorpicker, _a, _b, _c;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            Colorpicker = (function () {
                function Colorpicker(element) {
                    this.element = element;
                    this.posLeft = 0;
                    this.posTop = 0;
                    this.caller = false;
                    this.parent = false;
                    this.launch = false;
                    this.setThemeSwatchColor = new core_1.EventEmitter();
                    this.setStudySwatchColor = new core_1.EventEmitter();
                    this.setColor = function (params) {
                        var that = this;
                        return function () {
                            if (that.parent == "output" || that.parent == "input" || that.parent == "parameter")
                                that.setStudySwatchColor.emit({ color: arguments[0], source: that.caller, params: params });
                            else
                                that.setThemeSwatchColor.emit({ color: arguments[0], source: that.caller, params: params });
                            that.closeMe();
                        };
                    };
                    this.closeMe = function () {
                        this.launch = false;
                        this.posLeft = 0;
                        this.posTop = 0;
                    };
                    this.colorPickerColors = [
                        "ffffff", "ffd0cf", "ffd9bb", "fff56c", "eaeba3", "d3e8ae", "adf3ec", "ccdcfa", "d9c3eb",
                        "efefef", "eb8b87", "ffb679", "ffe252", "e2e485", "c5e093", "9de3df", "b1c9f8", "c5a6e1",
                        "cccccc", "e36460", "ff9250", "ffcd2b", "dcdf67", "b3d987", "66cac4", "97b8f7", "b387d7",
                        "9b9b9b", "dd3e39", "ff6a23", "faaf3a", "c9d641", "8bc176", "33b9b0", "7da6f5", "9f6ace",
                        "656565", "b82c0b", "be501b", "e99b54", "97a030", "699158", "00a99d", "5f7cb8", "784f9a",
                        "343434", "892008", "803512", "ab611f", "646c20", "46603a", "007e76", "3e527a", "503567",
                        "000000", "5c1506", "401a08", "714114", "333610", "222f1d", "00544f", "1f2a3c", "281a33"
                    ];
                }
                Colorpicker.prototype.launchColorpicker = function (params) {
                    this.createColorPicker(this.element.nativeElement.children.colorPicker.children[0], this.setColor(params.setting));
                    var clicked = params.swatch;
                    this.posLeft = (clicked.offsetLeft + 10) + "px";
                    this.posTop = (clicked.offsetTop - 650) + "px";
                    this.caller = clicked;
                    this.parent = params.swatch.parentNode.classList[0];
                    this.launch = true;
                };
                Colorpicker.prototype.createColorPicker = function (div, fc) {
                    var colors = this.colorPickerColors;
                    CIQ.clearNode(div);
                    var ul = document.createElement("ul");
                    ul.style.margin = '0';
                    ul.style.padding = '0';
                    ul.style.listStyleType = 'none';
                    ul.style.zoom = '1';
                    div.appendChild(ul);
                    function clkFn(c) { return function () { fc(c); return false; }; }
                    for (var i = 0; i < colors.length; i++) {
                        var c = colors[i];
                        var li = document.createElement("li");
                        var a = document.createElement("a");
                        li.appendChild(a);
                        li.style.cssFloat = 'left';
                        li.style.margin = '0 5px 5px 0';
                        a.href = "#";
                        a.title = c;
                        a.style.background = "#" + c;
                        a.innerHTML = c;
                        a.style.display = 'block';
                        a.style.width = '13px';
                        a.style.height = '13px';
                        a.style.textDecoration = 'none';
                        a.style.textIndent = '-100000px';
                        a.style.outline = '0';
                        a.style.border = '1px solid #aaa';
                        ul.appendChild(li);
                        a.onclick = clkFn(c);
                    }
                };
                ;
                return Colorpicker;
            }());
            __decorate([
                core_1.Output(),
                __metadata("design:type", typeof (_a = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _a || Object)
            ], Colorpicker.prototype, "setThemeSwatchColor", void 0);
            __decorate([
                core_1.Output(),
                __metadata("design:type", typeof (_b = typeof core_1.EventEmitter !== "undefined" && core_1.EventEmitter) === "function" && _b || Object)
            ], Colorpicker.prototype, "setStudySwatchColor", void 0);
            Colorpicker = __decorate([
                core_1.Component({
                    selector: 'colorpicker',
                    styleUrls: ['app/css/CIQ_Seed.css'],
                    templateUrl: 'app/colorpicker_component/colorpicker.html',
                }),
                __metadata("design:paramtypes", [typeof (_c = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _c || Object])
            ], Colorpicker);
            exports_1("Colorpicker", Colorpicker);
        }
    };
});
//# sourceMappingURL=colorpicker.js.map