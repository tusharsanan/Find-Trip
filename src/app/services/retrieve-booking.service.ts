import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class RetrieveBookingService {
private MOCK_ITINERARY = './assets/shared/mock.json';
constructor(private http: Http) { }

public getItinerary() {
  return this.http
    .get(this.MOCK_ITINERARY)
    .map((response: Response) => response.json())
    .catch(this.handleError);
}

private handleError(error: Response | any) {
  return Observable.throw(error);
}

}
