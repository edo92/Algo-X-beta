module.exports = ( app, db ) => {
    require( './past-event-routes/collect-past-events/collectPastEvents' )( app, db ),
    require( './past-event-routes/get-int-data/getIntData' )( app, db )
};
  