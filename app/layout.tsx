import './globals.scss'

import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Weaver',
  description: 'Draft maker',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="en">
      <body >{children}</body>
    </html>
 
  )
}
