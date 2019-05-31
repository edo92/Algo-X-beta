const getData = require('./utilitys/getData');
const geatherInfo = require('./utilitys/geatherInfo');
const saveGenStats = require('../../routes/controller/saveGeneralStats');

module.exports = async () => {
    let { stats, events } = await getData ();
    let info = geatherInfo( events, stats );
    let saved = saveGenStats( info );

    return info;
};