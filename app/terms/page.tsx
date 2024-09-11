import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function Terms() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          
          <p className="text-lg mb-8">
            <strong>Effective Date</strong>: {new Date().toLocaleDateString()}
          </p>          
          <p className="mb-6">
            Welcome to <strong>Softmax Ltd</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your use of our website at <a href="https://softmaxco.io" className="text-blue-600 hover:underline">softmaxco.io</a> and the services we offer.
          </p>
          <p className="mb-6">
            By accessing or using our Services, you agree to comply with and be bound by these Terms. Please read them carefully.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using any part of our Services, you agree to be bound by these Terms, including any future modifications.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
          <p className="mb-4">
            We provide data infrastructure, engineering, analytics, and machine learning solutions. The scope of services will be defined in any contracts or agreements entered into between Softmax Ltd and the client.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Intellectual Property</h2>
          <p className="mb-4">
            All content, branding, and intellectual property made available through our Services, including but not limited to trademarks, logos, and proprietary information, are owned by <strong>Softmax Ltd</strong>. You may not reproduce, distribute, or use any of our intellectual property without prior written consent.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. User Obligations</h2>
          <p className="mb-4">
            You agree to use our Services only for lawful purposes. You are prohibited from:
          </p>
          <ul className="list-disc list-outside ml-6 mb-4 space-y-2">
            <li>Attempting to disrupt or compromise the security of our Services.</li>
            <li>Using the Services for any illegal activity, including but not limited to unauthorized data extraction or distribution.</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Limitation of Liability</h2>
          <p className="mb-4">
            While we strive to offer high-quality and accurate Services, <strong>Softmax Ltd</strong> will not be held liable for any indirect, incidental, or consequential damages arising from your use of our Services. The Services are provided &quot;as is,&quot; and we make no warranties, either express or implied, regarding the accuracy or reliability of the data or services provided.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Privacy and Data Collection</h2>
          <p className="mb-4">
            We take your privacy seriously. Please review our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link> to understand how we collect, use, and protect your data.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate your access to our Services at any time without notice if you violate these Terms or engage in any unlawful or harmful activity.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising under or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts located in London, UK.
          </p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Modifications to Terms</h2>
          <p className="mb-4">
            We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our website. Your continued use of the Services after any changes constitute your acceptance of the new Terms.
          </p>
          <p className="mt-12 mb-4">
            If you have any questions or need clarification regarding these Terms, please contact us at <a href="mailto:support@softmaxco.io" className="text-blue-600 hover:underline">support@softmaxco.io</a>.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}