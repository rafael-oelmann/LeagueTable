const exprees = require("express");

const app = exprees();

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server stared on port ${PORT}`));
