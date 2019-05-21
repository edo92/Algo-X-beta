module.exports = async ( list ) => {
    let stats = await statsObject();
    let sortedList = sortFighters( list, stats );

    const Testing = require('../../../generalStats/generalStats');
    Testing();

    return [];
};

const sortFighters = ( list, ftrStats ) => {
    for( let i in list ){
        let stats = ftrStats[list[i].name];
        if( list[i].fttp ){

        }
    };
};

const statsObject = async () => {
    const db = require('../../../../models/index');
    let ftrStats = await db.Statistics.find({});
    ftrStats = ftrStats[0].Fighter;

    let stats={};
    for( let i in ftrStats ){
        stats[ftrStats[i].name] = ftrStats[i];
    };

    return stats;
};



// //------------------------------------
// const actions = require('../maliciousActions/malicious');
// const sortCombins = (list, combins) => {
//     let { listObject } = actions( list );
//     let listObj = listObject();

//     let strong=[], mid=[], low=[];
//     for( let i in combins ){
//         let card = combins[i];
//         for( let j in card ){
//             let option = listObj[card[j].name];

//             if( option['fave'] ){
//                 strong.push( card );

//             } else if( option['back'] ){
//                 mid.push( card );

//             } else {
//                 low.push( card );
//             }
//         }
//     }
//     return { strong, mid, low };
// };