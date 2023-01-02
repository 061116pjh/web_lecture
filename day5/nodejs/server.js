const express = require("express");

const server = express();

server.get("/", (req, res) => {
    console.log("in main")
    res.send("<h1>main 화면</h1>");
});
server.get("/home", (req, res) => {
    console.log("in home")
    res.send("<h1>home 화면</h1>");
});
server.get("/userInfo", (req, res) => {
    res.send({name: "sua", age: 17})
})

server.listen(3000, () => {console.log("server is running!")});