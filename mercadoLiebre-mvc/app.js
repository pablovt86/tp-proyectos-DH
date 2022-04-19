const express = require('express')
const app = express();
let path = require('path')

let mainRouter = require('./routes/main');

app.use('/', mainRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, ()=>{
    console.log("servidor escuchando en puerto 3000");
})