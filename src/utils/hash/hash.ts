import bcrypt from 'bcrypt'

export const hash = (message: string) => {
  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  return bcrypt.hashSync(message, salt)
}

export const compareHash = (message: string, hashedMessage: string) => bcrypt.compareSync(message, hashedMessage)
