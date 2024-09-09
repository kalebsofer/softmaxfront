import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Privacy() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-xl mb-8">
          At Softmax, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data when you use our services or visit our website.
        </p>
        <p className="text-xl mb-8">
          We only collect information that is necessary to provide our services and improve your experience. We do not sell or share your personal information with third parties for marketing purposes. Your data is stored securely and accessed only by authorized personnel.
        </p>
      </main>
      <Footer />
    </div>
  )
}