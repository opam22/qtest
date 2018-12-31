const { data } = require('./data.js');
const http = require('http')
const port = 3000

function improveJSON(rawData) {
    keys = getKeys(rawData);
    values = getValues(keys, rawData);

    response = {
        'h': keys,
        'd': values
    }

    return response;
}

function getValues(keys, rawData) {
    let container = [];
    rawData.forEach(element => {

        let values = [];
        
        keys.forEach(key => {
            values.push(element[key])
        });

        container.push(values);

    });

    return container;
}

function getKeys(rawData) {
    let keys = [];

    rawData.forEach(element => {
        keys = Object.keys(element)
    });

    return keys;
}

const requestHandler = (request, response) => {

    if (request.url != '/favicon.ico') {
        json = improveJSON(data);

        response.setHeader('Content-Type', 'application/json');
        response.end(JSON.stringify(json));
    }
        
  }
  
  const server = http.createServer(requestHandler)
  
  server.listen(port, (err) => {
    if (err) {
      return console.log('something bad happened', err)
    }
  
    console.log(`server is listening on ${port}`)
  })


