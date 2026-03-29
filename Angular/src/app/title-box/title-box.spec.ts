import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBox } from './title-box';

describe('TitleBox', () => {
  let component: TitleBox;
  let fixture: ComponentFixture<TitleBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleBox],
    }).compileComponents();

    fixture = TestBed.createComponent(TitleBox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
