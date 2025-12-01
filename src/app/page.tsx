import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// Occasion categories data
const occasions = [
  { icon: "🎂", name: "Birthdays", description: "Celebrate another year of amazing memories" },
  { icon: "💍", name: "Anniversaries", description: "Honor your love story journey" },
  { icon: "💼", name: "Work Milestones", description: "Recognize professional achievements" },
  { icon: "🎓", name: "Graduation", description: "Celebrate academic success" },
  { icon: "👶", name: "Baby Announcements", description: "Welcome new family members" },
  { icon: "🌟", name: "Retirement", description: "Honor career achievements" },
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Celebrated 25th Anniversary",
    content: "The anniversary page we created was absolutely magical. Our family and friends loved adding their memories to it. It's become a digital keepsake we'll treasure forever!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Birthday Celebration",
    content: "I was skeptical about digital gifts, but this blew me away. The AI-powered design created something so personal and beautiful. My mom cried happy tears!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Corporate Event",
    content: "We used GiftPage for our team's work anniversary celebration. The collaborative features made it easy for everyone to contribute. Highly professional and memorable!",
    rating: 5,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f172a] neural-bg">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Particles with predetermined positions */}
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '5%', top: '10%', animationDelay: '0s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '15%', top: '25%', animationDelay: '0.5s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '25%', top: '60%', animationDelay: '1s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '35%', top: '15%', animationDelay: '1.5s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '45%', top: '80%', animationDelay: '2s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '55%', top: '30%', animationDelay: '2.5s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '65%', top: '70%', animationDelay: '3s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '75%', top: '20%', animationDelay: '3.5s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '85%', top: '50%', animationDelay: '4s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '95%', top: '85%', animationDelay: '4.5s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '10%', top: '45%', animationDelay: '0.3s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '20%', top: '90%', animationDelay: '0.8s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '30%', top: '35%', animationDelay: '1.3s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '40%', top: '55%', animationDelay: '1.8s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '50%', top: '5%', animationDelay: '2.3s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '60%', top: '40%', animationDelay: '2.8s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '70%', top: '95%', animationDelay: '3.3s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '80%', top: '65%', animationDelay: '3.8s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '90%', top: '12%', animationDelay: '4.3s' }}></div>
          <div className="absolute w-2 h-2 bg-white/20 rounded-full animate-particle" style={{ left: '3%', top: '75%', animationDelay: '4.8s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          {/* AI Badge */}
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-gray-300">Powered by AI</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Create Unforgettable</span>
            <br />
            <span className="gradient-text">Digital Gift Pages</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            Transform your celebrations into stunning, shareable digital experiences. 
            Our AI-powered platform creates personalized webpages that capture memories, 
            photos, and heartfelt messages for every special occasion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg glow-hover"
            >
              Explore Products
            </Link>
            <Link
              href="/about"
              className="glass-card px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>24hr Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Digital Gift Pages Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">Digital Gift Pages?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              In a world where connections matter more than ever, digital gift pages 
              offer a modern, meaningful way to celebrate life&apos;s precious moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Cards */}
            <div className="glass-card rounded-2xl p-6 glow-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Easily Shareable</h3>
              <p className="text-gray-400">
                Share your celebration page with anyone, anywhere in the world with just a link. 
                No physical shipping, no delays.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 glow-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Deeply Personal</h3>
              <p className="text-gray-400">
                Include photos, videos, messages, and memories all in one beautiful place. 
                Create something truly meaningful.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 glow-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Eco-Friendly</h3>
              <p className="text-gray-400">
                No paper waste, no plastic packaging. Celebrate sustainably while 
                creating lasting digital memories.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 glow-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Accessible Anywhere</h3>
              <p className="text-gray-400">
                View your gift page on any device, anytime. Perfect for families 
                spread across the globe.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 glow-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Rich Media Support</h3>
              <p className="text-gray-400">
                Add photos, videos, music, and interactive elements to create 
                an immersive celebration experience.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-6 glow-hover transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Collaborative</h3>
              <p className="text-gray-400">
                Invite friends and family to contribute their own messages, 
                photos, and wishes to the celebration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Occasion Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Perfect for <span className="gradient-text">Every Occasion</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From birthdays to retirements, we have the perfect digital gift page 
              for every milestone in life.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {occasions.map((occasion, index) => (
              <Link
                key={index}
                href="/products"
                className="glass-card rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {occasion.icon}
                </div>
                <h3 className="text-white font-medium mb-1">{occasion.name}</h3>
                <p className="text-gray-500 text-xs">{occasion.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Loved by <span className="gradient-text">Thousands</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              See what our customers say about their experience creating 
              unforgettable digital celebrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 relative overflow-hidden"
              >
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full"></div>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-300 mb-6 italic">&quot;{testimonial.content}&quot;</p>

                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-medium">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10"></div>
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Create Something <span className="gradient-text">Magical?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Start creating your personalized digital gift page today. 
              It only takes a few minutes to design something unforgettable.
            </p>
            <Link
              href="/products"
              className="inline-block btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg glow"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
