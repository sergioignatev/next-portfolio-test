import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'
import Nav from './components/Nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Сергей Игнатьев',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:pl-[200px] md:pr-[300px] px-[20px]">
      <h1 className='text-[35px] font-extrabold  py-[40px]'>Сергей Игнатьев</h1>
     <Nav/>
       <main>{children}</main>
        </div>
        </body>
    </html>
  )
}
