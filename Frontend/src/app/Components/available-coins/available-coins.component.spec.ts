import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCoinsComponent } from './available-coins.component';

describe('AvailableCoinsComponent', () => {
  let component: AvailableCoinsComponent;
  let fixture: ComponentFixture<AvailableCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvailableCoinsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvailableCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
