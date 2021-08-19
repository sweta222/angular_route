import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DepartmentListComponent } from './department-list/department-list.component';
// import { EmployeetListComponent } from './employeet-list/employeet-list.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    // DepartmentListComponent,
    // EmployeetListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
