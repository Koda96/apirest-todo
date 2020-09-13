const { Router } = require('express');
const router = Router();
const fetch = require ('node-fetch');

router.get('/', async (req, res) => {
    const response = await fetch('https://filebin.net/6bgi34xmfac01e7a/tareas.json?t=6ckqyrxb');
    const users = await response.json();
    res.json(users);
});

module.exports = router;