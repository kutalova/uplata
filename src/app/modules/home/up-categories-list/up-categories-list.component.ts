import {Component, OnInit} from '@angular/core';
import {ServerService} from '../../../shared/services/server.service';
import {takeWhile} from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
    selector: 'app-up-categories-list',
    templateUrl: './up-categories-list.component.html',
    styleUrls: ['./up-categories-list.component.scss']
})
export class UpCategoriesListComponent implements OnInit {

    categories = [];
    private alive = true;

    constructor(private serverService: ServerService, private router: Router) {
    }

    ngOnInit() {
        this.serverService.getCategoriesList().pipe(takeWhile(() => this.alive))
            .subscribe(
                (categories: any[]) => {
                    this.categories = categories;
                    for (let category of categories) {
                        this.router.config.unshift(
                            {path: category.URI, loadChildren: './modules/home/home.module#HomeModule'},
                        );
                    }

                },
                (error) => console.error(error)
            );
    }
}
