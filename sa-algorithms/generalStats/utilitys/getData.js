module.exports = async () => {
    const db = require('../../../models/index');
    
    let events = await db.Events.find({});
    let stats = await db.Statistics.find({});
    let statsList = stats[0].Fighter;

    let allStats={};
    // make object
    for( let i in statsList ){ 
        let name = statsList[i].name;
        allStats[name] = statsList[i];
    };

    let allEvents=[];
    for( let i in events ){
        let list = events[i].Fighters;
        allEvents = allEvents.concat(list);
    };

    return { stats: allStats, events: allEvents };
};