import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstARegisterComponent } from './first-aregister.component';

describe('FirstARegisterComponent', () => {
  let component: FirstARegisterComponent;
  let fixture: ComponentFixture<FirstARegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirstARegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstARegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
