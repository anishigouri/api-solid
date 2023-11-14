import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { PrismaGymsRepository } from '@/repositories/prisma/prisma-gyms-repository'
import { CheckInService } from '../check-in'

export function makeCheckInService() {
  const checkInService = new CheckInService(
    new PrismaCheckInsRepository(),
    new PrismaGymsRepository(),
  )

  return checkInService
}
