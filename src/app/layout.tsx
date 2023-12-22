import type { Metadata } from 'next'
import { Nunito_Sans} from 'next/font/google'
import './globals.css'
import React from "react";

const nunito = Nunito_Sans({ subsets: ['latin'], variable: '--var-nunito' })

export const metadata: Metadata = {
  title: 'Ivanovo Hotels',
  description: '...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='mx-auto'>
      <body className={nunito.className}>{children}</body>
    </html>
  )
}
