/**
 *  @Module
 *  src/models/author.js
 * 
 *  @flow
 *  @prettier
 */

const ModelAuthor = (sequelize, DataTypes) => {
    const Author = sequelize.define('author', {
        id: {
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        username: {
            type: DataTypes.STRING,
            unique: true,
        },
        first_name: {
            type: DataTypes.STRING,
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
