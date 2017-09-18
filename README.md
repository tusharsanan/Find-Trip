# Find-Trip
This is to retrieve the booking details for a passenger by doing web check in.

This project is built on Angular 4 with TypeScript, HTML5, CSS3, SCSS, fully responsive and Angular-CLI is used to bootstrap the application.

There are a couple of components and services powering this application. The first component is the find trip component which allows the user to enter his/her booking code and family name. The component consists of a reactive form, built using ReactiveFormsModule to capture the user's booking code, family name, and has a 'Retrieve booking' button which the users can click to retrieve the booking (if present). This component throws several field level validation errors on booking code and family name, and some top level error messages if the trip details are not found or if either one of the booking code or the family name input field is empty.
This component has its template in an external file, the component level SCSS in an external SCSS file. The corresponding compiled CSS files are generated next to the SCSS files, using Koala.

Once the user clicks on 'Retrieve booking', in a happy path scenario, there is a service call which fetches the data from a mock json file, and if the user inputs matches the data with the mock json file, routing happens which takes the user to Details view. The mock json file is placed in the assests folder.

The next component is the Booking Details component, which displays the user's flight data to him/her, if found. This view will list down the passenger's name, date, flight number, depart from, arrive at, the check in start date, the cabin details, the seat number, departure time and arrival time, and is responsive as well.

The RetrieveBookingService is responsible for retrieving mock trip data and inject into the find trip component. The service call involves the use of Observables from RxJS and HTTP module to fetch the data from mock.json and return corresponding errors if not found.

With the help of Karma and Jasmine, the unit testing for the components and services has been done and protractor is used for basic End to End testing.

Kindly use the Booking Code: PZIGZ3 and Family Name: HESP to retrieve the booking details.
