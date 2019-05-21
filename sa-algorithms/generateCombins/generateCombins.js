const pureCombins = require('../pureCombination/pureCombination');
const sortFighters = require('./utility/sortFighters/sortFighters');

//const actions = require('./utility/maliciousActions/malicious');

module.exports = ( list, setting ) => {
    let sortedList = sortFighters( list );
    //console.log('sortedList', sortedList );

   // let combins = pureCombins( list );
};
