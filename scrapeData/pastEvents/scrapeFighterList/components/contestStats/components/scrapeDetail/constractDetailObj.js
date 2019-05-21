const messTypes = require('../../../../../../messageTypes');

module.exports = ( obj, feedBack ) => {
    let { result, getValue, method, round, finishMethod } = obj;

    let fighter = result[getValue(1).split('"')[0].trim()].outcome;
    let opponent = result[getValue(3).split('"')[0].trim()].outcome;

    fighter.finish = getValue(0);
    opponent.finish = getValue(2);

    fighter.method = method();
    opponent.method = method();

    fighter.round = round();
    opponent.round = round();

    fighter.finishMethod = finishMethod();
    opponent.finishMethod = finishMethod();

    let { collect_fighters } = messTypes.messageTypes;
    feedBack({ progress: 1, loadMessage: collect_fighters });
    
    return result 
}; 