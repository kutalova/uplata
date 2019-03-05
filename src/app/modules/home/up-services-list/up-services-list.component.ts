import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {takeWhile} from 'rxjs/operators';
import {ServerService} from '../../../shared/services/server.service';
import {UpServiceItemComponent} from './up-service-item/up-service-item.component';

@Component({
    selector: 'app-up-services-list',
    templateUrl: './up-services-list.component.html',
    styleUrls: ['./up-services-list.component.scss']
})
export class UpServicesListComponent implements OnInit {
    services = [];
    private alive = true;

    loadService(service: {}) {
        this.serverService.storeServiceURI = service.URI;
        this.serverService.storeServiceName = service.name;
        this.router.navigate(['']);
    }

    constructor(private route: ActivatedRoute, private router: Router, private serverService: ServerService) {
    }

    ngOnInit() {
        if (this.router.url !== '/') {
            this.serverService.getServicesList(this.router.url).pipe(takeWhile(() => this.alive))
                .subscribe(
                    (services: any[]) => {
                        this.services = services;
                        for (const service of services) {
                            this.router.config.unshift(
                                {path: this.router.url.substr(1) + '/' + service.URI, component: UpServiceItemComponent},
                            );
                        }
                    },
                    (error) => console.error(error)
                );

            if (this.serverService.storeServiceName) {
                this.serverService.storeServiceName = '';
            }
        }
    }

}
