const Sustainability = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Sustainability at a Glance
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image on the left side */}
            <div className="fade-in">
              <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden">
                <img 
                  src="sustainable_image.jpg" 
                  alt="Sustainability at Enviro Forest"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Content on the right side */}
            <div className="fade-in flex flex-col h-full" style={{ animationDelay: '0.2s' }}>
              <div className="relative flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  Our Mission & Expertise
                </h3>
                <p className="text-lg text-gray-600 mb-3 leading-relaxed">
                  At <strong className="text-green-600">Enviro Forest</strong>, headquartered at 
                  701 Fifth Avenue, Seattle, WA, 98104, USA, we specialize in delivering innovative 
                  environmental testing technologies tailored for the forestry sector.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Our mission is to empower businesses with scalable, intelligent solutions that 
                  promote sustainable forest management. Backed by advanced research, stringent 
                  quality assurance, and a dedicated customer support framework.
                </p>
                
                {/* Industry Leadership section without heading */}
                <div className="relative mt-6">
                  <p className="text-lg text-gray-600 mb-3 leading-relaxed">
                    With a strong and expanding B2B presence across North America, Enviro Forest 
                    leads in product reliability, smart integration, and technological innovation.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    From soil health to atmospheric data, our comprehensive solutions are designed 
                    to help environmental professionals, researchers, and businesses monitor, analyze, 
                    and respond to real-time forest conditions with precision and ease.
                  </p>
                </div>
              </div>
              
              {/* Button positioned at the bottom of the column */}
              <div className="text-center mt-8 fade-in" style={{ animationDelay: '0.4s' }}>
                <a href="/contact-us/" className="cta-button inline-block">
                  <span>Let's Connect</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sustainability