'use client';

import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Success Stories' },
    { id: 'tech', label: 'Tech Graduates' },
    { id: 'media', label: 'Media Alumni' },
    { id: 'startup', label: 'Entrepreneurs' },
    { id: 'global', label: 'Global Impact' }
  ];

  const projects = [
    {
      id: 1,
      title: "AI Startup Success",
      category: "tech",
      description: "Graduate launched AI-powered healthcare platform, raised $2M in seed funding",
      image: "bg-gradient-to-br from-bangladesh-green/20 to-mountain-meadow/20",
      tags: ["AI Development", "Healthcare Tech", "Startup Success"]
    },
    {
      id: 2,
      title: "Digital Media Agency",
      category: "media",
      description: "Alumni founded award-winning digital storytelling agency serving Fortune 500 clients",
      image: "bg-gradient-to-br from-pistachio/30 to-stone/20",
      tags: ["Digital Storytelling", "Brand Strategy", "Creative Direction"]
    },
    {
      id: 3,
      title: "EdTech Innovation",
      category: "startup",
      description: "Student-built learning platform now used by 50,000+ learners globally",
      image: "bg-gradient-to-br from-caribbean-green/20 to-bangladesh-green/20",
      tags: ["EdTech", "Platform Development", "Global Reach"]
    },
    {
      id: 4,
      title: "Global Tech Consulting",
      category: "global",
      description: "Graduate leads international tech consulting firm with offices in 12 countries",
      image: "bg-gradient-to-br from-dark-green/20 to-bangladesh-green/20",
      tags: ["Global Business", "Tech Consulting", "Leadership"]
    },
    {
      id: 5,
      title: "Social Impact App",
      category: "tech",
      description: "Mobile app connecting communities for social good, 1M+ downloads",
      image: "bg-gradient-to-br from-mountain-meadow/20 to-caribbean-green/20",
      tags: ["Mobile Development", "Social Impact", "Community Building"]
    },
    {
      id: 6,
      title: "Content Creator Success",
      category: "media",
      description: "Graduate built multimedia brand with 500K+ followers across platforms",
      image: "bg-gradient-to-br from-stone/20 to-pistachio/30",
      tags: ["Content Creation", "Personal Branding", "Multimedia"]
    },
    {
      id: 7,
      title: "Fintech Innovation",
      category: "startup",
      description: "Revolutionary payment solution serving emerging markets, $10M+ processed",
      image: "bg-gradient-to-br from-bangladesh-green/20 to-dark-green/20",
      tags: ["Fintech", "Emerging Markets", "Payment Solutions"]
    },
    {
      id: 8,
      title: "Remote Learning Pioneer",
      category: "global",
      description: "Created accessible learning solutions for underserved communities worldwide",
      image: "bg-gradient-to-br from-caribbean-green/20 to-mountain-meadow/20",
      tags: ["Remote Learning", "Accessibility", "Global Education"]
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
          <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-green mb-4">
            Student Success Stories
          </h2>
          <p className="text-lg text-balm-dark max-w-2xl mx-auto mb-8">
            Discover how our graduates are making their mark in tech, media, and global markets. 
            These are the innovators, creators, and leaders we&apos;re proud to call alumni.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors duration-200 ${
                  activeFilter === filter.id
                    ? 'bg-bangladesh-green text-white'
                    : 'bg-stone/20 text-balm-dark hover:bg-pistachio'
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
                <h3 className="text-xl font-display font-semibold text-dark-green group-hover:text-bangladesh-green transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-balm-dark text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-pistachio text-bangladesh-green text-xs rounded-full"
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
          <p className="text-balm-dark mb-6">
            Ready to write your own success story? Join our community of innovators.
          </p>
          <a href="#contact" className="btn-primary">
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;