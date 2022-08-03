const express = require('express');

const app = express();

const competitionsRoute = require('./routes/competitionsRoute');
const rankingsRoute = require('./routes/rankingsRoute');

const error = require('./middlewares/error');

app.use(error);

app.use(express.json());

app.use('/competitions', competitionsRoute);
app.use('/ranking', rankingsRoute);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
