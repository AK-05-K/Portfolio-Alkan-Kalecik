import { Component } from '@angular/core';
import { TitleBox } from '../title-box/title-box';
import { VerticalLine } from '../vertical-line/vertical-line';
import { HorizontalLine } from '../horizontal-line/horizontal-line';

@Component({
  selector: 'app-about-me',
  imports: [TitleBox, VerticalLine, HorizontalLine],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {}
