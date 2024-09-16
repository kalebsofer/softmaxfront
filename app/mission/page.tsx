import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { ChartBarIcon, CpuChipIcon, LightBulbIcon, PresentationChartLineIcon } from '@heroicons/react/24/outline'

export default function Mission() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-50">
          <div className="container mx-auto px-4 py-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Mission</h1>
            <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
              Our goal is to democratize deep learning by integrating cutting-edge AI with your existing data and infrastructure.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-semibold mb-12 text-center">We achieve this by:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {missionPoints.map((point, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {point.icon}
                  <h3 className="text-xl font-semibold ml-4">{point.title}</h3>
                </div>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <p className="text-xl text-center max-w-3xl mx-auto">
              Our commitment is to open-source, collaboration and transparency. 
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

const missionPoints = [
  {
    icon: <PresentationChartLineIcon className="w-8 h-8 text-gray-600" />,
    title: "Expert Consultation",
    description: "We offer guidance on data strategy, scaling infrastructure and engineering best practice to help deliver growth."
  },
  {
    icon: <LightBulbIcon className="w-8 h-8 text-gray-600" />,
    title: "Demonstrating Impactful AI Use Cases",
    description: "If you know what you need, great, if not we have tonnes of ideas about how AI can improve your business."
    },
  {
    icon: <CpuChipIcon className="w-8 h-8 text-gray-600" />,
    title: "Integrated Solutions",
    description: "We design and build as either an integrated part of your team or as a standalone partner, driving your data transformation."
  },
  {
    icon: <ChartBarIcon className="w-8 h-8 text-gray-600" />,
    title: "Empowering Organizations",
    description: "Our long-term planning means you'll continue to benefit from data-driven decision-making beyond our work with you."
  }
]