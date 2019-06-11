const Toddys = require("../schemas/Toddy");

module.exports = async (req, res) => {
    try {
        let toddys = await Toddys.find().lean();
            
        res.status(200);
        res.json( { toddys } );
    } 
    catch (error) {
        res.status(500);
        res.json( { error } );
    }
}