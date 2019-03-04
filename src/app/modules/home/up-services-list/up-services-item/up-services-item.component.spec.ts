import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpServicesItemComponent } from './up-services-item.component';

describe('UpServicesItemComponent', () => {
  let component: UpServicesItemComponent;
  let fixture: ComponentFixture<UpServicesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpServicesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpServicesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
