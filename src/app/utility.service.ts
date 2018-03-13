import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {Router} from '@angular/router'


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class UtilityService {

  constructor(private http:Http, private router:Router) { }

   getAuthencationHeader(): Headers {
        var token = localStorage.getItem("token")
        var headers = new Headers();
        headers.append("Authorization", "bearer " + token);
        return headers;
    }
    
    getHeaders(contentType: string): Headers{
        var headers = new Headers();
        headers.append('Content-Type', contentType);
        return headers      
    }

    getHttp(url: string, headers: Headers): Observable<any> {

        return this.http.get(url, {headers: headers}).map(data => {
            data.json();
            return data.json();
        }).catch(
            error => {
                this.router.navigate(['login']);
                return error.json();
            }
        );
    }
    
}
