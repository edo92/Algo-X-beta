const pureCombins = require('../pureCombination/pureCombination');
const sortFighters = require('./utility/sortFighters/sortFighters');

//const actions = require('./utility/maliciousActions/malicious');

module.exports = ( fightersList, setting ) => {
    let sortedList = sortFighters( fightersList );

    //let combins = pureCombins( sortedList );
};

