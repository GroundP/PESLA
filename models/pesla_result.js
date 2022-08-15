const Sequelize = require('sequelize');

module.exports = class PeslaRes extends Sequelize.Model {
    static init(sequelize) {
        return super.init({
            vision_l: {
                type: Sequelize.INTEGER,
            },
            vision_r: {
                type: Sequelize.INTEGER,
            },
            nan_l: {
                type: Sequelize.INTEGER,
            },
            nan_r: {
                type: Sequelize.INTEGER,
            },
            nan_axis_l: {
                type: Sequelize.INTEGER,
            },
            nan_axis_r: {
                type: Sequelize.INTEGER,
            },
            super_vision_l: {
                type: Sequelize.INTEGER,
            },
            super_vision_r: {
                type: Sequelize.INTEGER,
            },
            thick_l: {
                type: Sequelize.INTEGER,
            },
            thick_r: {
                type: Sequelize.INTEGER,
            },
            fix_q_l: {
                type: Sequelize.INTEGER,
            },
            fix_q_r: {
                type: Sequelize.INTEGER,
            },
            remain_l: {
                type: Sequelize.INTEGER,
            },
            remain_r: {
                type: Sequelize.INTEGER,
            },
            night_l: {
                type: Sequelize.INTEGER,
            },
            night_r: {
                type: Sequelize.INTEGER,
            },
            eyes_water_l: {
                type: Sequelize.INTEGER,
            },
            eyes_water_r: {
                type: Sequelize.INTEGER,
            },
            internal_l: {
                type: Sequelize.INTEGER,
            },
            internal_r: {
                type: Sequelize.INTEGER,
            },
        }, {
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'PeslaRes',
            tableName: 'pesla_result',
            paranoid: false,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
}