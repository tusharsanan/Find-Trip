import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RetrieveBookingService } from '../services/retrieve-booking.service';
import { Router } from '@angular/router';
import { BookingDetails } from '../../assets/shared/bookingDetails';
import { Error } from '../../assets/shared/error';

@Component({
  selector: 'app-find-trip',
  templateUrl: './find-trip.component.html',
  styleUrls: ['./find-trip.component.css']
})
export class FindTripComponent implements OnInit {

  findTrip: FormGroup;
  bookingItinerary: BookingDetails;
  bookingError: Error;

  constructor(
    private fb: FormBuilder,
    private _retrieveBookingService: RetrieveBookingService,
    private router: Router) { }

  ngOnInit() {
    this.buildRetrieveBookingForm();
  }

// Builds the form to retrieve the booking
  buildRetrieveBookingForm() {
    this.findTrip = this.fb.group({
      bookingCode: ['', [
        Validators.maxLength(6),
        Validators.minLength(5),
        // Validation to allow numbers between [2-9]
        Validators.pattern('[2-9,a-z,A-Z]*$')]
      ],
      familyName: ['', [
        Validators.minLength(2),
        Validators.maxLength(30),
        // Validation to allow only alphabets
        Validators.pattern('[a-z,A-Z]*$')]
      ]
    });
  }

  // Checks for the input data with the mock data and if matches, navigates to details page or else throws error
  retrieveBooking() {
    this._retrieveBookingService.getItinerary().subscribe(data => {

      // If booking code and family name matches, redirect to 'Details' view else throw error
      if (data.bookingCode === this.findTrip.value.bookingCode &&
          data.passengers.lastName === this.findTrip.value.familyName) {
          this.bookingItinerary = data;

          // Checking if Storage is defined and setting the response in the session storage else throw error.
          if (typeof Storage !== 'undefined') {
            sessionStorage.setItem('bookingValue', JSON.stringify(this.bookingItinerary));
          }
          this.router.navigate(['/bookingDetails']);
        } else if (this.findTrip.value.bookingCode === '' || this.findTrip.value.familyName === '') {
          this.bookingError = {
            statusCode: 400, // Error if either of the input fields are empty
            message: 'Kindly enter the booking code and family name.'
          };
        } else {
          this.bookingError = { // Error if the Bookimg code and Family name doesn't match
            statusCode: 404,
            message: `We could not find your booking information.
                      Please check your booking code or family name, or contact the Service center.`
          };
        }
      },
      error => {
        this.bookingError = <any>'error'; // Error if failed to subscribe
      }
    );
  }
}
