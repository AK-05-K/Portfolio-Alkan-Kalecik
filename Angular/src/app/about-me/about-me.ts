import { Component } from '@angular/core';
import { TitleBox } from '../title-box/title-box';
import { VerticalLine } from '../vertical-line/vertical-line';
import { HorizontalLine } from '../horizontal-line/horizontal-line';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-me',
  imports: [TitleBox, VerticalLine, HorizontalLine, RouterModule],
  templateUrl: './about-me.html',
  styleUrl: './about-me.css',
})
export class AboutMe {}
