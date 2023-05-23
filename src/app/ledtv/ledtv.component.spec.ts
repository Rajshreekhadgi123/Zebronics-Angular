import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedtvComponent } from './ledtv.component';

describe('LedtvComponent', () => {
  let component: LedtvComponent;
  let fixture: ComponentFixture<LedtvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedtvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedtvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
