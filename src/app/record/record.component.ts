import { Component, OnInit } from '@angular/core';
import { Record } from '../record';
import { RecordDetail } from '../record';
import { RecordService } from '../record.service';
import { AuthenticationService } from '../authentication.service';



@Component({
    selector: 'app-record',
    templateUrl: './record.component.html',
    styleUrls: ['./record.component.css'],

})
export class RecordComponent implements OnInit {

    records: Record[];
    selectedRecord: Record;
    recordDetail: RecordDetail

    constructor(private recordService: RecordService, private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.getRecord();
       this.authenticationService.checkCredentials();

    }
    onSelect(record: Record): void {
        this.selectedRecord = record;
        this.getRecordById(record.id);
        
    }

    getRecord(): void {
        this.recordService.getRecord()
            .subscribe(records => this.records = records);
    }

    getRecordById(id: number): void {
        this.recordService.getRecordById(id).subscribe(_recordDetail => this.recordDetail = _recordDetail);
    }

    logout() {
        this.authenticationService.logout();
    }
}
