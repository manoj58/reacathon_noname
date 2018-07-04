import express from 'express'
import bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'

import typeDefs from './schema'
import resolvers from './resolvers'
import VZUser from './vzusermodel'
import User from './model'
import Event from './eventmodel'
import Registration from './registrationmodel'
import EventDetail from './eventdetailmodel'
import EventPrize from './eventprizemodel'
import EventResult from './eventresultmodel'
import EventRegistration from './eventregistrationmodel'

const env = require('dotenv').config()
const cors = require('cors')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})


//var COMPOSE_URI='mongodb://localhost:27017/myFirstDB'
var COMPOSE_URI='mongodb://localhost:27017/vzonehack'

mongoose.connect(COMPOSE_URI , function (error) {
  if (error) console.error(error)
  else console.log('mongodb connected')
})



//const PORT = 3000
const PORT = 3002

const app = express()

app.use(cors())

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema, context: { User,Event,Registration,VZUser,EventDetail,EventPrize,EventResult,EventRegistration } })
)

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))





app.listen(PORT)

console.log(`YASS QUEEN ON PORT: ${PORT}`)

