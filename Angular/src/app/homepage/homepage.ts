import { Component } from '@angular/core';
import { TitleBox } from '../title-box/title-box';
import { VerticalLine } from '../vertical-line/vertical-line';
import { HorizontalLine } from '../horizontal-line/horizontal-line';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  imports: [TitleBox, VerticalLine, HorizontalLine, RouterModule],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})

export class Homepage {
}
