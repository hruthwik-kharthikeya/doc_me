const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from the DOC_ME Backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
