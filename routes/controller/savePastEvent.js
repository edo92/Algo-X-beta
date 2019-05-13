const db = require('../../models/index');

module.exports = async ( event ) => { 
    console.log('checking imp' , event )

    let { eventList, eventInfo } = event;
    let { eventName, mainEvent, date } = eventInfo;
    try{
        let saved = await db.Events.create({
            EventName: `${eventName}:${mainEvent}`,
            EventDate: date,
            Fighters: eventList,
        });
        
        if( saved ) return { success: 'success' };

    } catch( error ) {console.log('error', error ) ; return { error:'Saving Events Was Not Successful' }};    
}; 