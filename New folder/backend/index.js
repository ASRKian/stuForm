import express from 'express'
import cors from 'cors'
import Connection from './db/db.js';
import route from './routes/routes.js';
import bodyParser from 'body-parser';

const app = express()

Connection()

app.use(cors())
app.use(bodyParser.json({ extended: true }))
app.use('/', route)

app.listen(8000, () => {
    console.log('server is listening on port 8000');
})
