module.exports = ( events, stats ) => {
    let { winList, loseList } = separateArr( events );

    let winners={}, losers={};
    winners = countStats( winList, stats );
    losers = countStats( loseList, stats );
    
    return winners;
};

const countStats = ( events, stats ) => {
    let weightClass={}, stance={}, age={}; slpm={};
    for( let i in events ){
        let method = events[i].outcome.mathod;
        if( method !== 'Decision' ){
            let wClass = events[i].weightClass;
            weightClass[wClass] = (weightClass[wClass] || 0 ) + 1;

                let st = stats[events[i].name].basic.stance.stance
                stance[st] = ( stance[st] || 0 ) + 1;

                let fgAge = stats[events[i].name].basic.age
                age[fgAge] = ( age[fgAge] || 0 ) + 1;

                let slpm = stats[events[i].name].careerStats.slpm;
                slpm[statSlpm] = ( slpm[statSlpm] || 0 ) + 1;
        };
    };
    console.log('weight', slpm )
    return { weightClass, stance, age };
};


const separateArr = ( events ) => {
    let winList=[], loseList=[];
    for( let i in events ){
        let outcome = events[i].outcome.finish;
        if( outcome === 'W' ){
            winList.push( events[i] );
        } else {
            loseList.push( events[i] );
        };
    };
    return { winList, loseList };
};