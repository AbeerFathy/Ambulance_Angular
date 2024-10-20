import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirsrAiaCComponent } from './firsr-aia-c.component';

describe('FirsrAiaCComponent', () => {
  let component: FirsrAiaCComponent;
  let fixture: ComponentFixture<FirsrAiaCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FirsrAiaCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirsrAiaCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
