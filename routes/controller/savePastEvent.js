const db = require('../../models/index');

module.exports = async ( event ) => { 
    let { eventList, eventInfo } = event;
    let { eventName, date, mainEvent } = eventInfo;
    try{
        let saved = await db.Events.create({
            EventName: `${eventName}:${mainEvent}`,
            EventDate: date,
            Fighters: eventList,
        });
        
        if( saved ) return { success: 'success' };

    } catch( error ) {console.log('error', error ) ; return { error:'Saving Events Was Not Successful' }};    
}; 