const Combinatorics = require('js-combinatorics');
const budget = 50000;
const cardSize = 6;

module.exports = ( fighters ) => {
    let pureCombins = combinations( fighters, cardSize );
    let clearOppConflict = clearOpponent( pureCombins, cardSize );

    let inBudget = clearBudget( clearOppConflict, budget )
    let result = inBudget;

    return result;
};

const combinations = ( arr, size ) => {
    let cards = [];
    let cmb = Combinatorics.combination( arr, size );
    while(a = cmb.next()) cards.push(a);
    return cards;
};

const clearOpponent = ( arr, cardSize ) => {
    let cleanArr = [];
    for( let x in arr ){
        let card= arr[x];
        let lookup={}, size=0;
       
        for( let i in card ){
            let name = card[i].name;
            let opponent = card[i].opponent;
            lookup[name] = ( lookup[name] || 0 ) + 1;
            lookup[opponent] = ( lookup[opponent] || 0 ) + 1;
        }

        for( let j in lookup ) size++
           
        if( size === cardSize*2 ) cleanArr.push( card );

    }
    return cleanArr;
};

const clearBudget = ( cards, amount ) => {
    let newArr = [];
    for( let i = 0; i < cards.length; i++ ){
        let sum = 0; 
        let card = cards[i];
        for( let j = 0; j < card.length; j++ ){ //chenge to reduce
            sum += parseInt(card[j].price);
        }
        
        if( sum <= amount ) newArr.push( cards[i] );
    }
    return newArr;
};