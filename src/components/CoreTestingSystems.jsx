const CoreTestingSystems = () => {
  const systems = [
    {
      
      title: "Our Core Testing Systems",
      description: "We offer smart testing systems that monitor moisture content, nutrient levels, and hydrological flow in forest soils. These tools enable environmental teams to understand soil dynamics and predict changes affecting vegetation health and biodiversity.",
      link: "https://enviroforest.com/forest-soil-hydrology-assessment-technologies/"
    },
    {
      
      title: "Forest Atmosphere & Emissions Monitoring Technologies",
      description: "Enviro Forest provides advanced solutions to track atmospheric conditions and greenhouse gas emissions within forest regions. These technologies support compliance with environmental standards and contribute to broader climate change studies.",
      link: "https://enviroforest.com/forest-atmosphere-emissions-monitoring-technologies/"
    },
    {
      
      title: "Integrated Forest Monitoring & Decision Support Systems",
      description: "Our integrated systems combine data streams from multiple sources into a centralized dashboard, enabling forest managers to make data-driven decisions. With real-time alerts and customizable analytics, these systems help optimize forest resource management.",
      link: "https://enviroforest.com/integrated-forest-monitoring-decision-support-systems/"
    }
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Core Testing Systems
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced environmental testing technologies for sustainable forest management
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Image on the left side */}
            <div className="fade-in">
              <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden">
                <img 
                  src="/core_testing_image.jpg" 
                  alt="Core Testing Systems at Enviro Forest"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Content on the right side */}
            <div className="fade-in flex flex-col h-full" style={{ animationDelay: '0.2s' }}>
              <div className="relative flex-grow">
                {systems.map((system, index) => (
                  <div key={index} className={index > 0 ? "mt-8" : ""}>
                    <div className="relative mb-4">
                      <div className="section-number">{system.number}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                        {system.title}
                      </h3>
                    </div>
                    <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                      {system.description}
                    </p>
                    
                    {/* Button instead of link */}
                    <div className="mb-6">
                      <a 
                        href={system.link} 
                        className="cta-button inline-block"
                      >
                        <span>Explore Our Impact</span>
                      </a>
                    </div>
                    
                    {/* Divider between systems except for the last one */}
                    {index < systems.length - 1 && (
                      <div className="border-t border-gray-200 pt-6"></div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Optional additional button at the bottom if needed */}
              {/* <div className="text-center mt-8 fade-in" style={{ animationDelay: '0.4s' }}>
                <a href="/contact-us/" className="cta-button inline-block">
                  <span>Contact Us for More Information</span>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoreTestingSystems