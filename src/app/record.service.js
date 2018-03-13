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
var http_1 = require("@angular/http");
var message_service_1 = require("./message.service");
require("rxjs/add/operator/map");
var RecordService = /** @class */ (function () {
    function RecordService(messageService, http) {
        this.messageService = messageService;
        this.http = http;
    }
    RecordService.prototype.getRecord = function () {
        return this.http.get("http://localhost:57004/api/EmployeeService").map(function (response) { return response.json(); });
    };
    RecordService.prototype.getRecordById = function (id) {
        return this.http.get("http://localhost:57004/api/EmployeeService?id=" + id).map(function (response) { return response.json(); });
    };
    RecordService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [message_service_1.MessageService, http_1.Http])
    ], RecordService);
    return RecordService;
}());
exports.RecordService = RecordService;
//# sourceMappingURL=record.service.js.map