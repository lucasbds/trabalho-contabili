// app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

// Configuração do body-parser para ler dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));

// Configura o caminho para os arquivos estáticos (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Armazena os lançamentos em um array
let lancamentos = [];

// Configuração do EJS como motor de visualização
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Rota principal
app.get('/', (req, res) => {
    res.render('index', { lancamentos: lancamentos });
});

// Rota para adicionar lançamentos
app.post('/lancamentos', (req, res) => {
    const novoLancamento = {
        conta: req.body.conta,
        valor: parseFloat(req.body.valor),
        tipo: req.body.tipo,
        data: req.body.data
    };
    lancamentos.push(novoLancamento);
    res.redirect('/'); // Redireciona de volta para a página inicial
});

// Rota para Balancete
app.get('/balancete', (req, res) => {
    res.render('balancete', { lancamentos: lancamentos });
});

// Rota para DRE
app.get('/dre', (req, res) => {
    res.render('dre', { lancamentos: lancamentos });
});

// Rota para Balanço
app.get('/balanco', (req, res) => {
    res.render('balanco', { lancamentos: lancamentos });
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
