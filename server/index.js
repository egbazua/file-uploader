const express = require('express');
const fileUpload = require('express-fileupload');
const dataRoutes = require('./data.routes');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './files'
}));

app.use(dataRoutes);

app.listen(3004);

console.log(`Server on port: ${3004}`);