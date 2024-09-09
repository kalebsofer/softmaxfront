import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="flex items-center justify-between">
            <div className="w-2/3 pr-8">
              <h1 className="text-5xl font-bold mb-6">Softmax</h1>
              <p className="text-xl mb-8">For anyone with a dataset and a question</p>
              <div className="flex space-x-4">
                <Button size="lg">Demo</Button>
                <Button size="lg" variant="outline">Contact</Button>
              </div>
            </div>
            <div className="w-1/3">
              <Image src="/placeholder.svg?height=300&width=300" alt="Softmax Logo" width={300} height={300} className="rounded-full" />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Key Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center group">
                <div className="mb-4 flex justify-center transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                  <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/data-infrastructure-F1xxsDKEv6Vo6rfETC7AIgWtGUGOYg.png" alt="Data Infrastructure Icon" width={64} height={64} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Infrastructure and Engineering</h3>
                <p className="text-gray-600">Build robust data pipelines and infrastructure to support your analytics and machine learning needs.</p>
              </div>
              <div className="text-center group">
                <div className="mb-4 flex justify-center transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                  <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/data-analysis-F1xxsDKEv6Vo6rfETC7AIgWtGUGOYg.png" alt="Data Analysis Icon" width={64} height={64} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Analysis</h3>
                <p className="text-gray-600">Uncover insights from your data with advanced analytics techniques and visualization tools.</p>
              </div>
              <div className="text-center group">
                <div className="mb-4 flex justify-center transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                  <Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/machine-learning-F1xxsDKEv6Vo6rfETC7AIgWtGUGOYg.png" alt="Machine Learning Icon" width={64} height={64} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
                <p className="text-gray-600">Leverage state-of-the-art machine learning models to solve complex problems and make predictions.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div>
              <Image src="/placeholder.svg?height=40&width=40" alt="Softmax Logo" width={40} height={40} />
              <p className="mt-2">© 2023 Softmax. All rights reserved.</p>
            </div>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="hover:text-gray-300">Privacy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms</a></li>
                <li><a href="#" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}