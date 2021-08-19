import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetListComponent } from './employeet-list.component';

describe('EmployeetListComponent', () => {
  let component: EmployeetListComponent;
  let fixture: ComponentFixture<EmployeetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
