//not in use yet
import { getServerSession } from 'next-auth/next'

import { authOptions } from './auth'

//Check types for req and res

export default async function handler(req:any, res:any) {
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    res.status(401).json({ message: 'You must be logged in.' });
    return;
  }

  return res.json({
    message: 'Success',
  })
}