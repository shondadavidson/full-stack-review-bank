require('dotenv').config();
const express = require('express'),
    sessions = require('express-session'),
    massive = require('massive'),
    ctrl = require('./controllers/controller');

const app = express(),
    {SERVER_PORT, MASSIVE_CONNECTION, SESSION_SECRET} = process.env;

massive(MASSIVE_CONNECTION).then(db => {
    console.log(`database connected`)
    app.set('db', db)
})

app.use(express.json())
app.use(sessions({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000000
    }
}))


app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)
app.get('/api/current', ctrl.getUser)
app.post('/auth/logout', ctrl.logout)





app.listen(SERVER_PORT, () => console.log(`002 Server Ready on port ${SERVER_PORT}`))
