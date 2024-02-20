export interface TokenPayload {
  user: {
    id: string,
    email: string,
    name: string,
  },
  iat: number,
  exp: number,
}
