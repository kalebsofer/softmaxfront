'use client';

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="flex items-center justify-between p-4 bg-white">
      <Link href="/" className="flex items-center space-x-4">
        <Image src="/placeholder.svg?height=40&width=40" alt="Softmax Logo" width={40} height={40} />
        <span className="text-xl font-bold">Softmax</span>
      </Link>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link
              href="/mission"
              className={`transition-colors ${
                pathname === '/mission' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mission
            </Link>
          </li>
          <li>
            <Link
              href="/company"
              className={`transition-colors ${
                pathname === '/company' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Company
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={`transition-colors ${
                pathname === '/contact' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}