import { User } from '@prisma/client'
import { prisma } from '../config/db'

const findByEmail = async (email: User['email']) => prisma.user.findUnique(
  {
    where: {
      email,
    },
  },
)

const userRepository = {
  findByEmail,
}

export default userRepository
