import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RetrieveBookingService } from '../services/retrieve-booking.service';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { FindTripComponent } from './find-trip.component';

class MockRouter {
    navigateByUrl(url: string) { return url; }
}

describe('FindTripComponent', () => {
  let component: FindTripComponent;
  let fixture: ComponentFixture<FindTripComponent>;
  let retrieveBookingService: RetrieveBookingService;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindTripComponent ], // Declaraing the find trip component
      providers: [ RetrieveBookingService, FormBuilder, { provide: Router, useClass: MockRouter } ],
      imports: [ HttpModule, ReactiveFormsModule, NgxErrorsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindTripComponent);
    component = fixture.componentInstance; // Trip component test instance
    retrieveBookingService = fixture.debugElement.injector.get(RetrieveBookingService); // Getting service from injector of Trip component
    router = fixture.debugElement.injector.get(Router);
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  // Checking for from building
  it('should build a form to retrieve the booking', () => {
    expect(component.buildRetrieveBookingForm).toBeTruthy();
  });

  // Checking for invalid input
  it('should make the form invalid with invalid input', () => {
      component.findTrip.controls['bookingCode'].setValue('123');
      expect(component.findTrip.valid).toBeFalsy();
  });

  // Checking for invalid input
  it('should make the form invalid with invalid input', () => {
    component.findTrip.controls['familyName'].setValue('1');
    expect(component.findTrip.valid).toBeFalsy();
  });

  // Checking for valid input
  it('should make form valid with valid input', () => {
    component.findTrip.controls['bookingCode'].setValue('TGRS2');
    component.findTrip.controls['familyName'].setValue('NAME');
    expect(component.findTrip.valid).toBeTruthy();
  });

  // Checking for minimum length form error
  it('should throw minimum length error, if entered field value is less than the minimum length', () => {
    component.findTrip.controls['bookingCode'].setValue('CODE');
    component.findTrip.controls['familyName'].setValue('A');
    expect(component.findTrip.controls['bookingCode'].hasError('minlength')).toBeTruthy();
    expect(component.findTrip.controls['familyName'].hasError('minlength')).toBeTruthy();
  });

  // Checking for maximum length form error
  it('should throw maximum length error, if entered field value is more than the maximum length', () => {
    component.findTrip.controls['bookingCode'].setValue('fooandgooaregone');
    component.findTrip.controls['familyName'].setValue('LorelIpsumLorelIpsumLorelIpsumLorelIpsumLorelIpsum');
    expect(component.findTrip.controls['bookingCode'].hasError('maxlength')).toBeTruthy();
    expect(component.findTrip.controls['familyName'].hasError('maxlength')).toBeTruthy();
  });

   // Checking for routing
   it('should navigate to Booking details when clicked on submit', async(() => {
      component.findTrip.controls['bookingCode'].setValue('PZIGZ3');
      component.findTrip.controls['familyName'].setValue('HESP');
      fixture.detectChanges();
      const native = fixture.debugElement.nativeElement;
      const button = native.querySelector('button');

      button.click();

      fixture.whenStable().then(() => {
        fixture.detectChanges();
        expect(router.navigateByUrl).toHaveBeenCalledWith(['/details']);
      });
   }));
});
