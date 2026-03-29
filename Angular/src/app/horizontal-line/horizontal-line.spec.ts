import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalLine } from './horizontal-line';

describe('HorizontalLine', () => {
  let component: HorizontalLine;
  let fixture: ComponentFixture<HorizontalLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HorizontalLine],
    }).compileComponents();

    fixture = TestBed.createComponent(HorizontalLine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
