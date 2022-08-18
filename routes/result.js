const express = require('express');
const { PeslaRes } = require('../models');
const router = express.Router();

router.post('/', async (req, res, next) => {
    try {

        const { vision_l, vision_r,
            nan_l, nan_r,
            nan_axis_l, nan_axis_r,
            super_vision_l, super_vision_r,
            thick_l, thick_r,
            fix_q_l, fix_q_r,
            remain_l, remain_r,
            night_l, night_r,
            eyes_water_l, eyes_water_r,
            internal_l, internal_r,
        } = req.body;

        await PeslaRes.create({
            vision_l, vision_r,
            nan_l, nan_r,
            nan_axis_l, nan_axis_r,
            super_vision_l, super_vision_r,
            thick_l, thick_r,
            fix_q_l, fix_q_r,
            remain_l, remain_r,
            night_l, night_r,
            eyes_water_l, eyes_water_r,
            internal_l, internal_r,
        });

        const high = vision_l > 5;
        res.render('main', {
            value: high,
            result: true,
        });

    } catch (err) {
        console.error(err);
        return next(err);
    }
});

module.exports = router;