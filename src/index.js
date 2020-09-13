var myLoggers = require('log4js');
const logger = myLoggers.getLogger("default");
const express = require('express');
const app = express()
const fs = require('fs')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { compile } = require('morgan');
const { response } = require('express');
var accessLogStream = fs.createWriteStream('logs/client.log');

//settings
app.set('port', 3000 || process.env.PORT);
app.set('json spaces', 2);

//routes
app.use(bodyParser.json());
app.use(require('./routes/index'));
app.use('/api/quotes', require('./routes/quotes'));
app.use('/api/users', require('./routes/users'));

//middlewares
app.use(morgan('combined', { stream: accessLogStream}));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// starting server
app.listen(app.get('port'), () => {
    console.log(`Server listening on port ${app.get('port')}`);
});