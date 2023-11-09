import { Gym, Prisma } from '@prisma/client'
import { randomUUID } from 'crypto'
import { IGymsRepository } from '../gyms-repository'

export class InMemoryGymsRepository implements IGymsRepository {
  public items: Gym[] = []

  async create(data: Prisma.GymCreateInput) {
    const gym: Gym = {
      id: data.id ?? randomUUID(),
      description: data.description ?? null,
      title: data.title,
      phone: data.phone ?? null,
      latitude: new Prisma.Decimal(data.latitude.toString()),
      longitude: new Prisma.Decimal(data.longitude.toString()),
    }

    this.items.push(gym)

    return gym
  }

  async findById(id: string) {
    const gym = this.items.find((item) => item.id === id)

    if (!gym) return null

    return gym
  }
}
