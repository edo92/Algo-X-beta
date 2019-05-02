module.exports = ( arr, feedBack ) => {

    let listArr = [];
    for( let i in arr ){
        let total=0;
        let name = arr[i].name;
        total += arr[i].points.stats.kd * 10;
        total += arr[i].points.stats.sigStr * .5;
        total += arr[i].points.stats.td * 5;
        total += arr[i].points.stats.subAtt * 3;
        total += arr[i].points.stats.pass * 5;
        total += arr[i].points.stats.rev * 5;
        total += arr[i].fftp === 0 ? 40 : 0; //Debute fighters;

        if( arr[i].outcome.finish === 'W' ){
            if( arr[i].outcome.method === 'Decision' ){
                total += 30;
            }else{
                if( arr[i].outcome.round === '1' ){
                    total+= 90;
                }else if( arr[i].outcome.round === '2' ){
                    total += 70;
                }else if( arr[i].outcome.round === '3' ){
                    total += 45;
                }else if ( arr[i].outcome.round === '4' ){
                    total += 40;
                }else if ( arr[i].outcome.round === '5' ){
                    total += 40;
                }
            }
        }
        arr[name].points.total = total;
        listArr.push( arr[name] );
        feedBack({ progress: 1 });

    };
    
    
    return listArr;
};