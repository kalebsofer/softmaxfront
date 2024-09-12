import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm sm:text-base mb-4 sm:mb-0">© 2024 Softmax.</p>
          <nav>
            <ul className="flex space-x-4 text-sm sm:text-base">
              <li><Link href="/privacy" className="hover:text-gray-300">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-gray-300">Terms</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}