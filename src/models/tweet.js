/**
 *  @Module
 *  src/models/twit.js
 * 
 *  @flow
 *  @prettier
 */

const ModelTweet = (sequelize, DataTypes) => {
    const Tweet = sequelize.define('tweet', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        underscored: true,
    });

    Tweet.associate = models => {
        Tweet.belongsTo(models.Author);
    };

    return Tweet;
};

export default ModelTweet;
