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
import helmet from 'helmet';
import Models from './sequelize';
import cors from 'cors';
import { InitControllers } from '../controller';

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// Enable cors
app.use(cors());
// Security
app.use(helmet());

Models.sequelize.sync({ force: JSON.parse(process.env.DEVELOPMENT) }).then(() => {
    app.listen(process.env.PORT, process.env.HOST, null, () => {
        console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);
    });
});

InitControllers(app);

export const Express = app;
export default app;
