import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Constants } from '../shared/Constants';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  /** get constant from shared folder */
  constantHolder = Constants.DashboardConstant;
  constantYearArray = Constants.yearArray;
  initialData;
  processedData;
  homeUrL;

  /** Object to store state of missile */
  missileState = {
    year: null,
    launch: null,
    landed: null
  };

  constructor(
    private service: DashboardService,
    private location: Location,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.service.getInitialData();
    /** Get initial data from service */
    this.service.initialDataObserver.subscribe(data => {
      if (data != null) {
        this.initialData = data;
        this.processDataforInitialLoad();
      }
    });

    this.service.filterDataObserver.subscribe(data => {
      this.processedData = data;
    })

    this.resetMissileState();
    this.homeUrL = this.router.url;
    this.resetURL();
  }

  resetMissileState() {
    this.missileState.year = null;
    this.missileState.launch = null
    this.missileState.landed = null;
  }

  resetURL() {
    this.location.replaceState(this.homeUrL);
  }

  processDataforInitialLoad() {
    this.processedData = [...this.initialData];
  }
  
  /** filter on the basis of year */
  filterYear(year: number) {
    /** Store this in the missileState */
    this.missileState.year = year;
    /** check if other parameters are selected */
    this.createQueryParams(this.missileState.year, this.missileState.launch, this.missileState.landed);
  }

  filterSuccessfulLaunch(value: boolean) {
      /** Store this in the missileState */
      this.missileState.launch = value;
      /** check if other parameters are selected */
      this.createQueryParams(this.missileState.year, this.missileState.launch, this.missileState.landed);
  }

  filterSuccessfulLanded(value: boolean) {
    /** Store this in the missileState */
    this.missileState.landed = value;
    /** check if other parameters are selected */
    this.createQueryParams(this.missileState.year, this.missileState.launch, this.missileState.landed);
  }

  createQueryParams(year: number, launch: boolean, landed: boolean) {
    const params = {
      launch_success: launch,
      land_success: landed,
      launch_year: year
    };
    this.service.getFilteredData(params);
    this.updateURL(params);
  }

  updateURL(params) {
    let url = this.homeUrL + '?limit=100';
    
    for (let property in params) {
      if (params[property] !== null) {
        url = `${url}&${property}=${params[property]}`;
      }
    }
    this.location.replaceState(url);
  }

}
