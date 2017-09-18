import { Component, OnInit } from '@angular/core';
import { BookingDetails } from '../../assets/shared/bookingDetails';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.css']
})
export class BookingDetailsComponent implements OnInit {

  bookingItinery: BookingDetails;
  myObj: string;
  constructor() { }

  ngOnInit() {
    // Checking and retrieving trip details from the session storage key
    if (typeof Storage !== 'undefined') {
      this.myObj = sessionStorage.getItem('bookingValue');
    }
    this.bookingItinery = JSON.parse(this.myObj);
  }

}
