// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

// Lista mockada de clientes
const clients = [
  {
    cpf: '881.628.750-00',
    name: 'Mariane de Souza Oliveira',
    registrationStatus: 'REGULAR',
    accountList: [
      {
        institution: 'Cooperativa Viacredi',
        type: 'CHECKING',
        accountNumber: '557932-4',
      },
      {
        institution: 'Cooperativa Viacredi',
        type: 'APPLICATION',
        accountNumber: '778461-8',
      },
    ],
  },
  {
    cpf: '438.265.920-50',
    name: 'Mateus Martins',
    registrationStatus: 'IRREGULAR',
    accountList: [
      {
        institution: 'Cooperativa Viacredi',
        type: 'CHECKING',
        accountNumber: '196665-8',
      },
    ],
  },
];

// Endpoint GET /clients/:cpf
app.get('/customer/:cpf', (req, res) => {
  const { cpf } = req.params;

  const client = clients.find((c) => c.cpf === cpf);
  if (!client) {
    return res.status(404).json({ message: 'Cliente não encontrado.' });
  }

  return res.json(client);
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
