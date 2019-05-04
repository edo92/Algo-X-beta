const constractDetailObj = require('./constractDetailObj');

module.exports = ( $, result, feedBack ) => {

    $(`div.b-fight-details`).each(( i, elem )=> {
        const getValue = (w) => {
            let data = $(elem).eq(0).children().children().children();
            return data.eq(w).text().replace(/\s\s+/g, ' ').trim();
        };

        const weightClass = () => {
            let weight = $(elem).children().find('i.b-fight-details__fight-title')
            return weight.text().replace(/\s\s+/g, ' ').trim().split(' ')[0];
        };

        const method = () => {
            let method = $(elem).children().find('i.b-fight-details__text-item_first').eq(0)
            return method.text().replace(/\s\s+/g, ' ').trim().split(' ')[1];
        };

        const round = () => {
            let round = $(elem).eq(0).find('i.b-fight-details__text-item');
            let r = round.text().replace(/\s\s+/g, ' ').trim().split(' ')[1];
            return parseInt( r );
        };

        const finishMethod = () => {
            let finish = $(elem).find('p.b-fight-details__text').eq(1);
            if( method() === 'Decision' ){
                return 'DEC'
            }else{
                return finish.text().replace(/\s\s+/g, ' ').trim().split(' ')[1];
            }
        };

        let obj = { result, getValue, weightClass, method, round, finishMethod };
        result = constractDetailObj( obj, feedBack );
    });
    
    feedBack({ progress: 5 });
    return result;
};