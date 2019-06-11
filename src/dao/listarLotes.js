const Toddys = require("../schemas/Toddy");

module.exports = async (req, res) => {
    try {
        let lotes = await Toddys.distinct('lote');
            
        res.status(200);
        res.json( { lotes } );
    } 
    catch (error) {
        res.status(500);
        res.json( { error } );
    }
}