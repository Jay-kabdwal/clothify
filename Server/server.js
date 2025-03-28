const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");


mongoose.connect("mongodb+srv://jaykabdwal:jaykabdwal2025@cluster0.5vjqs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("connected to database")
}).catch((err) => {
    console.log(err)
}
);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "cache-control", "Expires", "Pragma"],
    credentials: true
}));

app.use(cookieParser());
app.use(express.json());


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
