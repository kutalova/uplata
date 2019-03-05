import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home.component';



const AppRouter: Routes = [
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
