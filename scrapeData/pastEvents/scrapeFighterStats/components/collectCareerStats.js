module.exports = ( $ ) => {
    let stats ={};

    $(`div.b-list__info-box-left`).each(( i, elem )=> {
        const firstStat = (w)=> {
            let x = $(elem).eq(0).find('ul').children().eq(w).text();
            let y = x.replace(/\s\s+/g, ' ').split(':')[1].trim();
            if( y.length ) return y;
        }
        const secondStat = (w)=> {
            let x = $(elem).eq(0).find('ul').eq(0).children().eq(w).text();
            let y = x.replace(/\s\s+/g, ' ').split(':')[1].trim();
            if( y.length ) return y;
        }
        stats = constractStats( firstStat, secondStat );
    });
    return stats;
};

const constractStats = ( firstStat, secondStat ) => {
    let stats={};

    stats.slpm = parseInt(firstStat(0));
    stats.strAcc = parseInt(firstStat(1).split('%')[0]);
    stats.sapm = parseInt(firstStat(2));
    stats.strDef = parseInt(firstStat(3).split('%')[0]);

    stats.tdAvg = parseInt(secondStat(0));
    stats.tdAcc = parseInt(secondStat(1).split('%')[0]);
    stats.tdDef = parseInt(secondStat(2));
    stats.subAvg = parseInt(secondStat(3).split('%')[0]);

    return stats;
};