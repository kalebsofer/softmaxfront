import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16 flex flex-col items-center justify-center">
        <p className="text-xl mb-12 text-center max-w-2xl">
          Have a question or want to learn more about our services?
        </p>
        <Link href="https://calendly.com/kalebsofer" target="_blank" rel="noopener noreferrer">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 bg-[#1DB954] hover:bg-[#1ed760] text-white"
          >
            Schedule a Call
          </Button>
        </Link>
      </main>
      <Footer />
    </div>
  )
}