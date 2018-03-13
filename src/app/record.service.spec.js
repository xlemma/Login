"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var record_service_1 = require("./record.service");
describe('RecordService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [record_service_1.RecordService]
        });
    });
    it('should be created', testing_1.inject([record_service_1.RecordService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=record.service.spec.js.map