import { IUsersRepository } from '@/repositories/users-repository'
import { hash } from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists-error'
import { User } from '@prisma/client'

interface IRegisterRequest {
  name: string
  email: string
  password: string
}

interface IRegisterServiceResponse {
  user: User
}

export class RegisterService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({
    email,
    name,
    password,
  }: IRegisterRequest): Promise<IRegisterServiceResponse> {
    const password_hash = await hash(password, 6)

    const userWithSameEmail = await this.usersRepository.findByEmail(email)

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError()
    }

    const user = await this.usersRepository.create({
      name,
      email,
      password_hash,
    })

    return {
      user,
    }
  }
}
