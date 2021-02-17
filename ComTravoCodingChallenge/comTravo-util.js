const axios = require('axios');
const apiUrl = 'https://discovery-stub.comtravo.com';
const apiUsername = 'ct_interviewee';
const apiPassword = 'supersecret';


async function getFlightEndpoint1() {
    try {
        const result = await axios({method: 'get', 
                                        url: `${ apiUrl }/source1`, 
                                        timeout: '400'});
        return result.data.flights;
    } catch (error) {
        console.log('an error happened', error.response.status);
        return [];
    }
}


async function getFlightEndpoint2() {
    try {
        const result = await axios({method: 'get',
                                    url: `${ apiUrl }/source2`,
                                    auth: { username: apiUsername, password: apiPassword }, 
                                    timeout: '400'});
        return result.data.flights;
    } catch (error) {
        console.log('an error happened', error.response.status);
        return [];
    }
}


const uniqueFlights = async () => {
        const flightResult1 = await getFlightEndpoint1();
        const flightResult2 = await getFlightEndpoint2();
        const mergeFlights = [...flightResult1, ...flightResult2];

    if(!mergeFlights.length){
        console.error('No flights found!');
        return; 
    }
  
    const uniqueFlights = mergeFlights.reduce((accumulator, current) => {
        const filteredFlights = accumulator.find( item => item.slices[0].flight_number === current.slices[0].flight_number && 
                                    item.slices[0].departure_date_time_utc === current.slices[0].departure_date_time_utc &&
                                    item.slices[1].flight_number === current.slices[1].flight_number && 
                                    item.slices[1].departure_date_time_utc === current.slices[1].departure_date_time_utc);
      if (!filteredFlights) {
        return accumulator.concat([current]);
      } 
      return accumulator;
    }, []);
  
    return uniqueFlights;
  }


exports.uniqueFlights = uniqueFlights;