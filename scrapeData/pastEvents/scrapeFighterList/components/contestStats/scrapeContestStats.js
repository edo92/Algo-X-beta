const axios = require('axios');
const cheerio = require('cheerio');

const messTypes = require('../../../../messageTypes');

const scrapeFighters = require('./components/scrapeFighters/scrapeFighters');
const scrapeDeatels = require('./components/scrapeDetail/scrapeDetail');

module.exports = async ( link, feedBack )=> {
    let result={};
    for( let i in link ){
        try{
            let html = await axios.get( link[i] );
            let $ = cheerio.load( html.data );
    
            let fighters = await scrapeFighters( $, feedBack );
            result[fighters[0].name] = fighters[0];
            result[fighters[1].name] = fighters[1];
    
            result = await scrapeDeatels( $, result, feedBack );

            let { collect_fighters } = messTypes.messageTypes;
            feedBack({ progress: 1, loadMessage: collect_fighters });

        } catch( err ){ return { error: 'Collecting Fighter Stats Was Not Successful'}};
    };
    return result;       
};


