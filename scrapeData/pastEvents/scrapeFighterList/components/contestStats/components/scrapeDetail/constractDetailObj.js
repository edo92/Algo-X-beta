const messTypes = require('../../../../../../messageTypes');

module.exports = ( obj, feedBack ) => {
    let { result, getValue, weightClass, method, round, finishMethod } = obj;

    let fighter = result[getValue(1).split('"')[0].trim()].outcome;
    let opponent = result[getValue(3).split('"')[0].trim()].outcome;

    fighter.finish = getValue(0);
    opponent.finish = getValue(2);

    fighter.mathod = method();
    opponent.mathod = method();

    fighter.round = round();
    opponent.round = round();

    fighter.weightClass = weightClass();
    opponent.weightClass = weightClass();

    fighter.finishMethod = finishMethod();
    opponent.finishMethod = finishMethod();

    let { collect_fighters } = messTypes.messageTypes;
    feedBack({ progress: 1, loadMessage: collect_fighters });
    
    return result 
}; 