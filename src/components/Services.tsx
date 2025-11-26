'use client';

import { motion } from 'framer-motion';

interface Service {
  title: string;
  description: string;
  features: string[];
  comingSoon?: boolean;
  icon: React.ReactNode;
}

const Services = () => {
  const services = [
    {
      title: "Media & Communication",
      description: "Build storytelling, branding, digital media production, and global communication expertise.",
      features: ["Digital Storytelling", "Brand Strategy", "Media Production", "Global Communication", "Design Agency"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      title: "Tech & Global Market",
      description: "Learn how to scale ideas and businesses in a globalized economy with market insights.",
      features: ["Market Analysis", "Business Scaling", "Global Strategy", "Entrepreneurship"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Educational Technology",
      description: "Leverage technology to make learning effective, accessible, and engaging for all students.",
      features: ["Learning Platforms", "EdTech Tools", "Digital Pedagogy", "Accessibility Design"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    {
      title: "Soft Skills Development",
      description: "Develop essential communication, collaboration, and leadership skills for professional success.",
      features: ["Communication Skills", "Team Collaboration", "Leadership Training", "Emotional Intelligence"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Career Readiness",
      description: "Comprehensive career preparation including portfolio development and industry connections.",
      features: ["Portfolio Building", "Industry Networking", "Interview Prep", "Career Guidance"],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      )
    },
    {
      title: "Computing & Technology",
      description: "Master programming, AI, software development, and cutting-edge tech skills for the digital future.",
      features: ["Programming Languages", "AI & Machine Learning", "Software Development", "Tech Innovation"],
      comingSoon: true,
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const
      }
    }
  };

  return (
    <section id="services" className="section-padding bg-anti-flash-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-green mb-4">
            Our Core Programs
          </h2>
          <p className="text-lg text-balm-dark max-w-2xl mx-auto">
            Four integrated pillars that anchor Balm City's transformative educational experience, 
            combining technical expertise with essential human skills.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border border-stone/20 relative ${
                service.comingSoon ? 'opacity-75' : ''
              }`}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Coming Soon Badge */}
              {service.comingSoon && (
                <motion.div
                  className="absolute -top-3 -right-3 z-10"
                  initial={{ scale: 0, rotate: -12 }}
                  animate={{ scale: 1, rotate: -12 }}
                  transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                >
                  <span className="bg-gradient-to-r from-caribbean-green to-bangladesh-green text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    Coming Soon
                  </span>
                </motion.div>
              )}

              <motion.div 
                className={`flex items-center justify-center w-16 h-16 rounded-xl mb-6 ${
                  service.comingSoon 
                    ? 'bg-stone/30 text-balm-dark' 
                    : 'bg-pistachio text-bangladesh-green'
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {service.icon}
              </motion.div>
              
              <h3 className={`text-xl font-display font-semibold mb-3 ${
                service.comingSoon ? 'text-balm-dark' : 'text-dark-green'
              }`}>
                {service.title}
              </h3>
              
              <p className="text-balm-dark mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className={`flex items-center text-sm ${
                      service.comingSoon ? 'text-balm-dark/70' : 'text-balm-dark'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIndex * 0.1, duration: 0.3 }}
                  >
                    <svg 
                      className={`w-4 h-4 mr-3 flex-shrink-0 ${
                        service.comingSoon ? 'text-balm-dark/50' : 'text-bangladesh-green'
                      }`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-balm-dark mb-6">
            Ready to transform your future with cutting-edge education?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#contact" className="btn-primary">
              Start Your Journey
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;