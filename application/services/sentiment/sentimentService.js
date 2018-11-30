/**
 * Node Modules
 */
const sentiment = require('sentiment-ptbr');
const SentimentEn = require('sentiment');

const analyze = async (text, language) => language == 'en' ?  new SentimentEn().analyze(text) : sentiment(text);

module.exports = { analyze };