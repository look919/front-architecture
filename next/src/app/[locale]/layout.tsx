import type { ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import { Icons } from '~ui/Icons'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ShopTom',
  description: 'Find the best tables to play pool',
}

type RootLayoutProps = {
  children: ReactNode
  params: { locale: string }
}

export default function RootLayout({ children, params: { locale } }: RootLayoutProps) {
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <Toaster position="top-center" reverseOrder={false} />
        <header className="mb-8 flex justify-between p-6">
          <Link href="/">
            <Image src="/logo.png" width={120} height={80} alt="ShopTom logo" />
          </Link>
          <div className="flex mt-2 mr-2 gap-6">
            {/* <LanguageSelect /> */}
            <Icons.Search className="h-6 w-6" />
            <Link href="/cart">
              <Icons.Cart className="h-6 w-6" />
            </Link>
            {/* <UserProfile /> */}
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}
