import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpCategoriesListComponent } from './up-categories-list.component';

describe('UpCategoriesListComponent', () => {
  let component: UpCategoriesListComponent;
  let fixture: ComponentFixture<UpCategoriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpCategoriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpCategoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
