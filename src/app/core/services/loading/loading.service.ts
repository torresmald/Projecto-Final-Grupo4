import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  public shouldShowLoading$: ReplaySubject<boolean> =  new ReplaySubject<boolean>();

  constructor() {
    this.shouldShowLoading$.next(false);
  }

  public showLoading() {
    this.shouldShowLoading$.next(true);
  }

  public hideLoading() {
    this.shouldShowLoading$.next(false);
  }
}
