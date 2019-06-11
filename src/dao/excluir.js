const Toddys = require("../schemas/Toddy");

module.exports = async (req, res) => {
    try {
        await Toddys.remove( { _id: req.params.id } );
            
        res.status(200);
        res.json( { status: true } );
    } 
    catch (error) {
        res.status(500);
        res.json( { error } );
    }
}