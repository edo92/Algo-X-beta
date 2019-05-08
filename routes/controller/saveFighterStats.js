const docId = '5cd2403be7179a2e19638c95';

module.exports = async ( stats )=> {
    const db = require('../../models/index');

    let arr = [];
    for( let i in stats ) { arr.push(stats[i]) }; // Object to array
    try{
        arr.forEach( async item=> {
            let isExists = await isFighter( item );

            // if fighter exists overwrite else addtoset
            if( isExists )  replaceSet( item );
            else addToSet( item );
        });

        async function isFighter( item ){
            let check = await db.Statistics.find(
                { _id: docId },
                { Fighter:{ $elemMatch:{ name: item.name}}}
            );
            if( check[0].Fighter ){ return true }
            else return false;
        };

        async function replaceSet( item ){
            await db.Statistics.findOneAndUpdate(
                { 
                    _id: docId,
                    Fighter:{ $elemMatch:{ name: item.name }}
                },
                { $set:{ 'Fighter.$': item }}
            );
        };

        async function addToSet( item ){
            await db.Statistics.findOneAndUpdate(
                { 
                    _id: docId,
                },
                { $push:{ Fighter: item }}
            );
        };

    } catch( err ) { console.log(err); return { error: 'Saving Fighter Stats Was Not Successful' }};
};