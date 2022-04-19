let express = require('express');
let app = express();
const PORT = 3000;
let path = require('path')
    //middlawares
app.use(express.static('public'))


//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, '/views/home.htm'))
})

//serve
app.listen(PORT, () => console.log(`
Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}
`))