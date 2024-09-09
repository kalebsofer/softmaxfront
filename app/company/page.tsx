import { Header } from '@/components/Header'

export default function Company() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Softmax</h1>
        <p className="text-xl mb-8">
          Softmax is a leading data science and machine learning company, dedicated to helping businesses harness the power of their data. Our team of experts combines deep technical knowledge with industry experience to deliver tailored solutions that drive real-world impact.
        </p>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <p>© 2023 Softmax. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}