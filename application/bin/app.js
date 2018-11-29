/**
 * Local Modules
 */
const twitterService = require('../services/twitterService');
const sentimentService = require('../services/sentimentService');
const logService = require('../services/logService');
const argumentService = require('../services/argumentService');

/**
 * Node Modules
 */
var sleep = require('sleep');
require('dotenv').config()

const run = async () => {
    const options = await argumentService.handleInputs();

    console.dir(options);

    //Twitter Stream
    const stream = await twitterService.getStream(options.word ? options.word : process.env.TRACKING_WORD);

    stream.on('error', error => logService.logError(error));

    stream.on('data', event => {
        console.log(event && event.text);
        
        //Sentiment Analysis 
        console.dir(
            sentimentService.analyze(
                event.text,
                options.language ? options.language : process.env.LANGUAGE,
            )
        );

        sleep.sleep(Number(options.sleep ? options.sleep : process.env.SLEEP_TIME));

        console.log("\n\n");
    });
};

module.exports = { run };