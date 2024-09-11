import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Demo() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Softmax Demo</h1>
        <p className="text-xl mb-8">
          Bare with, we&apos;re still working on this page.
        </p>
      </main>
      <Footer />
    </div>
  )
}