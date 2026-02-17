require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/", (req, res) => {
  res.json({ message: "Server working" })
})
const PORT = process.env.PORT || 5000
app.listen(5000, () => console.log(`API running on ${PORT}`))
