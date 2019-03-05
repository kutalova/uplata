import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Router} from '@angular/router';
@Injectable()
export class ServerService {
    _storeServiceURI: string;
    _storeServiceName: string;

    set storeServiceURI(value: string) {
        this._storeServiceURI = value;
    }

    get storeServiceURI(): string {
        return this._storeServiceURI;
    }
    set storeServiceName(value: string) {
        this._storeServiceName = value;
    }

    get storeServiceName(): string {
        return this._storeServiceName;
    }
    constructor(private http: HttpClient, private router: Router) {
    }

    getCategoriesList() {
        return this.http.get(environment.serverDomainDefaultURL);
    }
    getServicesList(category: string) {
        return this.http.get(environment.serverDomain + category + '.json');
    }
}
