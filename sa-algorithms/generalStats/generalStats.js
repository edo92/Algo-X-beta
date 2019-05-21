const getData = require('./utilitys/getData');
const geatherInfo = require('./utilitys/geatherInfo');

module.exports = async () => {
    let { stats, events } = await getData ();
    let info = geatherInfo( events, stats );

 };



