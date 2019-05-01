module.exports = ( app, db ) => {
    app.get('/datacenter/initial/data/', ( req, res )=>{
        console.log('hellloooo')
        res.status( 200 ).json({ success:'hellooo' })
    });
};