const express = require('express')
const {createServer} = require('http')
const app = express();
const server = createServer(app);
const PORT = 3000
const {join} = require('path')

app.use('/', (req, res) => { 
    res.sendFile(join(__dirname, 'index.html'));
})


server.listen(PORT, () => {
    // server listening
    
})