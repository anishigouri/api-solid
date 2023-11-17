import { makeValidateCheckInService } from '@/services/factories/make-validate-check-in-service'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function validate(request: FastifyRequest, reply: FastifyReply) {
  const params = z.object({
    checkInId: z.string().uuid(),
  })

  const { checkInId } = params.parse(request.params)

  const service = makeValidateCheckInService()

  await service.execute({
    checkInId,
  })

  return reply.status(204).send()
}
