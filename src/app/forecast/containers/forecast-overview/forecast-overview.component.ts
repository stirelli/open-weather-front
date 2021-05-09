import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forecast-overview',
  templateUrl: './forecast-overview.component.html',
  styleUrls: ['./forecast-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastOverviewComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
