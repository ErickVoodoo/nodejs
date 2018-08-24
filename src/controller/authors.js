/**
 *  @Module
 *  src/controller/authors.js
 * 
 *  @flow
 *  @prettier
 */

import Models from '../config/sequelize';

export class ControllerAuthors {
    constructor(Express) {
        Express.get('/users', (req, res) => {
            Models.Author.findAll().then(users => {
                res.status(200).send({
                    users,
                });
            });
        });

        Express.get('/users/:userId', (req, res) => {
            const { params: { userId } } = req;

            if (userId) {
                Models.Author.findById(userId).then(user => {
                    res.status(200).send({
                        user,
                    });
                }).catch(() => {
                    res.status(404).send({
                        status: 404,
                        message: 'User not found',
                    });
                });
            }
        });

        Express.post('/users', (req, res) => {
            const body = req.body

            if (body) {
                const mappedBody = {
                    username: body.username,
                    first_name: body.first_name,
                };

                Models.Author.create(mappedBody).then(user => {
                    res.status(200).send({
                        user,
                    });
                });
            } else {
                res.status(403).send({
                    status: 403,
                    message: 'Body not present',
                });
            }
        });
    }
}


