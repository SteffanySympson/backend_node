const mongoose = require('mongoose');
//url de conexao -> mongodb://servidor:porta/nome do banco
//useNewUrlParser -> Para que o Mongoose use o novo sistema de URL
//useUnifiedTopology -> Mecanismos de monitoramento de Banco de Dados

function Conn(url,porta,banco){
    mongoose.connect('mongodb+srv://dbAdmin:pxEybOgfRRrGXpec@bluedbmod3.cz4zz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true, 
    }).then(() => {
        console.log("MongoDB connected");
    }).catch((err) => {
        console.error(err);
    });
}

module.exports = Conn;