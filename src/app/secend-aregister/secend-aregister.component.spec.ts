import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecendARegisterComponent } from './secend-aregister.component';

describe('SecendARegisterComponent', () => {
  let component: SecendARegisterComponent;
  let fixture: ComponentFixture<SecendARegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SecendARegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecendARegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
