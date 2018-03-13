import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { RecordComponent } from './record/record.component';
import { RecordDetailComponent } from './record-detail/record-detail.component';


import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';

import {AuthenticationService} from './authentication.service';
import { MessageService } from './message.service';
import { RecordService } from './record.service';
import { AppRoutingModule } from './app-routing.module';
import { UtilityService } from './utility.service';

@NgModule({
  declarations: [
    AppComponent,
    RecordComponent,
    RecordDetailComponent,
    MessagesComponent,
    LoginComponent,   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    RecordService,
    MessageService,
    AuthenticationService,
    UtilityService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
