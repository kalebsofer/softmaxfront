import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PlaceholderIcon } from '@/components/PlaceholderIcon'
import Link from 'next/link'

const teamMembers = [
  {
    name: "Kaleb",
    role: "Founder, Engineer",
    description: "Initially trained as an aerospace engineer, Kaleb transitioned into data in 2018 inspired by AlphaZero and YOLOv3. Since then, he has taken on engineering and consultancy roles with Deliveroo, Santander, and the UK Ministry of Justice."
  },
  {
    name: "Margaux",
    role: "AI",
    description: "After completing her masters from Imperial College London, Margaux was awarded prize-winner for the best MSc Pure Mathematics Project in 2023. She currently works as an ML engineer for Oak Academy, developing AI applications in Education."
  },
  {
    name: "Luka",
    role: "Product",
    description: "Luka has a first class masters in physics from The University of Manchester, he's since spent five years managing products and technical teams in the renewable energy sector and currently works for Amp X, a disruptive digital energy platform."
  },
  {
    name: "Izaak",
    role: "Advisor",
    description: (
      <>
        Founder of the <Link href="https://ml.institute/" className="text-blue-600 hover:underline">Machine Learning Institute</Link>, Izaak is a software engineer with over a decade of experience accumulating job titles like Head of Engineering and CTO.
      </>
    )
  }
]

export default function Team() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-12 text-center">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center p-6 bg-gray-50 border border-gray-200 rounded-lg shadow-md 
                transition-transform duration-300 ease-in-out hover:scale-105 
                ${index === 3 ? 'md:col-start-2' : ''}`}
            >
              <div className="w-48 h-48 mb-4">
                <PlaceholderIcon width={192} height={192} className="rounded-full" />
              </div>
              <h2 className="text-2xl font-semibold mb-2">{member.name}</h2>
              <h3 className="text-xl text-gray-600 mb-4">{member.role}</h3>
              <p className="text-center text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}