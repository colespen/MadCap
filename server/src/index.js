// load .env data into process.env
// require('dotenv').config();
require('./environment');
// const helmet = require("helmet");
// const cors = require("cors");

// Web server config
const express = require('express');
const morgan = require('morgan');



const PORT = process.env.PORT || 8001;
const app = express();


// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own

const catgeoriesRoutes = require('./routes/categories-api');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`


app.use('/api/categories', catgeoriesRoutes);


//sockets
const http = require("http").createServer(app);
app.io = require("socket.io")(http)


http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});

require('./routes/sockets')(app)





// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`);

// });


