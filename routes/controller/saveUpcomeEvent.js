const db = require('../../models/index');

module.exports = async ( event ) => {
    let { fighters, eventInfo } = event;
    let { eventName, eventDate } = eventInfo;
    try{
        await db.UpcomeEvent.create({ 
            EventName: eventName,
            Fighter: fighters,
            EventDate: eventDate
        });
    } catch( error ){ throw error };
};
