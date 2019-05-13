const db = require('../../models/index');

module.exports = async ( event ) => { 
    let { eventList, eventInfo } = event;
    let { eventName, mainEvant, date } = eventInfo;
    try{
        let saved = await db.Events.create({
            EventName: `${eventName}:${mainEvant}`,
            EventDate: date,
            Fighters: eventList,
        });
        
        if( saved ) return { success: 'success' };

    } catch( error ) {throw error; return { error:'Saving Events Was Not Successful' }};    
}; 