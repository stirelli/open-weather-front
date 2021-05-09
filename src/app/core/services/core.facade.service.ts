import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AppChildRouteName, AppRouteName } from '../models/route-name.enums';

@Injectable({
  providedIn: 'root'
})
export class CoreFacadeService {
  constructor(private router: Router) {}

  public search(term: string): void {
    this.router.navigate([`${AppRouteName.FORECAST}/${AppChildRouteName.CITY}/${term}`]);
  }
}
