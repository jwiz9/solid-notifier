const express = require('express');
const apiRoutes = require('./routes/apiRoutes/notes.js');
const htmlRoutes = require('./routes/htmlRoutes');

const PORT = process.env.PORT || 3001;

const app = express();

// Parse string or array data
app.use(express.urlencoded({extended: true}));

// Parse json data
app.use(express.json());

// CSS and JS readily available
app.use(express.static(__dirname + '/public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});