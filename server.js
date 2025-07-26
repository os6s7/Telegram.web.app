const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 3000;

// Serve static files from the web_app folder
app.use(express.static(path.join(__dirname, 'web_app')));

// Catch-all: return index.html for any unknown path
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'web_app', 'index.html'));
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on port ${port}`);
});