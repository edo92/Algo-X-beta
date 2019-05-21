const scrapeContestUrl = require('./components/contestUrls/scrapeContestUrl');
const scrapeContestStats = require('./components/contestStats/scrapeContestStats');
const countScore = require('../../../scrapeData/pastEvents/scrapeFighterList/components/countScore/countScore');

module.exports = async ( client, feedBack ) => {
    let url = client.url;
    try{
        let intData = await scrapeContestUrl( url, feedBack );

        let stats = await scrapeContestStats( intData, feedBack );

        let fullList = countScore( stats, feedBack );

        return fullList;

    } catch( error ) { throw error; return { error: 'Collecting Data Was Not Successful' }};
};

