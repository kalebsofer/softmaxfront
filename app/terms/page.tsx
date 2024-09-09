import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="text-xl mb-8">
          Welcome to Softmax. By using our services, you agree to comply with and be bound by the following terms and conditions of use. Please review these terms carefully before using our platform.
        </p>
        <p className="text-xl mb-8">
          Our services are provided "as is" and we make no warranties, express or implied, regarding the accuracy, completeness, or reliability of our services. We reserve the right to modify, suspend, or discontinue any part of our services at any time without notice.
        </p>
      </main>
      <Footer />
    </div>
  )
}