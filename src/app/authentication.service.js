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
var of_1 = require("rxjs/observable/of");
var users_1 = require("./users");
var message_service_1 = require("./message.service");
var router_1 = require("@angular/router");
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(messageService, router) {
        this.messageService = messageService;
        this.router = router;
    }
    AuthenticationService.prototype.login = function (user) {
        var users = users_1.Users;
        //check user and password at backend
        if (user.email == null || user.password == null) {
            this.messageService.clear();
            this.messageService.add('Email and/or Password can not be empty');
            return of_1.of(false);
        }
        var authenticatedUser = users.find(function (u) { return u.email === user.email; });
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem("user", JSON.stringify(authenticatedUser));
            this.messageService.add('success');
            this.router.navigate(['/record']);
            return of_1.of(true);
        }
        else {
            this.messageService.clear();
            this.messageService.add('Please try again');
            return of_1.of(false);
        }
    };
    AuthenticationService.prototype.checkCredentials = function () {
        if (localStorage.getItem("user") === null) {
            //check user and token at backend
            this.router.navigate(['login']);
        }
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.clear();
        this.router.navigate(['login']);
    };
    AuthenticationService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [message_service_1.MessageService, router_1.Router])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map