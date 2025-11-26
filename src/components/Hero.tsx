'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const InteractiveShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const showcaseItems = [
    {
      id: 1,
      title: "AI & Machine Learning Lab",
      description: "State-of-the-art AI laboratory where students build neural networks, develop machine learning models, and create intelligent systems that solve real-world problems.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      category: "Computing & Technology",
      stats: "50+ AI Projects Completed"
    },
    {
      id: 2,
      title: "Digital Media Studio",
      description: "Professional-grade media production facility equipped with 4K cameras, audio recording booths, and editing suites for creating compelling digital content.",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2865&q=80",
      category: "Media & Communication",
      stats: "200+ Media Projects"
    },
    {
      id: 3,
      title: "Global Innovation Hub",
      description: "Collaborative workspace where students connect with international partners, develop global solutions, and launch startups that impact communities worldwide.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2871&q=80",
      category: "Tech & Global Market",
      stats: "15+ Countries Connected"
    },
    {
      id: 4,
      title: "EdTech Development Center",
      description: "Cutting-edge facility for designing educational technologies, creating learning platforms, and developing tools that make education accessible to all.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      category: "Educational Technology",
      stats: "30+ EdTech Solutions Built"
    }
  ];

  const nextSlide = () => {
    setImageLoaded(false);
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setImageLoaded(false);
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const hingeVariants = {
    initial: { rotateY: 0, transformOrigin: "left center", scale: 1 },
    exit: { 
      rotateY: -90, 
      transformOrigin: "left center",
      scale: 0.8,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const }
    },
    enter: { 
      rotateY: 0, 
      transformOrigin: "right center",
      scale: 1,
      transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] as const, delay: 0.2 }
    }
  };

  return (
    <motion.div 
      className="relative max-w-7xl mx-auto"
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
    >
      {/* Main Showcase Container */}
      <div className="relative h-[600px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        
        {/* Navigation Controls */}
        <div className="absolute top-6 right-6 z-20 flex gap-3">
          <motion.button
            onClick={() => {
              prevSlide();
              setIsPaused(false);
            }}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-xl rounded-full flex items-center justify-center shadow-lg transition-all duration-200 border border-white/50"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 230, 118, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5 text-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          <motion.button
            onClick={() => {
              nextSlide();
              setIsPaused(false);
            }}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm hover:bg-white hover:shadow-xl rounded-full flex items-center justify-center shadow-lg transition-all duration-200 border border-white/50"
            whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 230, 118, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            <svg className="w-5 h-5 text-dark-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
          {showcaseItems.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setImageLoaded(false);
                setCurrentSlide(index);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-bangladesh-green scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            variants={hingeVariants}
            initial="initial"
            animate="enter"
            exit="exit"
            className="absolute inset-0 w-full h-full"
            onMouseEnter={() => {
              setIsHovered(true);
              setIsPaused(true);
            }}
            onMouseLeave={() => {
              setIsHovered(false);
              setIsPaused(false);
            }}
          >
            {/* Background Image */}
            <div className="w-full h-full relative bg-gradient-to-br from-bangladesh-green/30 to-dark-green/50">
              {/* Loading placeholder */}
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-bangladesh-green/20 to-dark-green/40 animate-pulse" />
              )}
              
              <img 
                src={showcaseItems[currentSlide].image}
                alt={showcaseItems[currentSlide].title}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  setImageLoaded(false);
                }}
              />
              
              {/* Content Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-green/80 via-dark-green/20 to-transparent" />
              
              {/* Category Badge */}
              <div className="absolute top-6 left-6 z-10">
                <span className="px-4 py-2 bg-bangladesh-green text-white text-sm font-medium rounded-full">
                  {showcaseItems[currentSlide].category}
                </span>
              </div>

              {/* Stats Badge */}
              <div className="absolute top-6 left-6 mt-12 z-10">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                  {showcaseItems[currentSlide].stats}
                </span>
              </div>

              {/* Hover Description */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-dark-green/95 to-transparent"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      {showcaseItems[currentSlide].title}
                    </h3>
                    <p className="text-stone text-lg leading-relaxed max-w-2xl">
                      {showcaseItems[currentSlide].description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Always Visible Title (when not hovered) */}
              {!isHovered && (
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  className="absolute bottom-8 left-8"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {showcaseItems[currentSlide].title}
                  </h3>
                </motion.div>
              )}

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-96 h-96 border border-white/30 rounded-full"
                />
              </div>
              
              <div className="absolute top-1/4 right-1/3 opacity-10">
                <motion.div
                  animate={{ 
                    y: [-15, 15, -15],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="w-24 h-24 bg-white/20 rounded-2xl backdrop-blur-sm"
                />
              </div>

              <div className="absolute bottom-1/4 left-1/4 opacity-10">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="w-16 h-16 bg-bangladesh-green/30 rounded-full"
                />
              </div>

              {/* Tech Icons Floating */}
              <div className="absolute top-20 right-20 opacity-20">
                <motion.div
                  animate={{ 
                    y: [-5, 5, -5],
                    x: [-2, 2, -2]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="text-white/40"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                  </svg>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Auto-play Progress Bar */}
      <div className="mt-6 w-full bg-white/20 rounded-full h-1 overflow-hidden">
        <motion.div
          key={`progress-${currentSlide}`}
          className="h-full bg-bangladesh-green"
          initial={{ width: "0%" }}
          animate={{ width: isPaused ? "0%" : "100%" }}
          transition={{ duration: isPaused ? 0.3 : 6, ease: "linear" }}
          onAnimationComplete={() => {
            if (!isPaused) {
              setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
              }, 100);
            }
          }}
        />
      </div>
    </motion.div>
  );
};

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
        ease: [0.25, 0.46, 0.45, 0.94] as const
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
        ease: [0.25, 0.46, 0.45, 0.94] as const
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
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.8
      }
    }
  };

  return (
    <section id="home" className="min-h-screen bg-green-600 relative overflow-hidden">
      {/* Noise Texture Overlay */}
      <motion.div 
        className="absolute inset-0 opacity-15 mix-blend-soft-light pointer-events-none"
        style={{
          backgroundImage: "url('/image noise.jpg')",
          backgroundRepeat: 'repeat',
          backgroundSize: '300px 300px',
          filter: 'contrast(1.2) brightness(1.1)'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Additional subtle noise layer */}
      <motion.div 
        className="absolute inset-0 opacity-8 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "url('')",
          backgroundRepeat: 'repeat',
          backgroundSize: '150px 150px',
          transform: 'rotate(45deg) scale(1.5)'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '-30px -30px', '0px 0px']
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="container-custom pt-20 pb-16 relative z-10"
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

        {/* Interactive Showcase */}
        <InteractiveShowcase />
      </motion.div>
    </section>
  );
};

export default Hero;