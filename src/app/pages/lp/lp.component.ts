import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lp',
  imports: [],
  template: `<p>lp works!</p>`,
  styleUrl: './lp.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LpComponent { }
