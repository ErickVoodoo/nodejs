/**
 *  @Module
 *  src/server/server.js
 * 
 *  @flow
 *  @prettier
 */

import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import models from './sequilize';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/users', (req, res) => {
    res.status(200).send({
        users: [{
            id: 1,
        }],
    });
});

models.sequelize.sync({ force: JSON.parse(process.env.DEVELOPMENT) }).then(() => {
    app.listen(process.env.PORT, process.env.HOST, null, () => {
        console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);
    });
});
