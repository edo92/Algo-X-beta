
const axios = require('axios');
const cheerio = require("cheerio");


module.exports = async ( page )=> {
    const URL = `http://www.ufcstats.com/statistics/events/completed?page=${page}`;

    let html = await axios.get( URL );
    let $ = cheerio.load( html.data );
    let eventsArr =[];

    $('tr.b-statistics__table-row').each((i,elem)=> {
        let name =  $(elem).find('a').text().trim();
        let url =  $(elem).find('a').attr('href');
        let date = datePicker( $, elem );

        if( name && url ) eventsArr.push({ name, url, date });
    });
    console.log('eventsArr',eventsArr)
    if( eventsArr ) return { success: eventsArr };
    else return { error: 'Cant Collect Past Events Data' };
};

const datePicker = ( $, elem )=> {
    let orgDate = $(elem).find('.b-statistics__date').text().replace(/\s\s+/g, ' ').trim();
    let cutData = orgDate.split(' ');

    let day = cutData[0];
    let month = `${cutData[1]}`.split(',')[0];
    let year =  cutData[2];

    if( day && year ) return `${day}-${month}-${year}`;
};