const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const logger = require('morgan');

const app = express();

// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

app.get('/', (req, res) => {
  // res.send('test1')
  res.render('viewdoc');
});

// const todosRoutes = require('./routes/todo-routes');
// app.use('/todos', todosRoutes);

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Not found!',
  });
});
