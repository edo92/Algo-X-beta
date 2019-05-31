const db = require('../../models/index');
const id = '5ceb4c9857c229081110f6e6';

module.exports = async ( stats ) => {
    try {
        let saved = await db.GenStats.updateOne(
            { _id: id },
            { $set: { Stats: stats }}
        );
        if( !saved ) return false;
        return true;

    } catch ( error ){ return false };
};