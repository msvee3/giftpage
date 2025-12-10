import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";

// Team members data - Commented out as Team section is disabled
/* const teamMembers = [
  {
    name: "Dr. Sarah Chen",
    role: "CEO & Founder",
    bio: "Former AI researcher at Stanford, passionate about using technology to create meaningful human connections.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Marcus Williams",
    role: "CTO",
    bio: "Full-stack developer with 15+ years experience building scalable web platforms and AI systems.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Emma Rodriguez",
    role: "Head of Design",
    bio: "Award-winning UX designer specializing in emotional design and creating memorable digital experiences.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "James Park",
    role: "Lead Developer",
    bio: "Expert in web technologies and animation, making our gift pages come alive with beautiful interactions.",
    gradient: "from-indigo-500 to-purple-500",
  },
]; */

// Process steps
const processSteps = [
  {
    step: 1,
    title: "Choose Your Occasion",
    description: "Select from our curated collection of gift page templates designed for birthdays, anniversaries, corporate events, and more.",
    icon: "🎯",
  },
  {
    step: 2,
    title: "Personalize Your Page",
    description: "Use our intuitive editor to add photos, videos, messages, and customize colors and layouts to match your vision.",
    icon: "✨",
  },
  {
    step: 3,
    title: "AI Enhancement",
    description: "Our AI optimizes your content, suggests improvements, and ensures your page looks stunning on all devices.",
    icon: "🤖",
  },
  {
    step: 4,
    title: "Share & Celebrate",
    description: "Get your unique link and share it with loved ones. Watch as they add their wishes and engage with your celebration.",
    icon: "🎉",
  },
];

// Why choose us items
const whyChooseUs = [
  {
    title: "AI-Powered Design",
    description: "Our intelligent algorithms create visually stunning pages that adapt to your content and preferences.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Fast Delivery",
    description: "Pages are delivered within 5-10 days based on complexity. Our expert team ensures quality and attention to detail.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Beautiful Templates",
    description: "Choose from hundreds of professionally designed templates, each crafted to make your celebration memorable.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Unlimited Revisions",
    description: "Not satisfied? We offer unlimited revisions until your gift page is exactly as you envisioned.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: "Secure & Private",
    description: "Your memories are precious. We use enterprise-grade security to protect your photos, videos, and messages.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: "Global Accessibility",
    description: "Your gift page works everywhere. Share with family and friends around the world without any barriers.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0f172a] neural-bg">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto text-center relative">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="gradient-text">GiftPage AI</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We&apos;re on a mission to revolutionize how the world celebrates life&apos;s 
            precious moments through AI-powered digital gift experiences.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-gray-400 leading-relaxed">
                  To empower people to create meaningful, lasting digital memories that 
                  celebrate life&apos;s most important moments. We believe every birthday, 
                  anniversary, graduation, and milestone deserves to be honored in a way 
                  that&apos;s as unique as the people being celebrated.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-bl-full"></div>
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mb-6">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
                <p className="text-gray-400 leading-relaxed">
                  A world where distance doesn&apos;t diminish celebration. Where loved ones 
                  anywhere on the planet can contribute to and experience shared moments 
                  of joy. We&apos;re building the future of digital gift-giving, one 
                  celebration at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Creating your perfect digital gift page is simple. Follow these four 
              easy steps to create something unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 -translate-x-1/2"></div>
                )}
                
                <div className="glass-card rounded-2xl p-6 text-center h-full">
                  {/* Step number */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Commented out as per request
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A passionate group of designers, developers, and dreamers dedicated 
              to making your celebrations extraordinary.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${member.gradient} mx-auto mb-4 flex items-center justify-center text-3xl font-bold text-white group-hover:scale-110 transition-transform`}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className="text-purple-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose <span className="gradient-text">GiftPage AI</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We&apos;re not just another website builder. Here&apos;s what makes us different.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 glow-hover transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl sm:text-5xl font-bold gradient-text mb-2">50K+</p>
                <p className="text-gray-400">Gift Pages Created</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold gradient-text mb-2">98%</p>
                <p className="text-gray-400">Customer Satisfaction</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold gradient-text mb-2">120+</p>
                <p className="text-gray-400">Countries Served</p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold gradient-text mb-2">4.9★</p>
                <p className="text-gray-400">Average Rating</p>
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
              Ready to Create Your First <span className="gradient-text">Gift Page?</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Join thousands of happy customers who have already created unforgettable 
              digital celebrations with GiftPage AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg glow"
              >
                View Products
              </Link>
              <Link
                href="/contact"
                className="glass-card px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
