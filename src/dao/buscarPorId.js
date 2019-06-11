const Toddys = require("../schemas/Toddy");

module.exports = async (req, res) => {
    try {
        let toddy = await Toddys.findById(req.params.id).lean();
            
        res.status(200);
        res.json( { toddy } );
    } 
    catch (error) {
        res.status(500);
        res.json( { error } );
    }
}