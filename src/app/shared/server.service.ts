import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class ServerService {
    constructor(private http: HttpClient) {
    }


    getCategoriesList() {
        return this.http.get(environment.serverDomain);
    }

}
