import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Error404Component } from './core/error-pages/error404/error404.component';
import { Error500Component } from './core/error-pages/error500/error500.component';
import { UsComponent } from './core/us/us.component';
import { FaqComponent } from './core/faq/faq.component';
import { TariffsComponent } from './core/tariffs/tariffs.component';
import { SafetyComponent } from './core/safety/safety.component';
import { LegalComponent } from './core/legal/legal.component';

@NgModule({
    exports: [
        Error404Component,
        Error500Component,
        UsComponent,
        FaqComponent,
        TariffsComponent,
        SafetyComponent,
        LegalComponent
    ],
    imports: [
        RouterModule
    ],
    declarations: [
        Error404Component,
        Error500Component,
        UsComponent,
        FaqComponent,
        TariffsComponent,
        SafetyComponent,
        LegalComponent
    ],
    providers: []
})
export class SharedModule { }
