const uniqueFlights = require('./uniqueFlights.js');

const flightResult1 = [
                        {"slices": [
                            {
                                "origin_name": "Schonefeld",
                                "destination_name": "Stansted",
                                "departure_date_time_utc": "2019-08-08T04:30:00.000Z",
                                "arrival_date_time_utc": "2019-08-08T06:25:00.000Z",
                                "flight_number": "144",
                                "duration": 115
                            },
                            {
                                "origin_name": "Stansted",
                                "destination_name": "Schonefeld",
                                "departure_date_time_utc": "2019-08-10T06:50:00.000Z",
                                "arrival_date_time_utc": "2019-08-10T08:40:00.000Z",
                                "flight_number": "145",
                                "duration": 110
                            }
                        ],
                        "price": 129},
                        {"slices": [
                            {
                                "origin_name": "Schonefeld",
                                "destination_name": "Stansted",
                                "departure_date_time_utc": "2019-08-08T20:25:00.000Z",
                                "arrival_date_time_utc": "2019-08-08T22:25:00.000Z",
                                "flight_number": "8545",
                                "duration": 120
                            },
                            {
                                "origin_name": "Stansted",
                                "destination_name": "Schonefeld",
                                "departure_date_time_utc": "2019-08-10T18:00:00.000Z",
                                "arrival_date_time_utc": "2019-08-10T20:00:00.000Z",
                                "flight_number": "8544",
                                "duration": 120
                            }
                        ],
                        "price": 117.01}
                    ];
const flightResult2 = [{"slices": [
                            {
                                "origin_name": "Schonefeld",
                                "destination_name": "Stansted",
                                "departure_date_time_utc": "2019-08-08T04:30:00.000Z",
                                "arrival_date_time_utc": "2019-08-08T06:25:00.000Z",
                                "flight_number": "144",
                                "duration": 115
                            },
                            {
                                "origin_name": "Stansted",
                                "destination_name": "Schonefeld",
                                "departure_date_time_utc": "2019-08-10T06:50:00.000Z",
                                "arrival_date_time_utc": "2019-08-10T08:40:00.000Z",
                                "flight_number": "145",
                                "duration": 110
                            }
                        ],
                        "price": 129}];
const expectedResult = [{"slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Stansted",
                        "departure_date_time_utc": "2019-08-08T04:30:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T06:25:00.000Z",
                        "flight_number": "144",
                        "duration": 115
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T06:50:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T08:40:00.000Z",
                        "flight_number": "145",
                        "duration": 110
                    }
                ],
                "price": 129},
                {"slices": [
                    {
                        "origin_name": "Schonefeld",
                        "destination_name": "Stansted",
                        "departure_date_time_utc": "2019-08-08T20:25:00.000Z",
                        "arrival_date_time_utc": "2019-08-08T22:25:00.000Z",
                        "flight_number": "8545",
                        "duration": 120
                    },
                    {
                        "origin_name": "Stansted",
                        "destination_name": "Schonefeld",
                        "departure_date_time_utc": "2019-08-10T18:00:00.000Z",
                        "arrival_date_time_utc": "2019-08-10T20:00:00.000Z",
                        "flight_number": "8544",
                        "duration": 120
                    }
                ],
                "price": 117.01}
            ]; 
// ---------------------------------------------------------------------------------

describe('While testing uniqueFlights function', () => {
    test('1.Should return uniqueFlights when input params are valid', () => {
        expect(uniqueFlights(flightResult1, flightResult2)).toStrictEqual(expectedResult);
      });

    test('2.Should only filter flightResult2 when flightResult1 is undefined', () => {
        expect(uniqueFlights(undefined, flightResult2)).toStrictEqual(flightResult2);
      });
      
    test('3.Should only filter flightResult1 when flightResult2 is undefined', () => {
        expect(uniqueFlights(flightResult1, undefined)).toStrictEqual(flightResult1);
      });

    test('4.Should only return undefined when flightResult2 and flightResult2 are undefined', () => {
        expect(uniqueFlights(undefined, undefined)).toBe(undefined);
      });

    test('5.Should only return flightResult1 when flightResult2 is empty array', () => {
        expect(uniqueFlights(flightResult1, [])).toStrictEqual(flightResult1);
      });

    test('6.Should only return flightResult2 when flightResult1 is empty array', () => {
        expect(uniqueFlights([], flightResult2)).toStrictEqual(flightResult2);
      });

    test('7.Should only return undefined when flightResult2 and flightResult2 are empty array', () => {
        expect(uniqueFlights([], [])).toBe(undefined);
      });

    });

