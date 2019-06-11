const Toddys = require("../schemas/Toddy");

module.exports = async (req, res) => {
    try {
        if(req.body.lote && req.body.conteudo && req.body.validade){
            let toddy = await Toddys.create(
                {
                    lote: req.body.lote,
                    conteudo: req.body.conteudo,
                    validade: req.body.validade
                }
            );
            
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