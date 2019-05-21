module.exports = ( list, setting ) => {
    return {
        listObject: ()=> listObject( list ),
        countFighters: ()=> countFighters( list , setting.auto ),
        manualSelect: ()=> manualSelect( list )
    }
};

const listObject = list => {
    let listObj={};
    for( let i in list ){
        let name = list[i].name, option = list[i].option;
        listObj[name] = option ? option : { all: true };
    }
    return listObj;
}

// --- Home many times fighter repeats in combin
const countFighters = list => {
    let figsCount={};
    for( let i in list ){
        let card = list[i];
        for( let j in card ){
            let name = card[j].name;
            figsCount[name] = ( figsCount[name] || 0 ) + 1;
        }
    }
    return figsCount;
};

// --- manualy selected fighters exclude 
const manualSelect = ( list, auto ) => {
    if( auto ) return list;
    for( let i in list ){
        let elem = list[i];
        if( elem.option && elem.option['excl'] ){
            list.splice(i, 1);
        }
    }
    return list;
};