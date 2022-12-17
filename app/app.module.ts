import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import ApplicationComponent from './components/application/application';
import EntryComponent from './components/entry/entry';
import HeaderComponent from './components/header/header';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import AdminpageComponent from './components/adminpage/adminpage';
import UserpageComponent from './components/userpage/userpage';
import FooterComponent from './components/footer/footer';


@NgModule({
    imports:      [ BrowserModule, routing ],
    declarations: [ ApplicationComponent,
                    EntryComponent,
                    HeaderComponent,
                    AdminpageComponent,
                    UserpageComponent,
                    FooterComponent,
                    
                 ],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }