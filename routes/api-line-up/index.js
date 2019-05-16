module.exports = ( app, db ) => {
    require('./get-upcome-event/getUpcomeEvent')( app, db ),
    require('./get-fighter-stats/getFighterStats')( app, db )
}