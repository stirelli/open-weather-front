import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-overview',
  templateUrl: './home-overview.component.html',
  styleUrls: ['./home-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
