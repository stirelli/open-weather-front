import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ShareComponent } from '@app/shared/components/share/share.component';
import { ForecastFacadeService } from 'app/forecast/services/forecast.facade.service';
import { FormattedForecastModel, ForecastModel } from 'app/forecast/state/forecast.model';
import { ForecastState } from 'app/forecast/state/forecast.store';
import * as Highcharts from 'highcharts';
import { Observable, Subject } from 'rxjs';
import { filter, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-forecast-overview',
  templateUrl: './forecast-overview.component.html',
  styleUrls: ['./forecast-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForecastOverviewComponent implements OnInit {
  @ViewChild('shareElement', { static: false }) shareElement: ShareComponent;
  public cityForecastState$: Observable<ForecastState> = this.forecastFacadeService.getCityForecastState();
  public cityForecastData$: Observable<FormattedForecastModel> = this.forecastFacadeService.getCityForecastData();
  public cityForecastLoading$: Observable<boolean> = this.forecastFacadeService.getCityForecastLoading();
  public Highcharts: typeof Highcharts = Highcharts;
  public forecastData: ForecastModel = null;
  private onDestroy$: Subject<void> = new Subject<void>();

  constructor(private forecastFacadeService: ForecastFacadeService, private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.cityForecastState$
      .pipe(
        filter(state => !!state.data),
        tap(state => {
          this.forecastData = state.data;
          this.changeDetectorRef.detectChanges();
        }),
        takeUntil(this.onDestroy$)
      )
      .subscribe();

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
