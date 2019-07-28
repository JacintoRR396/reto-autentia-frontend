import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSectionDetailComponent } from './app-section-detail.component';

describe('AppSectionDetailComponent', () => {
  let component: AppSectionDetailComponent;
  let fixture: ComponentFixture<AppSectionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSectionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSectionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
