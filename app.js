const express = require('express');
const app = express();

const courseRoutes = require('./routes/course');

app.use(express.json());
app.use('/courses', courseRoutes);

app.listen(3400, () => {
  console.log('server running on port 3400');
});
