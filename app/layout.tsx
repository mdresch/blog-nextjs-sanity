import 'tailwindcss/tailwind.css'
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Blog CBA Consult</title>
      </head>
      <body>

        {children}
        <Analytics />
      </body>
      
    </html>
  )
}
