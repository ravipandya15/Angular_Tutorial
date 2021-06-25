import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentcontactComponent } from './departmentcontact.component';

describe('DepartmentcontactComponent', () => {
  let component: DepartmentcontactComponent;
  let fixture: ComponentFixture<DepartmentcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentcontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
