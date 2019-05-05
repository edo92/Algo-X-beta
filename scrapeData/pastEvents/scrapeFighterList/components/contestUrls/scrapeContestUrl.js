const axios = require('axios');
const cheerio = require('cheerio');
const messTypes = require('../../../../messageTypes');

module.exports = async ( url, feedBack )=> {
    try{
        let html = await axios.get( url );
        let $ = cheerio.load( html.data );
        
        let links = await scrapeUrl( $, feedBack );

        return links;

    } catch( err ){ return { error: 'Collecting Data Was Not Successful' }};
}

const scrapeUrl = ( $, feedBack )=> {
    let links =[];

    $(`tr.b-fight-details__table-row`).each(( i, elem )=> {
        let contestUrl = $(elem).find('td').find('a').attr('href');
        if( i > 0 ) links.push( contestUrl.replace(/\s\s+/g, ' ').trim() );
        
        let { initializing } = messTypes.messageTypes;
        feedBack({ progress: 1 , loadMessage: initializing });
    });

    return links
};