import { Options } from 'highcharts';

export interface ForecastModel {
  cod: string;
  message: number;
  cnt: number;
  list: ListModel[];
  city: CityModel;
}

export interface ListModel {
  dt: number;
  main: MainModel;
  weather: WeatherModel[];
  clouds: CloudsModel;
  wind: WindModel;
  visibility: number;
  pop: number;
  sys: SysModel;
  dt_txt: string;
}

export interface MainModel {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface WeatherModel {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface CloudsModel {
  all: number;
}

export interface WindModel {
  speed: number;
  deg: number;
  gust: number;
}

export interface SysModel {
  pod: string;
}

export interface CityModel {
  id: number;
  name: string;
  coord: Coord;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface FormattedForecastModel {
  temperatureOptions: Options;
  humidityOptions: Options;
}
