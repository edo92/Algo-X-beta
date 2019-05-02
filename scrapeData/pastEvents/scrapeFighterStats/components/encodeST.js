module.exports = async val=> {
    let stanceCode = code(val.trim() )
    return { stance: val.trim(), code: stanceCode };
};

const code = value=> {
    let val = value.trim();
    if( val === 'Orthodox') return 1;
    else if ( val === 'Southpaw' ) return 2;
    else if ( val === 'Switch' ) return 3;
    else if( !val.length ) return 0;
};