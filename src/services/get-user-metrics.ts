import { ICheckInsRepository } from '@/repositories/check-ins-repository'

interface GetUserMetricsRequest {
  userId: string
}

interface GetUserMetricsResponse {
  checkInsCount: number
}

export class GetUserMetricsService {
  constructor(private checkInsRepository: ICheckInsRepository) {}

  async execute({
    userId,
  }: GetUserMetricsRequest): Promise<GetUserMetricsResponse> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId)

    return { checkInsCount }
  }
}
