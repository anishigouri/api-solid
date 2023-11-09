import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gyms-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateGymService } from './create-gym'

let gymsRepository: InMemoryGymsRepository
let sut: CreateGymService

describe('Create Gym Service', () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository()
    sut = new CreateGymService(gymsRepository)
  })
  it('should be able to register', async () => {
    const { gym } = await sut.execute({
      title: 'JS Gym',
      description: null,
      phone: null,
      latitude: -23.8245942,
      longitude: -45.3666095,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
