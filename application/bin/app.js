/**
 * Local Modules
 */
const twitterService = require('../services/twitter/twitterService');
const sentimentService = require('../services/sentiment/sentimentService');
const logService = require('../services/log/logService');
const commandService = require('../services/command/commandService');
const blinkService = require('../services/raspberry/blinkService');


/**
 * Node Modules
 */
const sleep = require('sleep');
const emoji = require('node-emoji');

require('dotenv').config()

const run = async () => {
    const options = await commandService.handleInputs();

    console.dir(options);

    //Twitter Stream
    const stream = await twitterService.getStream(options.word ? options.word : process.env.TRACKING_WORD);

    stream.on('error', error => logService.logError(error));

    stream.on('data', async tweet => {

        //Sentiment Analysis 
        const analysis = await sentimentService.analyze(
            tweet.text,
            options.language ? options.language : process.env.LANGUAGE,
        )
        
        emojiScore = 'neutral_face';
        pin = Number(process.env.GREEN_PIN);
        
        if (analysis.score < 0) {
            emojiScore = 'gun';
            pin = Number(process.env.RED_PIN);
        } else if (analysis.score > 0) {
            emojiScore = 'smiley';
        }

        //blinkService.blink(pin);

        console.log(emoji.get(emojiScore));
        console.log(`@${tweet.user.screen_name}`);

        console.log(tweet && tweet.text);
        console.dir(analysis);

        sleep.sleep(Number(options.sleep ? options.sleep : process.env.SLEEP_TIME));

        console.log("\n\n");
    });
}; 

module.exports = { run };