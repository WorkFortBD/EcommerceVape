import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Content-Type', 'text/plain')
  res.write(`User-agent: *\nDisallow:`)
  res.end()
}