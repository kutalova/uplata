import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
@Injectable()
export class ServerService {
    constructor(private http: HttpClient, private router: Router) {
    }

    getCategoriesList() {
        return this.http.get(environment.serverDomainDefaultURL);
    }
    getServicesList(category: string) {
        return this.http.get(environment.serverDomain + category + '.json');
    }
}