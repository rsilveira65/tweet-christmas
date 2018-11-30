/**
 * Node Modules
 */
const Twitter = require('twitter');
require('dotenv').config()

const getStream = async trackingWord => {
    const client = new Twitter({
        consumer_key: String(process.env.CONSUMER_KEY),
        consumer_secret: String(process.env.CONSUMER_SECRET),
        access_token_key: String(process.env.ACCESS_TOKEN_KEY),
        access_token_secret: String(process.env.ACCESS_TOKEN_SECRET)
    });

    return client.stream('statuses/filter', {track: String(trackingWord)})
};

module.exports = { getStream }



