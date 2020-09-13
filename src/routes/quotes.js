const { Router } = require('express');
const router = Router();
const _ = require('underscore');

const quotes = require('../sample.json');

router.get('/', (req, res) => {
    res.json(quotes);
});

router.post('/', (req, res) => {
    const { quote } = req.body;
    if(quote){
        const id = quotes.length + 1;
        const newTodo = {...req.body, id};
        quotes.push(newTodo);
        res.json(quotes);
    }
    else {
        res.status(500).json({"error": "Wrong Request"});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { quote } = req.body;
    if (quote){
        _.each(quotes, (quote, i) => {
            if(quote.id == id) {
                quotes.quote = quote;
            }
        });
        
    }
    else {
        res.status(500).json({"error": "Wrong Request"});
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(quotes, (quote, i) => {
        if(quote.id == id) {
            quotes.splice(i, 1);
        }
    });
    res.send(quotes);
});

module.exports = router;