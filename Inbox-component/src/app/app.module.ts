import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { MatCardModule } from '@angular/material/card';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { MatDividerModule } from '@angular/material/divider';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { ScrollingModule, ScrollDispatcher } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    GridModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatDividerModule,
    MDBBootstrapModule.forRoot(),
    ScrollDispatchModule,
    ScrollingModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ScrollDispatcher],

  bootstrap: [AppComponent]
})
export class AppModule { }
