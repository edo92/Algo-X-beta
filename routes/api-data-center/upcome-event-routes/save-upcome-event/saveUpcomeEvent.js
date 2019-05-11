const collectFighterStats = require('../../../../scrapeData/pastEvents/scrapeFighterStats/scrapeFighterStats');
const saveFighterStats = require('../../Save-Data/save-fighter-stats');
const neuralNetwork = require('../../../../sa-Algorithms/neuralNetwork/neuralNetwork');

module.exports = ( app, db ) => {
    app.post('/submit/upcoming/event/', async ( req, res )=> {
        let upcomeEvent = req.body.upcomeEvent;
        let url = upcomeEvent.evURL;

        feedback =()=>{} // need for socket feedback
        try{
            let stats = await collectFighterStats( url, feedback );
            let saveStats = await saveFighterStats( stats, db );

            let predict = await neuralNetwork( upcomeEvent );
            let { eventDate, eventName } = upcomeEvent;
            
            let saveData = { list: predict, eventDate, eventName };
            let saveEvent = await saveUpcomeEvent( saveData );
        } catch( error ) { throw error };

    });

    const saveUpcomeEvent = async ( upcomeEvent )=> {
       let { eventName, list, eventDate } = upcomeEvent;
       let fgtrList = makeArr( list );

        try{
            await db.UpcomeEvent.create({ 
                EventName: eventName,
                Fighter: fgtrList,
                EventDate: eventDate
            });
        } catch( error ){ throw error }
    };

    const makeArr = ( list )=> {
        let result=[];
    
        for( let i in list ){
           result.push( list[i] );
        }; 
    
        return result;
    };
};

