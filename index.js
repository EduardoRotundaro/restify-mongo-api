const mongoose = require('mongoose');
const restify = require('restify');
const dao = require('./src/dao');

const server = restify.createServer({
    name: 'Backend',
    version: '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.post('/toddy', dao.adicionar);
server.get('/toddy', dao.listarTodos);
server.put('/toddy/:id', dao.editar);
server.del('/toddy/:id', dao.excluir);
server.get('/toddy/vencidos', dao.listarVencidos);
server.get('/toddy/lotes', dao.listarLotes);
server.get('/toddy/lote/:lote', dao.buscarPorLote);
server.get('/toddy/:id', dao.buscarPorId);

mongoose.connect('mongodb://localhost:27017/ec021', { useNewUrlParser: true }, (err)=>{
    if(err){
        console.log('\x1b[31m%s\x1b[0m', `Could not connect to database EC021...`);
        console.log('\x1b[31m%s\x1b[0m', `${err.message}`);
    }
    else console.log('\x1b[36m%s\x1b[0m', `Server connected to database EC021...`);
})

server.listen(6060, () => {
    console.log('\x1b[36m%s\x1b[0m', `${server.name} listening at localhost:6060...`);
});