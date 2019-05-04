module.exports = ( app, db ) => {
    require( './past-event-routes/collect-past-events/collectPastEvents' )( app, db )

};
  