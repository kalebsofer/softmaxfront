import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Demo() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Softmax Demo</h1>
        <p className="text-xl mb-8">
          Welcome to the Softmax demo page. Here, you can explore our data analysis and machine learning capabilities firsthand. Our interactive demo showcases how Softmax can help you uncover insights from your data and make informed decisions.
        </p>
        <p className="text-xl mb-8">
          To get started, simply upload your dataset or choose from our sample datasets. Then, select the type of analysis you'd like to perform, such as predictive modeling, clustering, or anomaly detection. Our platform will guide you through the process and present the results in an easy-to-understand format.
        </p>
        <p className="text-xl mb-8">
          Please note that this is a simulated demo environment. For a full-featured experience tailored to your specific needs, please contact our sales team.
        </p>
      </main>
      <Footer />
    </div>
  )
}