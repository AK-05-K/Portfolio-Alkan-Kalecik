import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalLine } from './vertical-line';

describe('VerticalLine', () => {
  let component: VerticalLine;
  let fixture: ComponentFixture<VerticalLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerticalLine],
    }).compileComponents();

    fixture = TestBed.createComponent(VerticalLine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
