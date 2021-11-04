require('dotenv').config();
const express = require('express');
const server = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./routes');

mongoose.Promise = global.Promise;

const dbConnection = `${process.env.MONGO_URL}`;

mongoose
	.connect(dbConnection, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('connected to database'))
	.catch((error) => console.log(`error connecting to Mongo: ${error}`));

const corsOptions = {
	origin: '*',
	credentials: true, //access-control-allow-credentials:true
	optionSuccessStatus: 200,
};

server.use(cors(corsOptions));
server.use(cookieParser());
server.use(express.json());
server.use(morgan('dev'));

server.use('/api', routes);

server.listen(process.env.PORT || 3000);
