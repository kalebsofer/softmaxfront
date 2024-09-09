import { Header } from '@/components/Header'
import { Button } from '@/components/ui/button'

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-xl mb-8">
          Have a question or want to learn more about our services? Get in touch with our team, and we'll be happy to help.
        </p>
        <form className="max-w-md">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <p>© 2023 Softmax. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}