// In src/index.js 
const express = require("express"); 
const cors = require("cors");
const app = express(); 
const PORT = process.env.PORT || 8083; 

var corsOptions = {
    // url1: "http://localhost:3000",
    // url2: "http://192.168.0.114:3000",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// *** ADD ***
const v1EmailRouter = require("./v1/routes/emailRoutes");

// *** ADD ***
app.use("/api/v1/ping", v1EmailRouter);
app.use("/api/v1/email", v1EmailRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port ${PORT}`); 
});