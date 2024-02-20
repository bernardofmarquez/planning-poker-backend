import jwt from 'jsonwebtoken'

export const generateJwtAccessToken = <T>(payload: Omit<T, 'iat' | 'exp'>): string => jwt.sign(
  payload,
  process.env.JWT_SECRET as string,
)
