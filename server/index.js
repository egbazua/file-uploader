const express = require('express');
const fileUpload = require('express-fileupload');

const app = express();

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './files'
}))

app.listen(3004);

console.log(`Server on port: ${3004}`);