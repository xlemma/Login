import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {Router} from '@angular/router';
import {Http, Headers} from '@angular/http';
import {UtilityService} from './utility.service'

@Injectable()
export class AuthenticationService {

    constructor(private messageService: MessageService, public router: Router, private http: Http, private utilityService: UtilityService) {}
    
    login(user: User): void {
        var headers = this.utilityService.getHeaders('application/x-www-form-urlencoded');
        var url = "http://localhost:5813/token";
        
        var content = "username=" + user.username + "&password=" + user.password + "&grant_type=password"
        this.http.post(
            'http://localhost:5813/token', content, {
                headers: headers
            }).map(res => res.json()).subscribe(
                data => {
                    localStorage.setItem('token', data.access_token);
                    this.router.navigate(['/record']);
                },
                err => {
                    this.messageService.clear();
                    this.messageService.add(JSON.parse(err._body).error_description);
                }
            );
                       
    }

    
    checkCredentials() {
        if (localStorage.getItem("token") === null) {
            //check user and token at backend
            this.router.navigate(['login']);
        }
    }

    logout() {
        localStorage.clear();
        this.router.navigate(['login']);
    }
}