const db = require('../../../../models/index');

module.exports = async () => {
    try {
        let genStats = await db.GenStats.find({});  // getting General statistics database
        genStats = selectHeighProb( genStats[0].Stats );  // high wining probability stats

        let { Fighter:fgsStats } = await db.Statistics.findOne({});  // getting Statistic database
        let stats = fgsStats.map(stat => { return{ [stat.name]: stat }});  // turning array to object

        return { stats, genStats };
    } catch( error ) { return "Coudn't get data" }
};


const selectHeighProb = ( genStats ) => {
    let heighP=[];
        Object.keys(genStats).map(stat => {
            let sorted = Object.keys( genStats[stat] ).map((key)=> { return genStats[stat][key] });
            let max = Math.max.apply( null, sorted );

            for( let key in genStats[stat] ){
                for( let i=0; i < 3; i++ ) {
                    let statVal = genStats[stat][key];
                    if( statVal === max && heighP.length < 3 ){
                        heighP.push({[key]: statVal});
                        delete genStats[stat][key];
                    }
                }
            };
        });
    return heighP;
};

