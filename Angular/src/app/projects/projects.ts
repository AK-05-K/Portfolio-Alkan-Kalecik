import { Component } from '@angular/core';
import { VerticalLine } from '../vertical-line/vertical-line';
import { HorizontalLine } from '../horizontal-line/horizontal-line';
import { TitleBox } from '../title-box/title-box';


@Component({
  selector: 'app-projects',
  imports: [VerticalLine, HorizontalLine, TitleBox],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects { }
