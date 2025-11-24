'use client';

import { useState, useEffect } from 'react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, EcoFlow",
      company: "EcoFlow Energy",
      content: "Balmcity transformed our brand identity completely. Their creative vision and attention to detail exceeded our expectations. The new branding has significantly improved our market presence.",
      rating: 5,
      avatar: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Founder",
      company: "TechStart Solutions",
      content: "Working with Balmcity was an absolute pleasure. They understood our vision perfectly and delivered designs that truly represent our brand values. Highly recommended!",
      rating: 5,
      avatar: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Artisan Coffee Co.",
      content: "The packaging design Balmcity created for us has been a game-changer. Our products now stand out on shelves, and customer feedback has been overwhelmingly positive.",
      rating: 5,
      avatar: "bg-gradient-to-br from-amber-400 to-orange-600"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Product Manager",
      company: "Mindful Apps",
      content: "Balmcity's UI/UX design for our wellness app is simply outstanding. The user experience is intuitive and beautiful, leading to increased user engagement and retention.",
      rating: 5,
      avatar: "bg-gradient-to-br from-purple-400 to-purple-600"
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
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary-50 to-sage-50">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about 
            working with Balmcity.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            {/* Quote Icon */}
            <div className="absolute top-6 left-6 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-primary-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="pt-8">
              <div className="mb-8">
                <p className="text-lg md:text-xl text-neutral-700 leading-relaxed mb-6">
                  "                  &ldquo;{testimonials[currentTestimonial].content}&rdquo;"
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
                    <h4 className="font-semibold text-neutral-900">
                      {testimonials[currentTestimonial].name}
                    </h4>
                    <p className="text-neutral-600 text-sm">
                      {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-10 h-10 bg-neutral-100 hover:bg-neutral-200 rounded-full flex items-center justify-center transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  index === currentTestimonial ? 'bg-primary-600' : 'bg-neutral-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-neutral-200">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">98%</div>
            <div className="text-neutral-600 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">150+</div>
            <div className="text-neutral-600 text-sm">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">50+</div>
            <div className="text-neutral-600 text-sm">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">5+</div>
            <div className="text-neutral-600 text-sm">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;