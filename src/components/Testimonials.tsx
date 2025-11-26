'use client';

import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "AI Engineer",
      company: "Google",
      content: "Balm City didn't just teach me to code—they taught me to think like an innovator. The blend of technical skills and soft skills prepared me for leadership roles I never imagined possible.",
      rating: 5,
      avatar: "bg-gradient-to-br from-bangladesh-green to-mountain-meadow"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "EduTech Innovations",
      content: "The entrepreneurship program at Balm City gave me the confidence and skills to launch my startup. We've now raised $5M and are impacting education globally. The network is incredible.",
      rating: 5,
      avatar: "bg-gradient-to-br from-dark-green to-bangladesh-green"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "Netflix",
      content: "Balm City's media program is unmatched. They taught me storytelling, brand strategy, and global communication. I went from student to leading creative campaigns for major streaming platforms.",
      rating: 5,
      avatar: "bg-gradient-to-br from-caribbean-green to-mountain-meadow"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Tech Consultant",
      company: "McKinsey & Company",
      content: "The global market focus at Balm City opened my eyes to opportunities worldwide. I now consult for Fortune 500 companies on digital transformation across three continents.",
      rating: 5,
      avatar: "bg-gradient-to-br from-mountain-meadow to-caribbean-green"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-pistachio/20 to-stone/10">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-green mb-4">
            What Our Alumni Say
          </h2>
          <p className="text-lg text-balm-dark max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our graduates have to say about 
            their transformative experience at Balm City.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-pistachio rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-bangladesh-green" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="pt-8">
              <div className="mb-8">
                <p className="text-lg md:text-xl text-balm-dark leading-relaxed mb-6">
                  &ldquo;{testimonials[currentTestimonial].content}&rdquo;
                </p>
                
                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-12 h-12 ${testimonials[currentTestimonial].avatar} rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-white font-semibold text-lg">
                      {testimonials[currentTestimonial].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark-green">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-balm-dark text-sm">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-stone/20 hover:bg-pistachio rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 text-balm-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-stone/20 hover:bg-pistachio rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 text-balm-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentTestimonial ? 'bg-bangladesh-green' : 'bg-stone'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-stone/20">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-bangladesh-green mb-2">94%</div>
            <div className="text-balm-dark text-sm">Job Placement Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-bangladesh-green mb-2">2,500+</div>
            <div className="text-balm-dark text-sm">Graduates Worldwide</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-bangladesh-green mb-2">150+</div>
            <div className="text-balm-dark text-sm">Industry Partners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-bangladesh-green mb-2">85%</div>
            <div className="text-balm-dark text-sm">Alumni Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;