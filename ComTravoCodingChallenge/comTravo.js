const express = require('express');
const app = express();
const port = 3000;
const ComTravoUtil = require('./comTravo-util.js');

app.get('/getFlights', async (req, res) => {
  try{
      const result = await ComTravoUtil.uniqueFlights()
      res.send(result);
  } catch(error) {
      res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Start listening at http://localhost:${port}`)
})
