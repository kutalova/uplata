import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpServiceItemComponent } from './up-service-item.component';

describe('UpServiceItemComponent', () => {
  let component: UpServiceItemComponent;
  let fixture: ComponentFixture<UpServiceItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpServiceItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpServiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
