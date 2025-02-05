import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PEPEF',
  description: 'Created With PEPEF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
