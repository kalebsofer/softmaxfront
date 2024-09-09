import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Mission() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Our Mission</h1>
        <p className="text-xl mb-8">
          At Softmax, our mission is to empower organizations with data-driven insights and cutting-edge machine learning solutions. We strive to make complex data analysis accessible to anyone with a dataset and a question, enabling better decision-making and innovation across industries.
        </p>
      </main>
      <Footer />
    </div>
  )
}