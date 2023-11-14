import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { ValidateCheckInService } from '../validate-check-in'

export function makeValidateCheckInService() {
  const service = new ValidateCheckInService(new PrismaCheckInsRepository())

  return service
}
