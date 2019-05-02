const encode = require('./encodeST');

module.exports = async ( $, feedBack )=> {
    let bStat ={};
    
    $(`div.b-list__info-box_style_small-width ul.b-list__box-list`).each(( i, elem )=> {
        function stat(w){
            let x = $(elem).find('li').eq(w);
            let y = x.text().replace(/\s\s+/g, ' ').trim();
            let z = y.split(':')[1];
            return z;
        }
        bStat = constructBasicStat( stat );
        feedBack({ progress: 1 });
    });
    return bStat;
};

const constructBasicStat = async ( stat )=> {
    let bStat ={};
    
    let height = (
        !stat(0) ? 0 : Number(`${stat(0).split("'")[0]}.${stat(0).split(" ")[2].split('"')[0]}`.trim())
    );
    let weight = Number(stat(1).trim().split('lbs')[0]);
    let reach = Number(stat(2).trim().split('"')[0]);
    let stance = await encode(stat(3));
    let age = new Date().getFullYear() - parseInt(stat(4).split(' ')[3]);

    bStat.height = height;
    bStat.weight = weight;
    bStat.reach = reach;
    bStat.stance = stance;
    bStat.age = age;

    return bStat;
};