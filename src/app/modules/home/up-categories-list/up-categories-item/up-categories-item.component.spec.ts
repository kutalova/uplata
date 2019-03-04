import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCategoriesItemComponent } from './up-categories-item.component';

describe('UpCategoriesItemComponent', () => {
  let component: UpCategoriesItemComponent;
  let fixture: ComponentFixture<UpCategoriesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpCategoriesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpCategoriesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
