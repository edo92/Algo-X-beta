module.exports = async ( event ) => { 
    const db = require('../../models/index');
    let { eventName, date } = event.eventInfo;
    let card = event.eventList;
    try{
        let saved = await db.Events.create({
            EventName: eventName,
            EventDate: date,
            Fighters: card,
        });
        
        if( saved ) return { success: 'success' };

    } catch( error ) {throw error; return { error:'Saving Events Was Not Successful' }};    
};