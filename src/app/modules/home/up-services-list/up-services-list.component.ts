import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {takeWhile} from 'rxjs/operators';
import {ServerService} from '../../../shared/server.service';

@Component({
    selector: 'app-up-services-list',
    templateUrl: './up-services-list.component.html',
    styleUrls: ['./up-services-list.component.scss']
})
export class UpServicesListComponent implements OnInit {
    services = [];
    private alive = true;

    constructor(private route: ActivatedRoute, private router: Router, private serverService: ServerService) {
    }

    ngOnInit() {
        if (this.router.url !== '/') {
            this.serverService.getServicesList(this.router.url).pipe(takeWhile(() => this.alive))
                .subscribe(
                    (services: any[]) => this.services = services,
                    (error) => console.error(error)
                );
        }
    }

}
