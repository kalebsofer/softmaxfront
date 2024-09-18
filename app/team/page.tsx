import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

const teamMembers = [
  {
    name: <Link href="https://www.linkedin.com/in/kalebsofer/" className="text-black hover:underline">Kaleb</Link>,
    role: "Founder, Engineer",
    image: "/images/kaleb.jpg",
    description: "Initially trained as an aerospace engineer, Kaleb transitioned to Data in 2018 inspired by AlphaZero and YOLOv3. Since then, he has taken on engineering and consultancy roles with Deliveroo, Santander, and the UK Ministry of Justice."
  },
  {
    name: <Link href="https://www.linkedin.com/in/margaux-dowland-69962529b/" className="text-black hover:underline">Margaux</Link>,
    role: "AI",
    image: "/images/margaux.jpg", 
    description: "After completing her masters from Imperial College London with distinction, Margaux was awarded prize-winner for the best MSc Pure Mathematics Project in 2023. She currently works as an ML engineer for Oak Academy, developing AI applications in Education."
  },
  {
    name: <Link href="https://www.linkedin.com/in/luka-vlaskalic-bba5988a/" className="text-black hover:underline">Luka</Link>,
    role: "Product",
    image: "/images/luka.jpg", 
    description: "Luka holds a Master's degree with distinction in Physics from The University of Manchester. With over five years of experience managing products and leading technical teams in the renewable energy sector, he is currently working at Amp X, an innovative digital energy platform driving disruption in the industry."
  },
  {
    name: <Link href="https://www.linkedin.com/in/izaakrogan/" className="text-black hover:underline">Izaak</Link>,
    role: "Advisor",
    image: "/images/izaak.png",
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
              <div className="w-48 h-48 mb-4 relative overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={`${member.name}'s photo`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
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