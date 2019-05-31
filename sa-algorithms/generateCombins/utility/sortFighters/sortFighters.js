const getStatsData = require('../maliciousActions/getStatsData');

module.exports = async ( list ) => {
    let { stats, genStats } = await getStatsData();
    for( let i in list ){
        console.log('checking', list[i].name )
    }
};
