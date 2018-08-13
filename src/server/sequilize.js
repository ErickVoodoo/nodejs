/**
 *  @Module
 *  src/server/sequilize.js
 *
 *  @flow
 *  @prettier
 */

import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: process.env.DB_DIALECT,
});

const models = {
    Author: sequelize.import('../models/author'),
    Tweet: sequelize.import('../models/tweet'),
};

Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
