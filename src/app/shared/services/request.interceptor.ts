import { HttpRequest, HttpEvent, HttpHandler, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import { of } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const copiedRequest = req.clone();
        return next.handle(copiedRequest)
            .catch((err: HttpErrorResponse) => {
                if (err.error) {
                    if (err.status === 404) {
                        this.router.navigate(['/404']);
                    }
                    if (err.status === 500) {
                        this.router.navigate(['/500']);
                    }
                }
                return of(err.error);
            });

    }
}
