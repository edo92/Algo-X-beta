const scrapeStats = require('./components/scrapeStats');

module.exports = async ( link, feedBack )=> {
    try{
        let statsData = await scrapeStats( link, feedBack );
        
        return statsData;

    } catch( err ) { 
        return {  error: 'Collecting Fighters Stats Was Not Successful' }
    };
};
