const mongoose = require('mongoose');
const restify = require('restify');

const api = restify.createServer({
    name: 'Backend',
    version: '1.0.0'
});

api.use(restify.plugins.acceptParser(api.acceptable));
api.use(restify.plugins.queryParser());
api.use(restify.plugins.bodyParser());

mongoose.connect('mongodb://localhost:27017/ec021', { useNewUrlParser: true }, (err)=>{
    if(err){
        console.log('\x1b[31m%s\x1b[0m', `Could not connect to database EC021...`);
        console.log('\x1b[31m%s\x1b[0m', `${err.message}`);
    }
    else console.log('\x1b[36m%s\x1b[0m', `Server connected to database EC021...`);
})

api.listen(6060, () => {
    console.log('\x1b[36m%s\x1b[0m', `${api.name} listening at localhost:6060...`);
});