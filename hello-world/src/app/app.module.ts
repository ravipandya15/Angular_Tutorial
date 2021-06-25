import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BindingsComponent } from './bindings/bindings.component';
import { FormsModule } from '@angular/forms';
import { StructuralDirectivesComponent } from './Structural_Directives/structural-directives/structural-directives.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { PipesExampleComponent } from './pipes-example/pipes-example.component';
import { EmployeeListComponent } from './Services/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './Services/employee-detail/employee-detail.component'
import { EmployeeServiceService } from './Services/employee-service.service';
import { HttpClientModule } from '@angular/common/http';
import { DepartmentListComponent } from './Routing/department-list/department-list.component';
import { NotFoundComponent } from './Routing/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BindingsComponent,
    StructuralDirectivesComponent,
    ComponentInteractionComponent,
    PipesExampleComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    DepartmentListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
