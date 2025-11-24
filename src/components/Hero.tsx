import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-dark-green relative overflow-hidden">
      <div className="container-custom pt-20 pb-16">
        {/* Version Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-bangladesh-green/30 text-anti-flash-white text-sm">
            <span>Version 2.0 is here</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Make Smarter Decisions with
            <br />
            <span className="text-white">Data-Driven Insights</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone leading-relaxed mb-12 max-w-2xl mx-auto">
            Leverage advanced data analytics tools and insights to make smarter decisions,
            optimize operations, and achieve your goals faster
          </p>
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="#portfolio" className="hero-btn-primary">
              Get Started Now
            </Link>
            <Link href="#about" className="hero-btn-secondary">
              Request a Demo
            </Link>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-slide-up">
            {/* Dashboard Header */}
            <div className="bg-anti-flash-white px-6 py-4 border-b border-stone/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex gap-6 text-sm text-gray-600">
                    <span className="font-medium border-b-2 border-bangladesh-green pb-1">Overview</span>
                    <span>Analytics</span>
                  </div>
                </div>
                <div className="bg-bangladesh-green text-white px-3 py-1 rounded-md text-sm font-medium">
                  Live Data
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Active Users Card */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-bangladesh-green/10 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-bangladesh-green rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">Active users</div>
                      <div className="text-2xl font-bold text-gray-900 animate-count-up">163.8k</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-orange-400 h-2 rounded-full animate-progress-bar" style={{ width: '65%' }}></div>
                  </div>
                </div>

                {/* New MRR Card */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-bangladesh-green/10 rounded-lg flex items-center justify-center">
                      <div className="w-4 h-4 bg-bangladesh-green rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">New MRR</div>
                      <div className="text-2xl font-bold text-gray-900 animate-count-up" style={{ animationDelay: '0.3s' }}>500.4k</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-bangladesh-green h-2 rounded-full animate-progress-bar" style={{ width: '80%', animationDelay: '0.5s' }}></div>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Premium Plan</span>
                </div>
                <div className="text-sm text-gray-500">
                  Last updated: 2m ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;