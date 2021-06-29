const express = require("express");
const app = express();
app.use(express.json());

//Permissões
var cors = require('cors');
app.use(cors());

//Porta

app.listen(process.env.PORT || 3000);

app.get('/', function (req, res){
       res.send("Atividade 7");
    }
); 
let mensagens = [
   {
      nome: "Eric", apelido: "Ogata", data:"05/10/1996", cidade:"Carapicuíba", esporte: "Vôlei"
   },
   {
       nome: "Pedro Cristovão", apelido: "Harry", data:"15/05/1996", cidade:"Ribeirão Preto", esporte: "Natação"
   }
    
];

app.get('/banco',
   function(req, res){
       res.send(mensagens.filter(Boolean));
   } 
);
app.get('/banco/:id/:nn/',
   function(req,res){
       console.log("done");
       let id = req.params.id - 1;
       res.send(mensagens[id][req.params.nn]);
   });
app.get('/banco/:id',
   function(req, res){
       console.log("ok");
       let id = req.params.id - 1;
       let mensagem = mensagens[id];
       
       if (!mensagem){
           res.send("Mensagem não encontrada");
       } else {
           res.send(mensagem);
       }
   }
)

app.post('/banco', 
   (req, res) => {
       console.log(req.body.mensagem);
       let mensagem = req.body;
       mensagens.push(mensagem);
       res.send("Criar uma mensagem")
   }
);

app.put('/banco/:id',
   (req, res) => {
       let id = req.params.id - 1;
       let mensagem = req.body;
       mensagens[id] = mensagem;        
       res.send("Mensagem atualizada!")
   }
)

app.delete('/banco/:id', 
   (req, res) => {
       let id = req.params.id - 1;
       delete mensagens[id];

       res.send("Mensagem removida!");
   }
);
