const db = require('../../models/index');
const docId = '5ce5ba4fb347be11cdbf8f55';

module.exports = async ( stats ) => {
    // if fighter exists overwrite else addtoset
    makeObject( stats ).forEach( async item => {
        try{
            let isExists = await isFighter( item );
            if( isExists ) replaceSet( item );
            else addToSet( item );
        } catch ( err ){ throw err };
    });

    async function isFighter( item ){
        let check = await db.Statistics.find(
            { _id: docId },
            { Fighter:{ $elemMatch:{ name: item.name}}}
        );
        if( check[0] && check[0].Fighter ){ return true }
        else return false;
    };

    async function replaceSet( item ){
        await db.Statistics.findOneAndUpdate(
            {_id: docId,
            Fighter:{ $elemMatch:{ name: item.name }}},
            { $set:{ 'Fighter.$': item }}
        );
    };

    async function addToSet( item ){
        await db.Statistics.findOneAndUpdate(
            { _id: docId },
            { $push:{ Fighter: item }}
        );
    };

    function makeObject( stats ){
        let arr = [];
        for( let i in stats ) { arr.push(stats[i]) };
        return arr;
    }
};
