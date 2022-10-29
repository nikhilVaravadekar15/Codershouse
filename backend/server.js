const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')


const app = express()
dotenv.config({ path: ".env" })
const port = process.env.PORT || 5500
// log request
app.use(morgan("tiny"))

app.get("/", (req, res) => {
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`App running on http://localhost:${port}`)
})
