import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ServerStackIcon, ChartBarIcon, CpuChipIcon } from '@heroicons/react/24/outline'

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
                <Link href="/demo">
                  <Button size="lg">Demo</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">Contact</Button>
                </Link>
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
                  <ServerStackIcon className="h-16 w-16 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Infrastructure and Engineering</h3>
                <p className="text-gray-600">Build robust data pipelines and infrastructure to support your analytics and machine learning needs.</p>
              </div>
              <div className="text-center group">
                <div className="mb-4 flex justify-center transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                  <ChartBarIcon className="h-16 w-16 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Analysis</h3>
                <p className="text-gray-600">Uncover insights from your data with advanced analytics techniques and visualization tools.</p>
              </div>
              <div className="text-center group">
                <div className="mb-4 flex justify-center transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                  <CpuChipIcon className="h-16 w-16 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
                <p className="text-gray-600">Leverage state-of-the-art machine learning models to solve complex problems and make predictions.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}