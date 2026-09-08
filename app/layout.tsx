import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from '@/components/SmoothScroll'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.softmaxco.io'),
  title: 'Softmax',
  description: 'A software and AI studio in London. Strategy, design and engineering from one senior team — AI products, data platforms and automation, shipped and handed over clean.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
