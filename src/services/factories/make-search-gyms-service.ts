import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { SearchGymsService } from '../search-gyms'

export function makeSearchGymsService() {
  const service = new SearchGymsService(new PrismaGymsRepository())

  return service
}
