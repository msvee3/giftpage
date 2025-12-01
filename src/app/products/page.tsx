import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// Product data
const products = [
  {
    id: 1,
    name: "Birthday Celebrations",
    icon: "🎂",
    description: "Create a stunning personalized birthday webpage with photo galleries, countdown timers, wishes collection, and interactive elements.",
    features: ["Photo Gallery", "Countdown Timer", "Wishes Collection", "Video Messages", "Music Playlist"],
    price: 49,
    popular: true,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    name: "Wedding Anniversary",
    icon: "💍",
    description: "Celebrate your love story with romantic timelines, photo collages, love letters, and a beautiful journey showcase.",
    features: ["Love Timeline", "Photo Collage", "Love Letters", "Memory Lane", "Anniversary Counter"],
    price: 79,
    popular: true,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Work Anniversary",
    icon: "💼",
    description: "Recognize professional achievements with career milestone pages, team messages, and accomplishment showcases.",
    features: ["Career Timeline", "Team Messages", "Achievement Badges", "Stats Dashboard", "Thank You Wall"],
    price: 59,
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    name: "Corporate Events",
    icon: "🏢",
    description: "Create team celebration pages and company milestone sites perfect for launches, achievements, and corporate gatherings.",
    features: ["Event Countdown", "Team Gallery", "Company Stats", "Interactive Agenda", "Live Updates"],
    price: 99,
    popular: false,
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: 5,
    name: "Baby Announcement",
    icon: "👶",
    description: "Welcome your little one with beautiful announcement pages featuring galleries, growth tracking, and family messages.",
    features: ["Photo Gallery", "Birth Details", "Family Tree", "Growth Tracker", "Guest Book"],
    price: 69,
    popular: true,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: 6,
    name: "Graduation",
    icon: "🎓",
    description: "Celebrate academic achievements with pages showcasing the graduate's journey, accomplishments, and well wishes.",
    features: ["Academic Journey", "Photo Timeline", "Congrats Wall", "Future Goals", "Memory Slideshow"],
    price: 54,
    popular: false,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 7,
    name: "Retirement",
    icon: "🌟",
    description: "Honor a lifetime of work with career retrospective webpages, colleague messages, and memorable moments.",
    features: ["Career Retrospective", "Colleague Messages", "Photo Archive", "Achievement Showcase", "Farewell Video"],
    price: 74,
    popular: false,
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    id: 8,
    name: "Memorial & Tribute",
    icon: "🕯️",
    description: "Create touching remembrance pages to honor loved ones with tributes, memories, and virtual candle lighting.",
    features: ["Memory Wall", "Photo Archive", "Tribute Messages", "Virtual Candles", "Timeline of Life"],
    price: 64,
    popular: false,
    gradient: "from-slate-400 to-gray-500",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] neural-bg">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our <span className="gradient-text">Gift Page</span> Packages
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Choose the perfect digital gift page for any occasion. Each package is 
            crafted with AI-powered design and customizable features to create 
            unforgettable celebrations.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 relative"
              >
                {/* Popular Badge */}
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Popular
                  </div>
                )}

                {/* Preview Mockup */}
                <div className={`h-48 bg-gradient-to-br ${product.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  {/* Mockup representation */}
                  <div className="absolute inset-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 p-3">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-4xl text-center mt-4 group-hover:scale-110 transition-transform">
                      {product.icon}
                    </div>
                    <div className="h-2 bg-white/30 rounded mt-4 w-3/4 mx-auto"></div>
                    <div className="h-2 bg-white/20 rounded mt-2 w-1/2 mx-auto"></div>
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-purple-500/30 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white">{product.name}</h3>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                    {product.features.length > 3 && (
                      <p className="text-gray-500 text-sm">+{product.features.length - 3} more features</p>
                    )}
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <div>
                      <span className="text-2xl font-bold text-white">${product.price}</span>
                      <span className="text-gray-500 text-sm">/page</span>
                    </div>
                    <Link
                      href="/contact"
                      className="btn-primary px-4 py-2 rounded-full text-white text-sm font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              What&apos;s Included in <span className="gradient-text">Every Package</span>
            </h2>
            <p className="text-gray-400">
              All our gift pages come with these powerful features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Responsive Design</h3>
                <p className="text-gray-400 text-sm">Beautiful on all devices - desktop, tablet, and mobile</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Custom Domain</h3>
                <p className="text-gray-400 text-sm">Get a personalized link or use your own domain</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">SSL Secured</h3>
                <p className="text-gray-400 text-sm">Your page is protected with industry-standard encryption</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">1 Year Hosting</h3>
                <p className="text-gray-400 text-sm">Your page stays online for a full year, renewable anytime</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">Easy Editor</h3>
                <p className="text-gray-400 text-sm">Intuitive drag-and-drop editor, no coding needed</p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">24/7 Support</h3>
                <p className="text-gray-400 text-sm">Our team is always here to help you create the perfect page</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-pink-500/10"></div>
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Not Sure Which Package to Choose?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Contact us for a free consultation. We&apos;ll help you select the perfect 
              package and customize it to your needs.
            </p>
            <Link
              href="/contact"
              className="inline-block btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg glow"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
