const express = require('express')
const sequelize = require('./config/connection')
const path = require('path')
const session = require('express-session')
const sequelizeStore = require('connect-session-sequelize')(session.Store)
const app = express()
const PORT = process.env.PORT || 3001
const sess = {
    secret: 'secret secret',
    cookie: {},
    resave: false,
    saveUnitialized: true,
    store: new sequelizeStore({
        db: sequelize
    })
}

app.use(session(sess))
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(express.static(path.join(__dirname, 'public')))

sequelize.sync({ force: false}).then(() => {
    app.listen(PORT, () => console.log('Now Listening'))
}) 