import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {MatCardModule} from '@angular/material/card';
import { ToolDetailComponent } from './tool-detail/tool-detail.component';
import { TestingComp2Component } from './testing-comp2/testing-comp2.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ToolDetailComponent,
    TestingComp2Component,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
