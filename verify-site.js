const http = require('http');

http.get('http://localhost:4173/', (res) => {
  let body = '';
  res.on('data', chunk => body += chunk);
  res.on('end', () => {
    console.log('HTTP Status:', res.statusCode);
    console.log('Body length:', body.length);
    console.log('Includes schema.org:', body.includes('schema.org'));
    console.log('Includes Prosper Woinsou:', body.includes('Prosper Woinsou'));
    console.log('Includes Toviklin:', body.includes('Toviklin'));
    console.log('Includes GeoCoordinates:', body.includes('GeoCoordinates'));
  });
}).on('error', err => {
  console.error('Fetch error:', err.message);
});

