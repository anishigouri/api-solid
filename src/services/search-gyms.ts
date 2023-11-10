import { IGymsRepository } from '@/repositories/gyms-repository'
import { Gym } from '@prisma/client'

interface ISearchGymsRequest {
  query: string
  page: number
}

interface ICreateServiceResponse {
  gyms: Gym[]
}

export class SearchGymsService {
  constructor(private gymsRepository: IGymsRepository) {}

  async execute({
    query,
    page,
  }: ISearchGymsRequest): Promise<ICreateServiceResponse> {
    const gyms = await this.gymsRepository.searchMany(query, page)

    return {
      gyms,
    }
  }
}
