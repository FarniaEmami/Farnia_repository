
function uniqueFlights(flightResult1, flightResult2){

    const mergeFlights = [...flightResult1 || [], ...flightResult2 || []];

    if(!mergeFlights.length){
        console.log('No flights found!');
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

module.exports = uniqueFlights;