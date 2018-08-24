/**
 *  @Module
 *  src/controller/index.js
 * 
 *  @flow
 *  @prettier
 */

import { ControllerAuthors } from './authors';

export const InitControllers = express => {
    new ControllerAuthors(express);
};
