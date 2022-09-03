const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const mongoose = require('mongoose');
const userRouter = require("./Routes/userRoute");
const messageRouter = require("./Routes/messageRoute");
const queryRouter = require("./Routes/queryRoute");
const authRouter = require("./Routes/authRoute");

dotenv.config();
const app = express();
app.use(express.json())
app.use(cors())

// connecting with mongo
mongoose.connect(process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log("Mongo connected ✅");
    }
);

app.get("/", (req, res) => {
    res.send("Query will get resolved ✅")
})

app.use("/api/authentication", authRouter)
app.use("/api/user", userRouter);
app.use("/api/messages", messageRouter);
app.use("/api/query", queryRouter);


app.listen(8080, () => console.log("Server started..."));