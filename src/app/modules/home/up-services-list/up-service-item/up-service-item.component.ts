import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ServerService} from '../../../../shared/services/server.service';

@Component({
    selector: 'app-up-service-item',
    templateUrl: './up-service-item.component.html',
    styleUrls: ['./up-service-item.component.scss']
})
export class UpServiceItemComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute, private serverService: ServerService) {
    }

    showService: string;

    ngOnInit() {
        this.showService = this.serverService.storeServiceName;
    }
}
