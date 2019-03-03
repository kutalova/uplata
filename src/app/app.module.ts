import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {SharedModule} from './shared.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PageWrapperComponent} from './core/page-wrapper/page-wrapper.component';

@NgModule({
    declarations: [
        AppComponent,
        PageWrapperComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
