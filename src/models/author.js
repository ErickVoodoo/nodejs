/**
 *  @Module
 *  src/models/author.js
 * 
 *  @flow
 *  @prettier
 */

const ModelAuthor = (sequelize, DataTypes) => {
    const Author = sequelize.define('author', {
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
    }, {
        underscored: true,
    });

    Author.associate = models => {
        Author.hasMany(models.Tweet);
    };

    return Author;
};

export default ModelAuthor;
