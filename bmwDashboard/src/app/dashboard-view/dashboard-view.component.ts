import { Component, OnInit, Input, OnChanges, ViewChild } from '@angular/core';
import { AutomobileDataItems, AutomobileData } from '../../assets/interfaces/dashboard.model';
import { InfiniteScrollDirective } from 'ngx-infinite-scroll';
@Component({
  selector: 'dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.css']
})
export class DashboardViewComponent implements OnInit, OnChanges {
  infiniteScroll;
  start = 0;
  sum = 10;
  throttle = 150;
  scrollDistance = 1;
  scrollUpDistance = 1;
  lastSortingOrder;
  lastSortingElement;
  bntStyle;
  lastSortingEvent;
  @Input() dashboardData: AutomobileDataItems;
  displayData: AutomobileData[] = [];
  @ViewChild(InfiniteScrollDirective)
  set appScroll(directive: InfiniteScrollDirective) {
    this.infiniteScroll = directive;
  }
  constructor() { }

//To detect the changes from parent component
  ngOnChanges() {
    this.infiniteScroll.ngOnDestroy();
    this.infiniteScroll.setup();
    this.sortData(this.lastSortingElement, this.lastSortingOrder, null);
  }

  ngOnInit(): void {
    this.bntStyle = "sorting-button-default"
  }

  //Get the sorting parameters
  getSortingParams() {
    this.sum = 10;
    this.start = 0;
    this.displayData = [];
    this.getDisplayData();
  }

  //Sort data function
  sortData(value, order, e) {
    if (e) {
      if (this.lastSortingEvent) {
        const classList = this.lastSortingEvent.target.classList;
        const classes = this.lastSortingEvent.target.className;
        classes.includes('clicked') ? classList.remove('clicked') : classList.add('clicked');
      }
      const classList = e.target.classList;
      const classes = e.target.className;
      classes.includes('clicked') ? classList.remove('clicked') : classList.add('clicked');
      this.lastSortingEvent = e;
    }
    this.lastSortingOrder = order;
    this.lastSortingElement = value;
    if (this.lastSortingOrder !== undefined) {
      if (this.lastSortingOrder == "increase") {
        this.dashboardData = this.dashboardData.sort((a, b) => {
          if (this.lastSortingElement == 'description' || this.lastSortingElement == 'request_raised_by') {
            return a[this.lastSortingElement].toUpperCase() > b[this.lastSortingElement].toUpperCase() ? -1 : b[this.lastSortingElement].toUpperCase() > a[this.lastSortingElement].toUpperCase() ? 1 : 0;
          }
          else {
            return a[this.lastSortingElement] - b[this.lastSortingElement];
          }
        })
      } else {
        this.dashboardData = this.dashboardData.sort((a, b) => {
          if (this.lastSortingElement == 'description' || this.lastSortingElement == 'request_raised_by') {
            return a[this.lastSortingElement].toUpperCase() > b[this.lastSortingElement].toUpperCase() ? 1 : b[this.lastSortingElement].toUpperCase() > a[this.lastSortingElement].toUpperCase() ? -1 : 0;
          } else {
            return b[this.lastSortingElement] - a[this.lastSortingElement];
          }
        })
      }
    }
    this.getSortingParams();
  }

  //Scroll function
  onScrollDown() {
    this.start = this.sum;
    this.sum += 5;
    this.getDisplayData();
  }

  //Add the data on scrolling down
  /*As we do not have API which can give filtered results, we are performing filters locally. By using "dashboardData" and "displayData", 
  where "dashboardData" represents the entire filtered data and "displayData" limits what is shown on the UI. As infinite-scroll is implemented,
  eventually "displayData" will contain the entire content of dashboardData, after enough scrolls. If an API is provided this function could be 
  replaced with an API call to get data in chunks.
  */
  getDisplayData() {
    if (this.dashboardData !== undefined) {
      for (let i = this.start; i < this.sum; i++) {
        if (i >= this.dashboardData.length) {
          break;
        }
        this.displayData.push(this.dashboardData[i]);
      }
    }

  }
}
