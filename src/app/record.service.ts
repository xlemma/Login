import {Injectable} from '@angular/core';

import {Record} from './record';
import {RecordDetail} from './record';
import {Observable} from 'rxjs/Observable';
import {UtilityService} from './utility.service';


@Injectable()
export class RecordService {

    constructor(private utilityService: UtilityService) {}

    getRecord(): Observable<Record[]> {
        var url = "http://localhost:5813/api/employee";
        var headers = this.utilityService.getAuthencationHeader();
        return this.utilityService.getHttp(url, headers);
    }

    getRecordById(id: number): Observable<RecordDetail> {
        var url = "http://localhost:5813/api/employee?id=" + id;
        var headers = this.utilityService.getAuthencationHeader();
        return this.utilityService.getHttp(url, headers);
    }  
}


