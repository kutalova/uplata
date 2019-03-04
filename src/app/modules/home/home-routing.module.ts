import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home.component';
import {UpServicesListComponent} from './up-services-list/up-services-list.component';



const AppRouter: Routes = [
    {
        path: '/:category', component: UpServicesListComponent
    },
    {
        path: '', component: HomeComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(AppRouter)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
