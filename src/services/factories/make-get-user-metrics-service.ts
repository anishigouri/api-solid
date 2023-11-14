import { PrismaCheckInsRepository } from '@/repositories/prisma/prisma-check-ins-repository'
import { GetUserMetricsService } from '../get-user-metrics'

export function makeGetUserMetricsService() {
  const service = new GetUserMetricsService(new PrismaCheckInsRepository())

  return service
}
