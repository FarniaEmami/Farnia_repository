const ComTravoUtil = require('./comTravo-util.js');


ComTravoUtil.uniqueFlights().then((data) => {
    console.log(data);
    // data.forEach(function(item) {
    //     console.log(item);
    //   });
  }).catch((error) => {
    console.log(error);
  })
    