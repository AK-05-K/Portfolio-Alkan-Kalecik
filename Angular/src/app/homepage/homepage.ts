import { Component } from '@angular/core';
import { TitleBox } from '../title-box/title-box';
import { VerticalLine } from '../vertical-line/vertical-line';

@Component({
  selector: 'app-homepage',
  imports: [TitleBox, VerticalLine],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {}
