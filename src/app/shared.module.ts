import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RequestInterceptor} from './shared/services/request.interceptor';

import {Error404Component} from './core/error-pages/error404/error404.component';
import {Error500Component} from './core/error-pages/error500/error500.component';
import {UsComponent} from './core/us/us.component';
import {FaqComponent} from './core/faq/faq.component';
import {TariffsComponent} from './core/tariffs/tariffs.component';
import {SafetyComponent} from './core/safety/safety.component';
import {LegalComponent} from './core/legal/legal.component';
import {HeaderComponent} from './core/header/header.component';
import {UpServiceItemComponent} from './modules/home/up-service-item/up-service-item.component';
import {ServerService} from './shared/services/server.service';
import {ModalService} from './shared/services/modal.service';
import {ModalComponent} from './shared/directives/modal.component';

@NgModule({
    exports: [
        HeaderComponent,
        UpServiceItemComponent,
        Error404Component,
        Error500Component,
        UsComponent,
        FaqComponent,
        TariffsComponent,
        SafetyComponent,
        LegalComponent,
        ModalComponent
    ],
    imports: [
        RouterModule,
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    entryComponents: [UpServiceItemComponent],
    declarations: [
        HeaderComponent,
        UpServiceItemComponent,
        Error404Component,
        Error500Component,
        UsComponent,
        FaqComponent,
        TariffsComponent,
        SafetyComponent,
        LegalComponent,
        ModalComponent
    ],
    providers: [ServerService, ModalService,
        {provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true}
    ]
})
export class SharedModule {
}
