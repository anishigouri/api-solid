import { IGymsRepository } from '@/repositories/gyms-repository'
import { Gym } from '@prisma/client'

interface ICreateGymRequest {
  title: string
  description?: string | null
  phone: string | null
  latitude: number
  longitude: number
}

interface ICreateServiceResponse {
  gym: Gym
}

export class CreateGymService {
  constructor(private gymsRepository: IGymsRepository) {}

  async execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  }: ICreateGymRequest): Promise<ICreateServiceResponse> {
    const gym = await this.gymsRepository.create({
      title,
      description,
      phone,
      latitude,
      longitude,
    })

    return {
      gym,
    }
  }
}
