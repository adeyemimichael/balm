'use client';

import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'branding', label: 'Branding' },
    { id: 'illustration', label: 'Illustration' },
    { id: 'web', label: 'Web Design' },
    { id: 'print', label: 'Print' }
  ];

  const projects = [
    {
      id: 1,
      title: "EcoFlow Brand Identity",
      category: "branding",
      description: "Complete brand identity for sustainable energy company",
      image: "bg-gradient-to-br from-green-100 to-green-200",
      tags: ["Logo Design", "Brand Guidelines", "Packaging"]
    },
    {
      id: 2,
      title: "Digital Art Collection",
      category: "illustration",
      description: "Series of digital illustrations for tech startup",
      image: "bg-gradient-to-br from-purple-100 to-pink-200",
      tags: ["Digital Art", "Character Design", "Icons"]
    },
    {
      id: 3,
      title: "Mindful App Interface",
      category: "web",
      description: "UI/UX design for meditation and wellness app",
      image: "bg-gradient-to-br from-blue-100 to-indigo-200",
      tags: ["UI Design", "UX Research", "Prototyping"]
    },
    {
      id: 4,
      title: "Artisan Coffee Packaging",
      category: "print",
      description: "Premium packaging design for specialty coffee brand",
      image: "bg-gradient-to-br from-amber-100 to-orange-200",
      tags: ["Packaging", "Print Design", "Typography"]
    },
    {
      id: 5,
      title: "TechStart Logo Suite",
      category: "branding",
      description: "Modern logo and visual identity system",
      image: "bg-gradient-to-br from-primary-100 to-primary-200",
      tags: ["Logo Design", "Visual Identity", "Brand Strategy"]
    },
    {
      id: 6,
      title: "Nature Illustration Series",
      category: "illustration",
      description: "Hand-drawn botanical illustrations for wellness brand",
      image: "bg-gradient-to-br from-sage-100 to-sage-200",
      tags: ["Botanical Art", "Hand Drawing", "Nature"]
    },
    {
      id: 7,
      title: "E-commerce Platform",
      category: "web",
      description: "Complete e-commerce website design and development",
      image: "bg-gradient-to-br from-rose-100 to-pink-200",
      tags: ["E-commerce", "Responsive Design", "User Experience"]
    },
    {
      id: 8,
      title: "Annual Report Design",
      category: "print",
      description: "Corporate annual report with infographics",
      image: "bg-gradient-to-br from-neutral-100 to-neutral-200",
      tags: ["Editorial Design", "Infographics", "Corporate"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            Explore our recent work and see how we&apos;ve helped brands tell their stories 
            through compelling visual design.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4">
                {/* Placeholder Image */}
                <div className={`aspect-[4/3] ${project.image} flex items-center justify-center relative`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="text-center z-10">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl mx-auto mb-3 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <p className="text-white/80 text-sm font-medium">View Project</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-display font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-neutral-600 mb-6">
            Like what you see? Let&apos;s create something amazing together.
          </p>
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;