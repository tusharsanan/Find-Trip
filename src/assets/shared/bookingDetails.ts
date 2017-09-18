export interface ContactDetail {
    class: string;
    address: string;
}

export interface Country {
    code: string;
    name: string;
}

export interface City {
    IATACode: string;
    name: string;
    country: Country;
}

export interface Origin {
    IATACode: string;
    name: string;
    city: City;
}

export interface DestinationCountry {
    code: string;
    name: string;
}

export interface DestinationCity {
    IATACode: string;
    name: string;
    country: DestinationCountry;
}

export interface Destination {
    IATACode: string;
    name: string;
    city: DestinationCity;
}

export interface DepartFromCountry {
    code: string;
    name: string;
}

export interface DepartFromCity {
    IATACode: string;
    name: string;
    country: DepartFromCountry;
}

export interface DepartFrom {
    IATACode: string;
    name: string;
    city: DepartFromCity;
}

export interface ArriveOnCountry {
    code: string;
    name: string;
}

export interface ArriveOnCity {
    IATACode: string;
    name: string;
    country: ArriveOnCountry;
}

export interface ArriveOn {
    IATACode: string;
    name: string;
    city: ArriveOnCity;
}

export interface Carrier {
    code: string;
    name: string;
}

export interface Status {
    code: string;
    name: string;
}

export interface SellingClass {
    code: string;
}

export interface OperatingFlightCarrier {
    code: string;
    name: string;
}

export interface ArrivalTerminal {
    name: string;
}

export interface Cabin {
    code: string;
    name: string;
}

export interface Equipment {
    code: string;
    name: string;
}

export interface OperatingFlight {
    number: string;
    carrier: OperatingFlightCarrier;
    duration: string;
    flown: boolean;
    checkInStart: string;
    localCheckInStart: string;
    checkInEnd: string;
    localCheckInEnd: string;
    scheduledArrival: string;
    localScheduledArrival: string;
    scheduledDeparture: string;
    localScheduledDeparture: string;
    arrivalTerminal: ArrivalTerminal;
    cabin: Cabin;
    equipment: Equipment;
}

export interface MarketingFlight {
    number: string;
    carrier: Carrier;
    status: Status;
    numberOfStops: number;
    sellingClass: SellingClass;
    operatingFlight: OperatingFlight;
}

export interface Segment {
    id: number;
    type: string;
    informational: boolean;
    departFrom: DepartFrom;
    arriveOn: ArriveOn;
    marketingFlight: MarketingFlight;
}

export interface Connection {
    id: number;
    duration: string;
    origin: Origin;
    destination: Destination;
    segments: Segment[];
}

export interface Itinerary {
    type: string;
    connections: Connection[];
}

export interface Title {
    code: string;
    name: string;
}

export interface Passengers {
    id: number;
    firstName: string;
    lastName: string;
    title: Title;
}

export interface BookingDetails {
    bookingCode: string;
    contactDetails: ContactDetail[];
    itinerary: Itinerary;
    passengers: Passengers;
}
