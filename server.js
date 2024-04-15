const bodyParser = require('body-parser');
const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./config/db');

const tickets = require('./routes/ticket');

const cors = require('cors');

dotenv.config({ path: './.env'});

connectDB();

const app = express();

app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

app.use(logger);
app.use(errorHandler);
app.use('/ticket', tickets);

const PORT = process.env.PORT || 5001;

const server = app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT}`));

process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    server.close(() => process.exit(1));
});