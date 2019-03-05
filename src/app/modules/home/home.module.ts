import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {UpCategoriesListComponent} from './up-categories-list/up-categories-list.component';
import {UpServicesListComponent} from './up-services-list/up-services-list.component';
import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../../shared.module';

@NgModule({
    exports: [
        HomeComponent,
        UpCategoriesListComponent,
        UpServicesListComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        UpCategoriesListComponent,
        UpServicesListComponent,
    ]
})
export class HomeModule {
}
