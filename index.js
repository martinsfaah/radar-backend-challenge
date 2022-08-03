const express = require('express');

const app = express();

const competitionsRoute = require('./routes/competitionsRoute');

const error = require('./middlewares/error');

app.use(error);

app.use(express.json());

app.use('/', competitionsRoute);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
