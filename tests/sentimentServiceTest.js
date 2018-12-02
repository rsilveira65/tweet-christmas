/**
 * Node Modules
 */
const test = require('tape');
const tapSpec = require('tap-spec');

/**
 * Local Modules
 */
const sentimentService = require('../application/services/sentiment/sentimentService');

test.createStream()
    .pipe(tapSpec())
    .pipe(process.stdout);

test('sentimentService test', async t => {
    t.plan(19);

    const negativeAnalysisEn = await sentimentService.analyze('Cats are stupid.', 'en');
    t.equal(negativeAnalysisEn.score, -2, 'Sentiment analysis must be equal to -2');
    t.equal(negativeAnalysisEn.tokens[0], 'cats');
    t.equal(negativeAnalysisEn.tokens[1], 'are');
    t.equal(negativeAnalysisEn.tokens[2], 'stupid');

    t.equal(negativeAnalysisEn.words[0], 'stupid');

    t.equal(negativeAnalysisEn.negative[0], 'stupid');

    const negativeAnalysisBr = await sentimentService.analyze('Não quero ficar sozinho no natal!', 'br');
    t.equal(negativeAnalysisBr.score, -3, 'Sentiment analysis must be equal to -3');
    t.equal(negativeAnalysisBr.tokens[0], 'não');
    t.equal(negativeAnalysisBr.tokens[1], 'quero');
    t.equal(negativeAnalysisBr.tokens[2], 'ficar');
    t.equal(negativeAnalysisBr.tokens[3], 'sozinho');
    t.equal(negativeAnalysisBr.tokens[4], 'no');
    t.equal(negativeAnalysisBr.tokens[5], 'natal');

    t.equal(negativeAnalysisBr.words[0], 'sozinho');
    t.equal(negativeAnalysisBr.words[1], 'não');

    t.equal(negativeAnalysisBr.negative[0], 'sozinho');
    t.equal(negativeAnalysisBr.negative[1], 'não');

    const positiveAnalysisEn = await sentimentService.analyze('Cats are amazing.', 'en');
    t.equal(positiveAnalysisEn.score, 4, 'Sentiment analysis must be equal to 4');

    const positiveAnalysisBr = await sentimentService.analyze('Meu nata será o mais brilhante!', 'br');
    t.equal(positiveAnalysisBr.score, 4, 'Sentiment analysis must be equal to 4');
});
