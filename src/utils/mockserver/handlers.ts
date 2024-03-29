import { rest } from 'msw'

type LoginReqBody = {
  email: string
}

type ResetReqBody = {
  code: string
  password: string
  passwordConfirmation: string
}

// This is Where we go intercept the calls
export const handlers = [
  rest.post<LoginReqBody>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`,
    (req, res, ctx) => {
      const { email } = req.body

      // quando der erro
      if (email === 'false@email.com') {
        return res(
          ctx.status(400),
          ctx.json({
            error: 'Bad Request',
            message: [
              {
                messages: [
                  {
                    message: 'This email does not exist'
                  }
                ]
              }
            ]
          })
        )
      }

      // where be success
      return res(
        ctx.status(200),
        ctx.json({
          ok: true
        })
      )
    }
  ),

  rest.post<ResetReqBody>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`,
    (req, res, ctx) => {
      const { code } = req.body

      if (code === 'wrong_code') {
        return res(
          ctx.status(400),
          ctx.json({
            error: 'Bad Request',
            message: [
              {
                messages: [
                  {
                    message: 'Incorrect code provided.'
                  }
                ]
              }
            ]
          })
        )
      }

      return res(
        ctx.status(200),
        ctx.json({
          user: {
            email: 'valid@email.com'
          }
        })
      )
    }
  )
]
