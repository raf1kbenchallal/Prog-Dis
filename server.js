const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur le deuxième service!' });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
