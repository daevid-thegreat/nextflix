import './globals.css'
import { Inter } from '@next/font/google'

const inter = Inter({ 
                        subsets: ['latin'],
                        weights: [100, 200, 300, 400, 500, 600, 700, 800, 900]
                     })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${inter.className} mx-32`}>{children}</body>
    </html>
  )
}
