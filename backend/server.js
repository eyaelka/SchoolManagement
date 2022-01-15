"use strict";
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path');

const studentRouter = require ("./routes/studentRoutes");
const authRouter = require("./routes/authRoutes");
const notifRouter = require("./routes/notifRoutes");


mongoose.connect(
    "mongodb+srv://ManagementStudent:test123@cluster0.5pss2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    // 'mongodb://localhost/studentsdb',
    { useNewUrlParser: true, useUnifiedTopology: true, dbName: "students" },
    (err) => {
        if (!err) {
            console.log("Database connected");
        } else {
            console.log(err);
        }
    }
);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, 'public')));
app.use("/students",studentRouter);
app.use("/auth",authRouter);
app.use("/notif",notifRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
