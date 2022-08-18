const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', async (req, res, next) => {

    try {
        console.log(req.params);
        //res.sendFile(path.join(__dirname, '../views/main.html'));
        res.render("main");
        //res.send('heeloo');
    } catch (error) {
        console.error(error);
        next(error);
    }

});

module.exports = router;