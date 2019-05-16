module.exports = ( app, db ) => {
    require( './api-data-center/index' )( app, db ),
    require( './api-line-up/index' )( app, db )
};
 