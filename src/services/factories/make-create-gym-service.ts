import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CreateGymService } from '../create-gym'

export function makeCreateGymService() {
  const service = new CreateGymService(new PrismaGymsRepository())

  return service
}
