
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.send('Welcome to the server!'));
router.post('/upload', (req, res) => {
    console.log(req.files);
    res.send('File uploaded!');
});

module.exports = router;