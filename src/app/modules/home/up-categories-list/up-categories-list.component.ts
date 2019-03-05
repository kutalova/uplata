import { Component, OnInit } from '@angular/core';
import {ServerService} from '../../../shared/server.service';
import {takeWhile} from 'rxjs/operators';

@Component({
  selector: 'app-up-categories-list',
  templateUrl: './up-categories-list.component.html',
  styleUrls: ['./up-categories-list.component.scss']
})
export class UpCategoriesListComponent implements OnInit {

    categories = [];
    private alive = true;
    constructor(private serverService: ServerService) {}

    ngOnInit() {
        this.serverService.getCategoriesList().pipe(takeWhile(() => this.alive))
            .subscribe(
                (categories: any[]) => this.categories = categories,
                (error) => console.error(error)
            );
    }
}
