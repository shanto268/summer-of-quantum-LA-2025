import '@/app/globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Inter, Outfit } from 'next/font/google'
import type React from 'react'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const outfit = Outfit({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata = {
  title: 'Summer of Quantum in LA',
  description:
    'A 10-week summer event series to make quantum mechanics engaging, accessible, and impactful for a diverse audience across LA.',
  generator: 'v0.dev',
  icons: {
    icon: '/icon-circle.png',
    apple: '/icon-circle.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          href="/icon-circle.png"
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} font-body`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
