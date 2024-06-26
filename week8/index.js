import express, { Router } from 'express'
import { db_connection } from './database/connection.js'
import book_router from './src/modules/book/book.route.js'
import author_router from './src/modules/author/author.route.js'
const app = express()
const port = 3000
db_connection()
app.use(express.json())
app.use("/book",book_router)
app.use("/author",author_router)
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))