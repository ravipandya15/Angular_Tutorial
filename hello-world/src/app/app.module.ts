import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

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
import { DepartmentDetailComponent } from './Routing/department-detail/department-detail.component';
import { DepartmentoverviewComponent } from './Routing/departmentoverview/departmentoverview.component';
import { DepartmentcontactComponent } from './Routing/departmentcontact/departmentcontact.component';
import { TemplateFormComponent } from './Forms/template-driven/template-form/template-form.component';
import { ReactiveFormComponent } from './Forms/reactive-forms/reactive-form/reactive-form.component';

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
    NotFoundComponent,
    DepartmentDetailComponent,
    DepartmentoverviewComponent,
    DepartmentcontactComponent,
    TemplateFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  // in service as providedIn : root or in providers array.
  // any one of them is OK.
  providers: [EmployeeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
