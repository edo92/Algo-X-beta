const constructScoreObj = require('./constractScoreObj');

module.exports = async ( $, feedBack  ) => {
    let result={};

    $(`tbody.b-fight-details__table-body`).eq(0).each(( i, elem )=> { //scrape content
        function getValue(w){
            let data = $(elem).find('tr').children().children();
            return data.eq(w).text().replace(/\s\s+/g, ' ').trim();
        };
        result = constructScoreObj( getValue );
        feedBack({ progress: 1 });
    });

    let resultArr=[];
    for( let i in result ){ //turn object to array
        resultArr.push( result[i] );
    };

    feedBack({ progress: 1 });
    return resultArr;
};
