const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes/index');

// Setting up the public directory for static files
app.use(express.static(path.join(__dirname, 'public')));

// Setting up the views directory
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');  

// Use the routes
app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:3000');
});
