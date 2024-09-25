'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import { Button } from '@/components/ui/button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const visited = localStorage.getItem('hasVisitedHomepage');
    if (!visited) {
      localStorage.setItem('hasVisitedHomepage', 'true');
    } else {
      setHasVisited(true);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex flex-col justify-center" style={{ minHeight: 'calc(90vh - 64px)' }}>
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="w-full md:w-1/2 mb-8 md:mb-0"> 
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {hasVisited ? (
                  "Data-driven success, accessible for all."
                ) : (
                  <TypeAnimation
                    sequence={[
                      "Data-driven success, ",
                      1000, 
                      "Data-driven success, accessible for all."
                    ]}
                    wrapper="span"
                    speed={50}
                    style={{ display: 'inline-block' }}
                    cursor={false}
                  />
                )}
              </h1>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/demo">
                  <Button 
                    size="lg" 
                    className="w-full sm:w-auto bg-black text-white hover:bg-white hover:text-black border-2 border-black transition-colors"
                  >
                    Demo
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="w-full sm:w-auto bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors"
                  >
                    Contact
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <Image 
                src="/svg/home.svg" 
                alt="Home Illustration" 
                width={800} 
                height={600} 
                className="w-full max-w-4xl"
              />
            </div>
          </div>
        </div>

        <div className="bg-gray-100 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <Image src="/svg/timeline.svg" alt="Infrastructure and Engineering" width={128} height={128} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Infrastructure and Engineering</h3>
                <p className="text-gray-600">Provision infrastructure and build robust data pipelines to support your business.</p>
              </div>
              <div className="text-center bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <Image src="/svg/analytics.svg" alt="Analysis and Visualisation" width={128} height={128} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Analysis and Visualisation</h3>
                <p className="text-gray-600">Deploy insightful visual tools for analysis and support ongoing services.</p>
              </div>
              <div className="text-center bg-white p-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
                <Image src="/svg/ml.svg" alt="Machine Learning" width={128} height={128} className="mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Machine Learning</h3>
                <p className="text-gray-600">Leverage state-of-the-art machine learning models to inform data-driven decision-making.</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}