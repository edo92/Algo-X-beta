module.exports = ( app, db ) => {
    require( './dataCenter/scrapePastEvents' )( app, db )

};
  