const axios = require('axios');
const cheerio = require('cheerio');

const messTypes = require('../../../../messageTypes');

const scrapeFighters = require('./components/scrapeFighters/scrapeFighters');
const scrapeDeatels = require('./components/scrapeDetail/scrapeDetail');

module.exports = async ( int, feedBack )=> {
    let result={};
    for( let i in int ){

        try{
            let html = await axios.get( int[i].urls );
            let $ = cheerio.load( html.data );
    
            let fighters = await scrapeFighters( $, feedBack );
            fighters[0].weightClass = int[i].weightClass;
            fighters[1].weightClass = int[i].weightClass;

            result[fighters[0].name] = fighters[0];
            result[fighters[1].name] = fighters[1];

            result = await scrapeDeatels( $, result, feedBack );

            let { collect_fighters } = messTypes.messageTypes;
            feedBack({ progress: 1, loadMessage: collect_fighters });

        } catch( err ){ return { error: 'Collecting Fighter Stats Was Not Successful'}};
    };
    return result;       
};


