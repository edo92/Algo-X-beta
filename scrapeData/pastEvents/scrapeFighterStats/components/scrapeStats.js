const axios = require('axios');
const cheerio = require('cheerio');

module.exports = async ( eventLink, feedBack ) => {
    let fighterStats = {};
    
    let links = await fighterPage( eventLink );

    for( let key in links ){
        let html = await axios.get( links[key] );
        let $ = cheerio.load( html.data );
        let fighter = {};

        let NR = nameAndRecord( $ );
        fighter[NR.name] = { name: NR.name, record: NR.record };
        
        const basicStats = require('./collectBasicStats');
        let bsStat = await basicStats( $, feedBack );
        fighter[NR.name] = { ...fighter[NR.name], ...{ basic: bsStat }}; 

        const careerStats = require('./collectCareerStats');
        let crStat = await careerStats( $ );
        fighter[NR.name] = { ...fighter[NR.name], ...{ careerStats: crStat }};

        fighterStats = {...fighter, ...fighterStats };
        feedBack({ progress: 2 });
    }
    return fighterStats; 
};
    
const nameAndRecord = ( $ )=> {
    let name, record;
    $(`h2.b-content__title`).each(( i, elem )=> {
        name = $(elem).children().eq(0).text().replace(/\s\s+/g, ' ').trim();
        rec = $(elem).children().eq(1).text().replace(/\s\s+/g, ' ').trim().split(' ')[1];
        record = { 
            w: parseInt( rec.split('-')[0] ), 
            l: parseInt( rec.split('-')[1] ), 
            nc: parseInt( rec.split('-')[2] )
        };
    });

    return { name, record };
};

const fighterPage = async link => {
    let html = await axios.get( link );
    let $ = cheerio.load( html.data );

    let linkArr=[];

    $(`td.b-fight-details__table-col`).each(( i, elem )=> {
        let first = $(elem).find('p').eq(0).find('a').attr('href');
        let second = $(elem).find('p').eq(1).find('a').attr('href');

        if (first && second) linkArr.push( first, second );
    });
    return linkArr;
};
