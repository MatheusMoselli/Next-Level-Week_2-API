import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()
app.use(cors())
app.use(express.json())

app.use(routes)
app.listen(3333)

// localhost:3333/users => users (recurso)

// Corpo (Request body): Dados para criação/atualização de um registro
// Route params: Identificar qual recurso quero atualizar/deletar
// Query params: Paginação, filtros, ordenação
