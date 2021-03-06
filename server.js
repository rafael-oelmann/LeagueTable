const exprees = require("express");
const connectDB = require("./config/db");

const app = exprees();

// Connect DB
connectDB();

app.get("/", (req, res) => res.send("API Running"));

// Define Routes
app.use("/api/players", require("./routes/api/players"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server stared on port ${PORT}`));
