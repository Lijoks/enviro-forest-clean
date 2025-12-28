const EnvironmentalServices = () => {
  const services = [
    {
      icon: "https://enviroforest.com/wp-content/uploads/2025/11/Ecology-icon.png",
      title: "Afforestation & Reforestation Projects",
      description: "We design and implement large-scale tree planting initiatives to restore degraded land, improve biodiversity, and combat climate change through carbon sequestration."
    },
    {
      icon: "https://enviroforest.com/wp-content/uploads/2025/11/Controls-icon.png",
      title: "Eco-Maintenance & Monitoring",
      description: "Ongoing care and ecological monitoring ensure long-term health of restored environments, with data-driven insights to track vegetation growth, soil quality, and ecosystem recovery."
    },
    {
      icon: "https://enviroforest.com/wp-content/uploads/2025/11/Carbon-footprint-icon.png",
      title: "Carbon Footprint Offset Programs",
      description: "Our certified offset programs allow businesses to neutralize emissions through verified carbon sequestration projects like reforestation and habitat restoration."
    },
    {
      icon: "https://enviroforest.com/wp-content/uploads/2025/11/Sign-icon.png",
      title: "Sustainable Land Use & Site Planning",
      description: "We provide expert land assessment and ecological planning to help developers, communities, and governments build responsibly while preserving natural resources."
    },
    {
      icon: "https://enviroforest.com/wp-content/uploads/2025/11/Report-icon.png",
      title: "Environmental Impact Reports & Compliance",
      description: "We deliver detailed environmental assessments aligned with regulatory standards, helping you navigate compliance, minimize risks, and operate sustainably."
    }
  ]

  const firstThreeServices = services.slice(0, 3);
  const remainingServices = services.slice(3, 5);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="service-label">Our Service</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Our Environmental Services Include
          </h2>
          <div className="section-divider"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Image on the left side (first column) */}
            <div className="fade-in">
              <div className="relative h-full min-h-[600px] rounded-lg overflow-hidden">
                <img 
                  src="environmental_services_image.jpg" 
                  alt="Environmental Services at Enviro Forest"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* First 3 services in the middle column */}
            <div className="fade-in flex flex-col h-full" style={{ animationDelay: '0.1s' }}>
              <div className="relative flex-grow">
                {firstThreeServices.map((service, index) => (
                  <div key={index} className={index > 0 ? "mt-10" : ""}>
                    <div className="flex items-start mb-4">
                      <img 
                        src={service.icon} 
                        alt={service.title} 
                        className="w-12 h-12 mr-4 flex-shrink-0" 
                      />
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 leading-relaxed ml-16">
                      {service.description}
                    </p>
                    
                    {/* Divider between services except for the last one */}
                    {index < firstThreeServices.length - 1 && (
                      <div className="border-t border-gray-200 mt-6 pt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Remaining 2 services in the right column */}
            <div className="fade-in flex flex-col h-full" style={{ animationDelay: '0.2s' }}>
              <div className="relative flex-grow">
                {remainingServices.map((service, index) => (
                  <div key={index} className={index > 0 ? "mt-10" : ""}>
                    <div className="flex items-start mb-4">
                      <img 
                        src="environment.jpg"
                        alt="Environmental Services at Enviro Forest"
                        className="w-12 h-12 mr-4 flex-shrink-0"
                         
                      />
                      <h3 className="text-xl font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-500 leading-relaxed ml-16">
                      {service.description}
                    </p>
                    
                    {/* Divider between services except for the last one */}
                    {index < remainingServices.length - 1 && (
                      <div className="border-t border-gray-200 mt-6 pt-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EnvironmentalServices