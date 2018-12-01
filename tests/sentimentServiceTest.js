const test = require('tape');

const sentimentService = require('../application/services/sentiment/sentimentService');

test('sentimentService test', async t => {
    t.plan(5);

    const negativeAnalysisEn = await sentimentService.analyze('Cats are stupid.', 'en');
    t.equal(negativeAnalysisEn.score, -2, 'Sentiment analysis must be equal to -2');
    t.equal(negativeAnalysisEn.words[0], 'stupid');

    const negativeAnalysisBr = await sentimentService.analyze('Não quero ficar sozinho no natal!', 'br');
    t.equal(negativeAnalysisBr.score, -3, 'Sentiment analysis must be equal to -3');

    const positiveAnalysisEn = await sentimentService.analyze('Cats are amazing.', 'en');
    t.equal(positiveAnalysisEn.score, 4, 'Sentiment analysis must be equal to 4');

    const positiveAnalysisBr = await sentimentService.analyze('Meu nata será o mais brilhante!', 'br');
    t.equal(positiveAnalysisBr.score, 4, 'Sentiment analysis must be equal to 4');
});