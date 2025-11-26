'use client';

import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const About = () => {
  const values = [
    {
      title: "Innovation",
      description: "Always stay ahead of the curve with tech-forward solutions and cutting-edge curriculum.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Inclusivity",
      description: "Create a space where everyone feels empowered to learn and grow regardless of background.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "Excellence",
      description: "Strive for quality in everything—from our courses to our community impact and student success.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    <section id="about" className="section-padding bg-anti-flash-white">
      <div className="container-custom">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-green">
                About Balm City
              </h2>
              <p className="text-lg text-balm-dark leading-relaxed">
                Balm City is not just another institution—it's a transformative experience where innovation, 
                skills, and human connection converge to create future-ready professionals.
              </p>
              <p className="text-balm-dark leading-relaxed">
                We bridge the gap between technical expertise and human connection by offering cutting-edge 
                programs that combine hard and soft skills. Our focus on computing & technology, media & 
                communication, tech & global market, and educational technology empowers students to 
                innovate, adapt, and thrive in a rapidly evolving world.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <motion.div 
                    className="flex-shrink-0 w-12 h-12 bg-pistachio rounded-lg flex items-center justify-center text-bangladesh-green"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {value.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-dark-green mb-1">{value.title}</h3>
                    <p className="text-balm-dark text-sm">{value.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="space-y-4">
                <motion.div 
                  className="aspect-square bg-gradient-to-br from-pistachio to-stone rounded-2xl p-6 flex items-center justify-center"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-bangladesh-green rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-bangladesh-green">Tech Skills</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="aspect-[4/3] bg-gradient-to-br from-caribbean-green/20 to-mountain-meadow/20 rounded-2xl p-6 flex items-center justify-center"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-mountain-meadow rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-mountain-meadow">Creativity</p>
                  </div>
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div 
                  className="aspect-[4/3] bg-gradient-to-br from-stone to-pistachio rounded-2xl p-6 flex items-center justify-center"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-dark-green rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <p className="text-xs font-medium text-dark-green">Community</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="aspect-square bg-gradient-to-br from-mountain-meadow/20 to-caribbean-green/20 rounded-2xl p-6 flex items-center justify-center"
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-bangladesh-green to-mountain-meadow rounded-xl mx-auto mb-3 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-dark-green">Future Ready</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;