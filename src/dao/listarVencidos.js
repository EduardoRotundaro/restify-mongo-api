const Toddys = require("../schemas/Toddy");

module.exports = async (req, res) => {
    try {
        let toddys = await Toddys.find().lean();

        const hoje = new Date();
        let vencidos = [];

        toddys.forEach( toddy => {
            let partes = toddy.validade.split('/');
            let vencimento = new Date(partes[2], partes[1]-1, partes[0]); 
            
            if(vencimento < hoje) vencidos.push(toddy);
        });
            
        res.status(200);
        res.json( { vencidos } );
    } 
    catch (error) {
        res.status(500);
        res.json( { error } );
    }
}
