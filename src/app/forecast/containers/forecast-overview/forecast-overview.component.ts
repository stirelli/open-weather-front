import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ShareComponent } from '@app/shared/components/share/share.component';
import { ForecastFacadeService } from 'app/forecast/services/forecast.facade.service';
import { FormattedForecastModel } from 'app/forecast/state/forecast.model';
import { ForecastState } from 'app/forecast/state/forecast.store';
import * as Highcharts from 'highcharts';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-forecast-overview',
  templateUrl: './forecast-overview.component.html',
  styleUrls: ['./forecast-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastOverviewComponent implements OnInit {
  @ViewChild('shareElement', { static: true }) shareElement: ShareComponent;
  public cityForecastData$: Observable<FormattedForecastModel> = this.forecastFacadeService.getCityForecastData();
  public cityForecastLoading$: Observable<boolean> = this.forecastFacadeService.getCityForecastLoading();
  public Highcharts: typeof Highcharts = Highcharts;
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private forecastFacadeService: ForecastFacadeService) {}

  ngOnInit() {
    this.forecastFacadeService
      .cityForecastId()
      .pipe(
        tap(id => this.shareElement.setValue(id)),
        takeUntil(this.onDestroy$)
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
