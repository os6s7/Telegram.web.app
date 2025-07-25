const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'web_app')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'web_app', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Web App listening on port ${port}`);
});
