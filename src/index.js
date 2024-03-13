const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const { home } = require("./controllers/home");
const { notFound } = require("./controllers/notFound");
const { recipes } = require("./controllers/recipe");
const { details } = require("./controllers/details");
const { searchByKeyword, getResults } = require("./controllers/search");
const create = require("./controllers/create");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

const data = require("./data/app-data");
data.seedSampleData();

start();

async function start() {
  app.use(express.urlencoded({ extended: true }));
  app.use("/static", express.static("static"));

  app.engine(
    "hbs",
    exphbs.create({
      extname: ".hbs",
      layoutsDir: path.join(__dirname, "views"),
      defaultLayout: "main"
    }).engine
  );
  app.set("view engine", "hbs");
  app.get("/", home);
  app.get("/recipes", recipes);
  app.get("/recipes/details/:id", details);
  app.get("/recipes/search", searchByKeyword);
  app.get("/recipes/find/:keyword", getResults);

  app
    .route("/create")
    .get(create.get)
    .post(create.post);

  app.all("*", notFound);

  app.listen(8080, () => console.log("App started"));
}
