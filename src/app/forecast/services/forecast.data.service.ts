import { Injectable } from '@angular/core';
import { HttpService } from '@app/core/services/http.service';
import { ForecastModule } from '../forecast.module';

@Injectable({
  providedIn: ForecastModule
})
export class VideoDataService {
  constructor(private httpService: HttpService) {}
}
