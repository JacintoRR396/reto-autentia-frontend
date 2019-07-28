import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSectionListComponent } from './app-section-list.component';

describe('AppSectionListComponent', () => {
  let component: AppSectionListComponent;
  let fixture: ComponentFixture<AppSectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
