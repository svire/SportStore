const express=require("express");//This package will be used to host the back-end servers
const jsonServer=require("json-server");//This package will be used to provide a RESTful web service in Chapter 6
const chokidar = require("chokidar");//This package monitors files for changes
const cors = require("cors");//This package is used to enable cross-origin request sharing (CORS) requests.

const fileName = process.argv[2] || "./data.js"
const port = process.argv[3] || 3500;

let router = undefined;

const app = express();

const createServer = () => {
    delete require.cache[require.resolve(fileName)];
    setTimeout(() => {
        router = jsonServer.router(fileName.endsWith(".js")
            ? require(fileName)() : fileName);
    }, 100)
}

createServer();

app.use(cors());
app.use(jsonServer.bodyParser)
app.use("/api", (req, resp, next) => router(req, resp, next));

chokidar.watch(fileName).on("change", () => {
    console.log("Reloading web service data...");
    createServer();
    console.log("Reloading web service data complete.");
});

app.listen(port, () => console.log(`Web service running on port ${port}`));