module.exports = ( events, statistics ) => {
    let stats={};
    function collectWinStats( event ){
        if( !stats.weightClass ) stats.weightClass = {};
        stats.weightClass[event.weightClass] = (stats.weightClass[event.weightClass] || 0) + 1;

        if( !stats.fttp ) stats.fttp = {};
        stats.fttp[event.fttp] = (stats.fttp[10 * Math.round(event.fttp/10)] || 0) + 1;

        let fgSt = statistics[event.name];

        if( !stats.stance ) stats.stance = {};
        stats.stance[fgSt.basic.stance.stance] = ( stats.stance[fgSt.basic.stance.stance] || 0 ) + 1;

        if( !stats.age ) stats.age = {};
        stats.age[fgSt.basic.age] = ( stats.stance[fgSt.basic.age] || 0 ) + 1;
    };

    for( let i in events ){
        let event = events[i];
        let { finish, method } = events[i].outcome;
        if( finish === 'W' && method !== 'Decision' ){
            collectWinStats( event );
        }
    };
    return stats;
};

// stats.weightClass[data.weightClass] = ( stats.weightClass[data.weightClass] || 0 ) + 1;
// stats.fttp[data.fttp] = ( stats.fttp[data.fttp] || 0 ) + 1;
// stats.stance[fgSt.basic.stance.stance] = ( stats.stance[fgSt.basic.stance.stance] || 0 ) + 1;
// stats.age[fgSt.basic.age] = ( stats.stance[fgSt.basic.age] || 0 ) + 1;

// stats.careerSt.slpm[fgSt.careerStats.slpm] = ( stats.careerSt.slpm[fgSt.careerStats.slpm] || 0 ) + 1;
// stats.careerSt.strAcc[fgSt.careerStats.strAcc] = ( stats.careerSt.strAcc[fgSt.careerStats.strAcc] || 0 ) + 1;

// stats.careerSt.sapm[fgSt.careerStats.sapm] = ( stats.careerSt.sapm[fgSt.careerStats.sapm] || 0 ) + 1;
// stats.careerSt.tdAvg[fgSt.careerStats.tdAvg] = ( stats.careerSt.tdAvg[fgSt.careerStats.tdAvg] || 0 ) + 1;
// stats.careerSt.tdAcc[fgSt.careerStats.tdAcc] = ( stats.careerSt.tdAcc[fgSt.careerStats.tdAcc] || 0 ) + 1;
// stats.careerSt.tdDef[fgSt.careerStats.tdDef] = ( stats.careerSt.tdDef[fgSt.careerStats.tdDef] || 0 ) + 1;
// stats.careerSt.subAvg[fgSt.careerStats.subAvg] = ( stats.careerSt.subAvg[fgSt.careerStats.subAvg] || 0 ) + 1;