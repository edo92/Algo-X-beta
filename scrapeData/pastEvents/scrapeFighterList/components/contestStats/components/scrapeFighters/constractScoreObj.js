module.exports = ( getValue ) => {
    let result={};
    result[getValue(1)] = {
        name: getValue(1),
        opponent: getValue(0),
        outcome:{},
        points:{
            stats:{ // change to score
                kd: parseInt(getValue(2)),
                sigStr: parseInt(getValue(4).split(' ')[0]),
                sigStrPerc: parseInt(getValue(6).split('%')[0]),
                td: parseInt(getValue(10).split(' ')[0]),
                tdPerc: parseInt(getValue(12).split('%')[0]),
                subAtt: parseInt(getValue(14)),
                pass: parseInt(getValue(16)),
                rev: parseInt(getValue(18)),
            }
        }
    };
    result[getValue(0)] = { 
        name: getValue(0),
        opponent: getValue(1),
        outcome:{},
        points:{
            stats:{ // change to score
                kd: parseInt(getValue(2)),
                sigStr: parseInt(getValue(4).split(' ')[0]),
                sigStrPerc: parseInt(getValue(6).split('%')[0]),
                td: parseInt(getValue(10).split(' ')[0]),
                tdPerc: parseInt(getValue(12).split('%')[0]),
                subAtt: parseInt(getValue(14)),
                pass: parseInt(getValue(16)),
                rev: parseInt(getValue(18)),
            }
        }
    };
    return result;       
};
