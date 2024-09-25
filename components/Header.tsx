'use client';

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between">
        <Link href="/" className="flex items-center mb-4 sm:mb-0">
          <Image
            src="/images/logo.png"
            alt="Softmax Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-xl font-bold">
            Softmax.
          </span>
        </Link>
        <div className="flex space-x-4">
          <Link
            href="/"
            className={`transition-colors ${
              pathname === '/' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Home
          </Link>
          {['Mission', 'Team', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={`transition-colors ${
                pathname === `/${item.toLowerCase()}` ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}