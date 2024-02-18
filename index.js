const express = require('express');
const app = express();
const PORT = 3000;

// Import dynamique pour node-fetch
let fetch;

(async () => {
  if (!fetch) { // Assurez-vous que fetch n'est chargé qu'une seule fois
    fetch = (await import('node-fetch')).default;
  }

  app.get('/', (req, res) => {
    res.send('Bonjour depuis la mini-application !');
  });

  app.get('/second-service-data', async (req, res) => {
    try {
      const response = await fetch('http://second-service');
      const data = await response.text(); // ou response.json() pour du JSON
      res.send(data);
    } catch (error) {
      res.status(500).send(`Erreur lors de la récupération des données : ${error.message}`);
    }
  });

  app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
})();
