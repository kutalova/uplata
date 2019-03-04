import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../../shared/server.service';

@Component({
  selector: 'app-up-categories-list',
  templateUrl: './up-categories-list.component.html',
  styleUrls: ['./up-categories-list.component.scss']
})
export class UpCategoriesListComponent implements OnInit {

    categories = [];
    constructor(private serverService: ServerService) {}

    ngOnInit() {
        this.serverService.getCategoriesList()
            .subscribe(
                (categories: any[]) => this.categories = categories,
                (error) => console.log(error)
            );
    }
}
