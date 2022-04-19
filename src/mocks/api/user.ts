import { ResponseResolver, MockedRequest, restContext } from 'msw'

const get: ResponseResolver<MockedRequest, typeof restContext> = (
  req,
  res,
  ctx
) => {
  const isAuthenticated = true

  if (!isAuthenticated) {
    return res(
      ctx.status(403),
      ctx.json({
        errorMessage: 'Not authorized',
      })
    )
  }
  return res(
    ctx.status(200),
    ctx.json([
      {
        id: 1,
        name: 'yukiji',
        job: 'frontend',
      },
      {
        id: 2,
        name: 'nakaji',
        job: 'backend',
      },
    ])
  )
}

export default { get }
