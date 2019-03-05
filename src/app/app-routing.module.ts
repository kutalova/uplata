import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageWrapperComponent} from './core/page-wrapper/page-wrapper.component';
import {Error404Component} from './core/error-pages/error404/error404.component';
import {Error500Component} from './core/error-pages/error500/error500.component';
import {UsComponent} from './core/us/us.component';
import {TariffsComponent} from './core/tariffs/tariffs.component';
import {FaqComponent} from './core/faq/faq.component';
import {SafetyComponent} from './core/safety/safety.component';
import {LegalComponent} from './core/legal/legal.component';



const AppRouter: Routes = [
    {
        path: '', pathMatch: 'full', loadChildren: './modules/home/home.module#HomeModule'
    },
    {
        path: '', component: PageWrapperComponent, children: [
            {
                path: 'onas', component: UsComponent
            },
            {
                path: 'faq', component: FaqComponent
            },
            {
                path: 'tarif', component: TariffsComponent
            },
            {
                path: 'bezopasnost', component: SafetyComponent
            },
            {
                path: 'legal', component: LegalComponent
            },
            {
                path: '404', component: Error404Component
            },
            {
                path: '500', component: Error500Component
            },
            {
                path: '**', component: Error404Component
            }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forRoot(AppRouter)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
