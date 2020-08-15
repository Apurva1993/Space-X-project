import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, throwError, BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Constants } from '../shared/Constants';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  public initialDataObserver = new BehaviorSubject(null);
  public filterDataObserver = new BehaviorSubject(null);

  constructor(
      private http: HttpClient
  ) { }

  constantVariable = Constants.apiService;

  getInitialData() {
    this.http.get(this.constantVariable.initialDataURL).subscribe(response => {
      this.initialDataObserver.next(response);
    });
  }

  getFilteredData(params) {
    this.http.get(this.createURL(params)).subscribe(response => {
      this.filterDataObserver.next(response)
    });
  }

  createURL(params) {
    let url = `${this.constantVariable.filterURL}`;
    for (let property in params) {
      if (params[property] !== null) {
        url = `${url}&${property}=${params[property]}`;
      }
    }
    return url;
  }


  // getLaunchSuccessFilterData() {
  //   this.http.get(this.constantVariable.launchSuccessFilterURL).subscribe(response => {
  //     this.filterDataObserver.next(response)
  //   });
  // }

  // getlaunchAndLandFilterURL() {
  //   this.http.get(this.constantVariable.launchAndLandFilterURL).subscribe(response => {
  //     this.filterDataObserver.next(response)
  //   });
  // }

  // getallFilterURL() {
  //   this.http.get(this.constantVariable.allFilterURL).subscribe(response => {
  //     this.filterDataObserver.next(response)
  //   });
  // }
}
