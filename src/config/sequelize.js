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
    host: process.env.DB_HOST || 'localhost',
});

export const Models = {
    Author: sequelize.import('../db/models/author'),
    Tweet: sequelize.import('../db/models/tweet'),
};

Object.keys(Models).forEach(key => {
    if ('associate' in Models[key]) {
        Models[key].associate(Models);
    }
});

Models.sequelize = sequelize;
Models.Sequelize = Sequelize;

export default Models;
