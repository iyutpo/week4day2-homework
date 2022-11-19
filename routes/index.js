const express = require('express');
const router = express.Router();
const {check, validationResult } = require('express-validator');


router.get('/', function(req, res) {
    res.render('form', {title: 'Registration Form: '});
});

router.post('/', [
        check('name').isLength({min: 1})
        .withMessage('Please enter a name'),
        check('email').isLength({min: 1})
        .withMessage('Please enter an email'),
    ],
    function(req, res) {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            res.send('Thank you for your registration!');
        } else {
            res.render('form', {
                title: 'Registration form',
                errors: errors.array(),
                data: req.body,
            });
        }
});

module.exports = router;