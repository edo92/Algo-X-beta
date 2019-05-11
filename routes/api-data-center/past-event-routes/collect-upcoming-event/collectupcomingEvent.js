const collectUpcomingEvent = require('../../../../scrapeData/upcomingEvent/scrapeEventList');

module.exports = ( app, db ) => {
    app.get('/get/upcoming/event/', async (req,res) => {
        let fighters = await collectUpcomingEvent();
        console.log('fighters',fighters)
        res.status( 200 ).json({ success: fighters });
    });
};