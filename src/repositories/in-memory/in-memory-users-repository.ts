import { Prisma, User } from '@prisma/client'
import { IUsersRepository } from '../users-repository'
import { randomUUID } from 'crypto'

export class InMemoryUsersRepository implements IUsersRepository {
  public items: User[] = []

  async findById(id: string) {
    const user = this.items.find((item) => item.id === id)

    if (!user) return null

    return user
  }

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email)

    if (!user) return null

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    const user = {
      ...data,
      id: randomUUID(),
      created_at: new Date(),
    }

    this.items.push(user)

    return user
  }
}
