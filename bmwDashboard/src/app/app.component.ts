import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { AutomobileDataItems } from '../assets/interfaces/dashboard.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'bmwDashboard';
  dashboardData: AutomobileDataItems;
  allDashboardData: AutomobileDataItems;
  raisedByUsers;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getDashBoardData();
  }

  //Get Dashboard Data
  getDashBoardData() {
    this.apiService.getDashboardData().subscribe((data:AutomobileDataItems) => {
      //Converting Date string to Date Object
      data.forEach(item => {
        item.purchased_on = new Date(item.purchased_on);
        item.request_raised_on = new Date(item.request_raised_on);
      })
      this.allDashboardData = data;
      this.dashboardData = [...data];
      this.extractRequestRaisedByUsers();
    })
  }

  //Filter the data
  getFilterData(filterData) {
    this.dashboardData = this.allDashboardData.filter(a => {
      return a.price >= filterData.price.low && a.price <= filterData.price.high;
    }).filter(item => {
      return item.purchased_on >= filterData.purchased_on.start
        && item.purchased_on <= filterData.purchased_on.end
    }).filter(item => {
      return filterData.quantity !== 0 ? item.quantity == filterData.quantity : item
    }).filter(item => {
      return filterData.request_raised_by !== '' ? item.request_raised_by == filterData.request_raised_by : item
    }).filter(item => {
      return item.request_raised_on >= filterData.request_raised_on.start
        && item.request_raised_on <= filterData.request_raised_on.end
    }).filter(item => {
      return filterData.description !== '' ? item.description.toLowerCase().includes(filterData.description.toLowerCase())  : item
    })
  }


  //Extract request raised by users
  extractRequestRaisedByUsers() {
    this.raisedByUsers = new Set(this.dashboardData.map(a => a.request_raised_by));
  }
}
