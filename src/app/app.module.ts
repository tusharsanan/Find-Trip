import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { AppComponent } from './app.component';
import { FindTripComponent } from './find-trip/find-trip.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RetrieveBookingService } from './services/retrieve-booking.service';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { BookingDetailsComponent } from './booking-details/booking-details.component';

export const ROUTES: Routes = [
  { path: '', component: FindTripComponent },
  { path: 'bookingDetails', component: BookingDetailsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FindTripComponent,
    BookingDetailsComponent
],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgxErrorsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RetrieveBookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
