const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async () => {
    const pageURL = 'http://www.ufcstats.com/statistics/events/completed';
    let upcomingEvent = await getUpcomingEvent( pageURL );
    let { eventUrl, eventName } = upcomingEvent.event;
    let { evURL } = upcomingEvent.linkURL;
    let eventDate = upcomingEvent.date;
    let fighterList = await getFighterList( eventUrl );
    let event = { eventName, fighterList, evURL, eventDate };
    return event;
};

//---- Scrape -----
const getUpcomingEvent = async url => { // Scrape Event Name & URL
    try{
        let html = await axios.get( url );
        let $ = cheerio.load( html.data );
        let event = queryHTML( $ ); 
        let linkURL = await eventURL( $ );
        let date = await eventDate( $ );

        return { event, linkURL, date };

    } catch( error ){ throw error };

    async function eventURL( $ ){
        var url={}
        $(`tr.b-statistics__table-row_type_first`).each( async ( i, elem )=> {
            url.evURL = await $(elem).children().find('i').children().attr('href').trim();
        });
        return url;
    };
    async function eventDate( $ ){
        var date={}
        $(`tr.b-statistics__table-row_type_first`).each( async ( i, elem )=> {
            let x = $(elem).children().find('span').text().replace(/\s\s+/g, ' ').trim();
            date = `${x.split(' ')[0]}-${x.split(',')[0].split(' ')[1]}-${x.split(', ')[1]}`;
            return date;
        });
        return date;
    };

    function queryHTML( $ ){ // Query scraped html
        let result={};
        $(`tr.b-statistics__table-row_type_first i.b-statistics__table-content`).each( async ( i, elem )=> {
            let event =  $(elem).find('a');
            let eventUrl = event.attr('href');
            let eventName = event.text().replace(/\s\s+/g, ' ').trim();
            result.eventName = eventName;
            result.eventUrl = eventUrl;
        });
        if( result ) return result;
    };
};

const getFighterList = async eventUrl => { // Scrape Event fighter list
    try{
        let html = await axios.get( eventUrl );
        let $ = cheerio.load( html.data );
        let query = queryHTML( $ );
        return query;

    } catch( error ){ throw error };

    function queryHTML( $ ){ // Query scraped html
        let result=[];
        $(`tr.b-fight-details__table-row`).each(( i, elem )=> {
            const getValue = (w) => {
                let opps = $(elem).find('td').children();
                return opps.eq(w).text().replace(/\s\s+/g, ' ').trim();
            };
            let fighter = constractFighter( getValue );
            if( getValue(2) ) result.push( fighter[0], fighter[1] );
        });
        if( result.length ) return result;
    };
};


// ---- Constract fighter object ----
const constractFighter = getValue => {
    fighter1 ={
        name: getValue(2),
        opponent: getValue(3),
    };
    fighter2 ={
        name: getValue(3),
        opponent: getValue(2),
    };
    return [fighter1, fighter2];
};