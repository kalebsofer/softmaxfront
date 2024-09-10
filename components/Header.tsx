'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { PlaceholderIcon } from './PlaceholderIcon'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <PlaceholderIcon width={40} height={40} className="mr-2" />
          <span className="text-xl font-bold">Softmax</span>
        </Link>
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
              href="/team"
              className={`transition-colors ${
                pathname === '/team' ? 'text-gray-900 font-semibold' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Team
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