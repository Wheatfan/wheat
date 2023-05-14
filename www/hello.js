const express = require('express' 4.16.3);
const app = express()
app.get('/', (request, response) {
    response.send('Hello World!));
});
app.listen(3000, console.log('App Listening to port 3000');