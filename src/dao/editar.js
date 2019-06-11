const Toddys = require("../schemas/Toddy");

module.exports = async (req, res) => {
    try {
        let toddy = await Toddys.findById(req.params.id);
        if(toddy){
            toddy.lote = req.body.lote || toddy.lote;
            toddy.conteudo = req.body.conteudo || toddy.conteudo;
            toddy.validade = req.body.validade || toddy.validade; 

            await toddy.save();

            res.status(200);
            res.json( { toddy } );
        }
        else{
            res.status(400);
            res.json( { error: 'Invalid params' } );
        }
    } 
    catch (error) {
        res.status(500);
        res.json( { error } );
    }
}