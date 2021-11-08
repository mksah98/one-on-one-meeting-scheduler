require('dotenv').config()

const PORT = process.env.PORT;

const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const empRouter = require('./routes/employees')
const actionRouter = require('./routes/action_items')

const app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/employees', empRouter);
app.use('/action-items', actionRouter);
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});


// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(PORT, () => {
  console.log("Server Started");
});