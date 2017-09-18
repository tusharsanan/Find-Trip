import { TestBed, inject, async } from '@angular/core/testing';
import { HttpModule, Http, Response, ResponseOptions, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

import { RetrieveBookingService } from './retrieve-booking.service';

describe('RetrieveBookingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        RetrieveBookingService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
  });

  it('should be created', inject([RetrieveBookingService], (service: RetrieveBookingService) => {
    expect(service).toBeTruthy();
  }));

  describe('getItinerary() to get the itinerary details', () => {
    it('should return an observable with the data from the specified url',
      inject([RetrieveBookingService, XHRBackend], (service, mockBackend) => {
        const mockResponse = {
          bookingCode: 'PZIGZ3',
          familyName: 'HESP'
        };

        mockBackend.connections.subscribe((connection) => {
          connection.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify(mockResponse)
          })));
        });

        service.getItinerary().subscribe(data => {
          expect(data.bookingCode).toEqual('PZIGZ3');
          expect(data.familyName).toEqual('HESP');
        });

      }));
  });

});
