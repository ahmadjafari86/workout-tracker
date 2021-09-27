import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

// Third party imports
import {NgxLoadingModule} from 'ngx-loading';
import {NgModel} from "@angular/forms";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDbService} from "angular-in-memory-web-api";

// App imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WorkoutsComponent } from './workouts/workouts.component';
import { EntryEditorComponent } from './entry-editor/entry-editor.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {WorkoutsApiService} from "./services/workouts-api.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkoutsComponent,
    EntryEditorComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxLoadingModule.forRoot({}),
    NgbModule
  ],
  providers: [WorkoutsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
