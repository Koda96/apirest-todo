const { Router } = require('express');
const router = Router();

router.get('/quotes', (req, res) => {
    const data = {
        "id": "1",
        "quote": "Hola como estas?"
    };
    res.json(data);
});

module.exports = router;