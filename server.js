const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());

app.use(express.json());
// req came from post with data and it has body
app.post('/api/data', (req, res) => {
    setTimeout(() => {
        res.send("from server")
    }, 1500)
})
app.listen('5000', () => {
    console.log("running well")
})