const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

const mongoose = require('mongoose');

app.set('view engine', 'ejs')
app.use(express.static('public'));
const axios = require('axios');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const allRoutes = require('./routes/allRoutes');

const path = require("path");
var methodOverride = require('method-override')
app.use(methodOverride('_method'))
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));


const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});



mongoose.connect('mongodb+srv://yousefahmadalfqeh:Yousef0799807675@cluster0.f7izs.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}).catch((err)=>{
 console.log(ree)
});
//app.use('./routes/allRoutes',allRoutes)
app.use(allRoutes)