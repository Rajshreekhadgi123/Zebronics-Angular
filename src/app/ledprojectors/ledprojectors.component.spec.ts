import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedprojectorsComponent } from './ledprojectors.component';

describe('LedprojectorsComponent', () => {
  let component: LedprojectorsComponent;
  let fixture: ComponentFixture<LedprojectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedprojectorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedprojectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
