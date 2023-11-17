import { FastifyInstance } from 'fastify'

import { verifyJWT } from '@/http/middlewares/verify-jwt'
import { search } from './search'
import { fetchNearby } from './nearby'
import { create } from './create'

export async function gymRoutes(app: FastifyInstance) {
  app.addHook('onRequest', verifyJWT)

  app.get('/gyms/search', search)
  app.get('/gyms/nearby', fetchNearby)

  app.get('/gyms', create)
}
