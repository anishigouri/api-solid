import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { FetchUserCheckInsService } from '../fetch-user-check-ins-history'

export function makeFetchUserCheckInsHistoryService() {
  const service = new FetchUserCheckInsService(new PrismaCheckInsRepository())

  return service
}
