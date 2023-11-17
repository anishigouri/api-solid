import { makeSearchGymsService } from '@/services/factories/make-search-gyms-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function search(request: FastifyRequest, reply: FastifyReply) {
  const schema = z.object({
    query: z.string(),
    page: z.coerce.number().min(1).default(1),
  })

  const { query, page } = schema.parse(request.query)

  const service = makeSearchGymsService()

  const { gyms } = await service.execute({
    query,
    page,
  })

  return reply.status(200).send({
    gyms,
  })
}
