
const { Router } = require('express');
const { uploadFile } = require('./config');

const router = Router();

router.get('/', (req, res) => res.send('Welcome to the server!'));

router.post('/upload', async(req, res) => {

    console.log(req.files['data'].tempFilePath);

    const result = await uploadFile(req.files['data']);
    console.log(result);
    
    res.send('File uploaded!');
});

module.exports = router;