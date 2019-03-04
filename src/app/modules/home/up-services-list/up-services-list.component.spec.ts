import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpServicesListComponent } from './up-services-list.component';

describe('UpServicesListComponent', () => {
  let component: UpServicesListComponent;
  let fixture: ComponentFixture<UpServicesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpServicesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpServicesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
