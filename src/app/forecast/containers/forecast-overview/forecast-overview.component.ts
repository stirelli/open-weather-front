import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ForecastFacadeService } from 'app/forecast/services/forecast.facade.service';
import { ForecastState } from 'app/forecast/state/forecast.store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-forecast-overview',
  templateUrl: './forecast-overview.component.html',
  styleUrls: ['./forecast-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastOverviewComponent implements OnInit {
  private allForecast$: Observable<ForecastState> = this.forecastFacadeService.getForecast();

  constructor(private forecastFacadeService: ForecastFacadeService) {}

  ngOnInit() {
    this.allForecast$.subscribe(data => console.log(data));
  }
}
