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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var record_1 = require("../record");
var record_2 = require("../record");
var RecordDetailComponent = /** @class */ (function () {
    function RecordDetailComponent() {
    }
    RecordDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", record_1.RecordDetail)
    ], RecordDetailComponent.prototype, "recordDetail", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", record_2.Record)
    ], RecordDetailComponent.prototype, "selectedRecord", void 0);
    RecordDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-record-detail',
            templateUrl: './record-detail.component.html',
            styleUrls: ['./record-detail.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], RecordDetailComponent);
    return RecordDetailComponent;
}());
exports.RecordDetailComponent = RecordDetailComponent;
//# sourceMappingURL=record-detail.component.js.map