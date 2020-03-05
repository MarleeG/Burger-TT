const log = console.log;

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


app.listen(PORT, err => {
    err ? log(err) : log(`http://localhost:${PORT}`);
});


