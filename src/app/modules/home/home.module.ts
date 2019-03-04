import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../../shared.module';

import {HomeComponent} from './home.component';
import {UpCategoriesItemComponent} from './up-categories-list/up-categories-item/up-categories-item.component';
import {UpServicesListComponent} from './up-services-list/up-services-list.component';
import {UpCategoriesListComponent} from './up-categories-list/up-categories-list.component';
import {UpServicesItemComponent} from './up-services-list/up-services-item/up-services-item.component';

@NgModule({
    imports: [
        CommonModule,
        HomeRoutingModule,
        SharedModule
    ],
    declarations: [
        HomeComponent,
        UpCategoriesListComponent,
        UpCategoriesItemComponent,
        UpServicesListComponent,
        UpServicesItemComponent
    ]
})
export class HomeModule {}
