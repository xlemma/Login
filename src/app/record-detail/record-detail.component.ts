import { Component, OnInit, Input } from '@angular/core';
import { RecordDetail } from '../record';
import { Record } from '../record';

@Component({
  selector: 'app-record-detail',
  templateUrl: './record-detail.component.html',
  styleUrls: ['./record-detail.component.css']
})
export class RecordDetailComponent implements OnInit {


    @Input() recordDetail: RecordDetail;
    @Input() selectedRecord: Record;
  constructor() { }

  ngOnInit() {
  }

}
