const express = require('express');
const index = express();

index.get('/', (req, res) => {
  res.send(`Endpoint: / (GET)\nMétodo: ${req.method}`);
});

index.route('/clientes')
  .get((req, res) => {
    res.send(`Endpoint: /clientes (GET)\nMétodo: ${req.method}\nQueries: ${JSON.stringify(req.query)}`);
  })
  .post((req, res) => {
    res.send(`Endpoint: /clientes (POST)\nMétodo: ${req.method}\nQueries: ${JSON.stringify(req.query)}`);
  })
  .put((req, res) => {
    res.send(`Endpoint: /clientes (PUT)\nMétodo: ${req.method}\nQueries: ${JSON.stringify(req.query)}`);
  })
  .delete((req, res) => {
    res.send(`Endpoint: /clientes (DELETE)\nMétodo: ${req.method}\nQueries: ${JSON.stringify(req.query)}`);
  });

index.route('/produtos')
  .get((req, res) => {
    res.send(`Endpoint: /produtos (GET)\nMétodo: ${req.method}\nQueries: ${JSON.stringify(req.query)}`);
  })
  .post((req, res) => {
    res.send(`Endpoint: /produtos (POST)\nMétodo: ${req.method}\nQueries: ${JSON.stringify(req.query)}`);
  })
  .put((req, res) => {
    res.send(`Endpoint: /produtos (PUT)\nMétodo: ${req.method}\nQueries: ${JSON.stringify(req.query)}`);
  })
  .delete((req, res) => {
    res.send(`Endpoint: /produtos (DELETE)\nMétodo: ${req.method}\nQueries: ${JSON.stringify(req.query)}`);
  });

const port = 3000;
index.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});
