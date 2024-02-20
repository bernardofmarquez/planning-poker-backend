export const signInBodySchema = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
    },
    email: {
      type: 'string',
      format: 'email',
    },
    password: {
      type: 'string',
    },
  },
  required: ['name', 'email', 'password'],
  additionalProperties: false,
} as const

export const signInReplySchema = {
  type: 'object',
  properties: {
    accessToken: {
      type: 'string',
    },
  },
  required: ['accessToken'],
  additionalProperties: false,
} as const
