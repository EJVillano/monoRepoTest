require("dotenv").config()
const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())

app.get("/", (req, res) => {
  res.json({ message: "Server working" })
})

app.listen(5000, () => console.log("API running on 5000"))
