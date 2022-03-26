const express = require("express")
//routes import here
const sequelize = require("./config/connection")
const path = require("path")
const session = require("express-session")
const sequelizeStore = require("connect-session-sequelize")(session.Store)

const helpers = require("./utils/helpers")

const exphbs = require("express-handlebars")
const hbs = exphbs.create({ helpers })
const app = express()
const PORT = process.env.PORT || 3001
const sess = {
    secret: "secret secret",
    cookie: {
      // Session will automatically expire in 20 mins
      expires: 20 * 60 * 1000,
    },
    resave: false,
    saveUnitialized: true,
    store: new sequelizeStore({
      db: sequelize,
    }),
}

app.use(session(sess))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "public")))

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// add routes below


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log("Now Listening"))
  })