'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
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
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const dashboardVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  return (
    <section id="home" className="min-h-screen bg-dark-green relative overflow-hidden">
      <motion.div 
        className="container-custom pt-20 pb-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Innovation Badge */}
        <motion.div 
          className="flex justify-center mb-12"
          variants={badgeVariants}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-bangladesh-green/30 text-anti-flash-white text-sm"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>🚀 Empowering Future Tech Leaders</span>
            <motion.svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              animate={{ x: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          className="text-center max-w-4xl mx-auto mb-16"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            variants={itemVariants}
          >
            Bridge Tech Excellence with
            <br />
            <motion.span 
              className="text-white font-black"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{
                background: "linear-gradient(90deg, #ffffff, #00E676, #ffffff)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Human Connection
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-stone leading-relaxed mb-12 max-w-2xl mx-auto font-semibold"
            variants={itemVariants}
          >
            Master cutting-edge technology, media, and communication skills while developing the 
            soft skills needed to thrive in today's global market
          </motion.p>
          
          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#services" className="hero-btn-primary">
                Explore Programs
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="#contact" className="hero-btn-secondary">
                Apply Now
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Learning Platform Preview */}
        <motion.div 
          className="relative max-w-5xl mx-auto"
          variants={dashboardVariants}
        >
          <motion.div 
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            whileHover={{ y: -10, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Platform Header */}
            <div className="bg-anti-flash-white px-6 py-4 border-b border-stone/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex gap-6 text-sm text-gray-600">
                    <span className="font-medium border-b-2 border-bangladesh-green pb-1">My Learning</span>
                    <span>Programs</span>
                    <span>Community</span>
                  </div>
                </div>
                <div className="bg-bangladesh-green text-white px-3 py-1 rounded-md text-sm font-medium">
                  Live Session
                </div>
              </div>
            </div>

            {/* Platform Content */}
            <div className="p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Active Students Card */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-bangladesh-green/10 rounded-lg flex items-center justify-center">
                      <motion.div 
                        className="w-4 h-4 bg-bangladesh-green rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      ></motion.div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Active Students</div>
                      <motion.div 
                        className="text-2xl font-bold text-gray-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.5 }}
                      >
                        2,847
                      </motion.div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className="bg-orange-400 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ delay: 1.8, duration: 1, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                  <div className="text-xs text-gray-500">Computing & Technology</div>
                </motion.div>

                {/* Course Completion Card */}
                <motion.div 
                  className="space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.4, duration: 0.6 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-bangladesh-green/10 rounded-lg flex items-center justify-center">
                      <motion.div 
                        className="w-4 h-4 bg-bangladesh-green rounded-full"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                      ></motion.div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Course Completion</div>
                      <motion.div 
                        className="text-2xl font-bold text-gray-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7, duration: 0.5 }}
                      >
                        94%
                      </motion.div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className="bg-bangladesh-green h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '94%' }}
                      transition={{ delay: 2, duration: 1, ease: "easeOut" }}
                    ></motion.div>
                  </div>
                  <div className="text-xs text-gray-500">Media & Communication</div>
                </motion.div>
              </div>

              {/* Bottom Section */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Premium Learning Experience</span>
                </div>
                <div className="text-sm text-gray-500">
                  Next session: Today 3:00 PM
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;