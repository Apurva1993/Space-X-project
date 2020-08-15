import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';

const routerStub = {
  url: 'http://localhost:4200/'
}

const dashboardStub = {
  getInitialData: jasmine.createSpy('getInitialData'),
  getFilteredData: jasmine.createSpy('getFilteredData'),
  initialDataObserver: new BehaviorSubject([{
    flight_number: 100,
    mission_name: 'test',
    launch_year: '2020',
    mission_id: 0,
    launch_success: true,
    rocket: {
      first_stage: {
        cores: [{
          land_success: true
        }]
      }
    },
    links: {
      mission_patch: 'https://images2.imgbox.com/d2/3b/bQaWiil0_o.png'
    }
  }]),
  filterDataObserver: new BehaviorSubject([{
    flight_number: 100,
    mission_name: 'test',
    launch_year: '2020',
    mission_id: 0,
    launch_success: true,
    rocket: {
      first_stage: {
        cores: [{
          land_success: true
        }]
      }
    },
    links: {
      mission_patch: 'https://images2.imgbox.com/d2/3b/bQaWiil0_o.png'
    }
  }])

};

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let service: DashboardService
  let router: Router

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      imports: [

      ], 
      providers: [
       { provide: DashboardService, useValue: dashboardStub },
       { provide:Router, useValue: routerStub}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
