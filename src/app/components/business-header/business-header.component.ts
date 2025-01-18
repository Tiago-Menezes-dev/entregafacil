import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-business-header',
  imports: [],
  templateUrl: "./business-header.component.html",
  styleUrl: './business-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessHeaderComponent { }
