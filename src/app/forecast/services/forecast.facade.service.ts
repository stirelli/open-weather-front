import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { FormattedForecastModel } from '../state/forecast.model';
import { ForecastQuery } from '../state/forecast.query';
import { ForecastState } from '../state/forecast.store';

@Injectable({
  providedIn: 'root'
})
export class ForecastFacadeService {
  private cityForecastSate$: Observable<ForecastState> = this.forecastQuery.select();
  private cityForecastId$: Observable<ForecastState> = this.forecastQuery.select('_id');
  private cityForecastData$: Observable<ForecastState> = this.forecastQuery.select('data');
  private cityForecastLoading$: Observable<boolean> = this.forecastQuery.select('loading');

  constructor(private forecastQuery: ForecastQuery) {}

  public cityForecastId(): Observable<any> {
    return this.cityForecastId$.pipe(
      filter(data => !!data),
      distinctUntilChanged()
    );
  }

  public getCityForecastLoading(): Observable<boolean> {
    return this.cityForecastLoading$;
  }

  public getCityForecastState(): Observable<ForecastState> {
    return this.cityForecastSate$;
  }

  public getCityForecastData(): Observable<FormattedForecastModel> {
    return this.cityForecastData$.pipe(
      filter(data => !!data),
      map(response => {
        let data = response.list.reduce(
          (acc, curr) => {
            acc.temperatureValues.push([new Date(curr.dt_txt).getTime(), curr.main.temp]);
            acc.humidityValues.push([new Date(curr.dt_txt).getTime(), curr.main.humidity]);
            return acc;
          },
          { temperatureValues: [], humidityValues: [] }
        );

        return {
          temperatureOptions: {
            series: [
              {
                type: 'line',
                name: 'Temperature',
                color: '#fbbc04',
                data: data.temperatureValues
              }
            ],
            title: {
              text: 'Temperature Forecast'
            },
            xAxis: {
              type: 'datetime'
            },
            yAxis: {
              title: {
                text: 'Temperature (°F)'
              },
              labels: {
                formatter: function () {
                  return `${this.value} °F`;
                }
              }
            },
            responsive: {
              rules: [
                {
                  condition: {
                    maxWidth: 500
                  },
                  chartOptions: {
                    legend: {
                      align: 'center',
                      verticalAlign: 'bottom',
                      layout: 'horizontal'
                    },
                    yAxis: {
                      labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                      },
                      title: {
                        text: null
                      }
                    },
                    subtitle: {
                      text: null
                    },
                    credits: {
                      enabled: false
                    }
                  }
                }
              ]
            }
          },
          humidityOptions: {
            series: [
              {
                type: 'line',
                name: 'Humidity',
                data: data.humidityValues
              }
            ],
            title: {
              text: 'Humidity Forecast'
            },
            xAxis: {
              type: 'datetime'
            },
            yAxis: {
              title: {
                text: 'Humidity (%)'
              },
              labels: {
                formatter: function () {
                  return `${this.value} %`;
                }
              }
            },
            responsive: {
              rules: [
                {
                  condition: {
                    maxWidth: 500
                  },
                  chartOptions: {
                    legend: {
                      align: 'center',
                      verticalAlign: 'bottom',
                      layout: 'horizontal'
                    },
                    yAxis: {
                      labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                      },
                      title: {
                        text: null
                      }
                    },
                    subtitle: {
                      text: null
                    },
                    credits: {
                      enabled: false
                    }
                  }
                }
              ]
            }
          }
        };
      })
    );
  }
}
