import { PrismaUsersRepository } from '@/repositories/prisma/prisma-users-repository'
import { RegisterService } from '../register'

export function makeRegisterService() {
  const registerService = new RegisterService(new PrismaUsersRepository())

  return registerService
}
