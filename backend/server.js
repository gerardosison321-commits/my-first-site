const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Now pointing to the frontend folder
app.use(express.static(path.join(__dirname, '../frontend')));

// Your API endpoint
app.get('/api/hello', (req, res) => {
  const name = req.query.name || 'stranger';
  res.json({ message: `Hello from the backend, ${name}!` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});