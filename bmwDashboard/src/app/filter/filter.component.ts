import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FILTER_PRICE, FILTER_QUANTITY_MAX, DEFAULT_PURCHASE_ON_DATE, DEFAULT_RAISED_ON_DATE } from '../constants';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  // put filtered params in localstorage and cookies
  @Output() filteredData = new EventEmitter();
  @Input() raisedByUsers;

  //Object for Price range options
  priceRangeOptions = {
    floor: FILTER_PRICE.LOW,
    ceil: FILTER_PRICE.HIGH,
    step: FILTER_PRICE.STEP
  }

  //Object for Quantity range options
  quantityRangeOptions = {
    ceil: FILTER_QUANTITY_MAX,
  }

  //Object for filter Parameters
  obj = {
    "purchased_on": {
      "start": DEFAULT_PURCHASE_ON_DATE,
      "end": new Date()
    },
    'price': {
      'low': FILTER_PRICE.LOW,
      'high': FILTER_PRICE.HIGH,
    },
    "quantity": null,
    "request_raised_by": '',
    "request_raised_on": {
      "start": DEFAULT_RAISED_ON_DATE,
      "end": new Date()
    },
    "description": ''
  }

  //Submit the Filtered parameters
  submitFilterParam() {
    this.filteredData.emit(this.obj)

  }

}
