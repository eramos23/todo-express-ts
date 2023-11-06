import 'dotenv/config'
import express from 'express'
import cors from 'express'
import dbInit from './user/infraestructure/db/mongo';
const app = express();
app.use(cors())
app.use(express.json()) // middleware que transforma la re.body a un json
const port = process.env.PORT || 3001
dbInit().then()
app.listen(port, () => {
    console.log(`server is in port ${port}`)
})