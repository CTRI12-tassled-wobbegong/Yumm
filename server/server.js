const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  console.log(process.env.NODE_ENV);
  app.use('/build', express.static(path.join(__dirname, '../build')));
  app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, '../build/index.html'));
  });
}

//Global error handler
// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middle error',
//     status: 400,
//     message: { err: 'An error occured' },
//   };
//   const errorObj = Object.assign({}, defaultErr, err);
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
