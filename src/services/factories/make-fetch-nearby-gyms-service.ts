import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { FetchNearbyGymsService } from '../fetch-nearby-gyms'

export function makeFetchNearbyGymsService() {
  const service = new FetchNearbyGymsService(new PrismaGymsRepository())

  return service
}
