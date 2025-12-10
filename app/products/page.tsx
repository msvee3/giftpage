"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

// Product data
const products = [
  {
    id: 1,
    name: "Birthday Celebrations",
    icon: "🎂",
    description: "Create a stunning personalized birthday webpage with photo galleries, countdown timers, wishes collection, and interactive elements.",
    features: ["Photo Gallery", "Countdown Timer", "Wishes Collection", "Video Messages", "Music Playlist"],
    price: 1500,
    popular: true,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 2,
    name: "Wedding Anniversary",
    icon: "💍",
    description: "Celebrate your love story with romantic timelines, photo collages, love letters, and a beautiful journey showcase.",
    features: ["Love Timeline", "Photo Collage", "Love Letters", "Memory Lane", "Anniversary Counter"],
    price: 1900,
    popular: true,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    name: "Work Anniversary",
    icon: "💼",
    description: "Recognize professional achievements with career milestone pages, team messages, and accomplishment showcases.",
    features: ["Career Timeline", "Team Messages", "Achievement Badges", "Stats Dashboard", "Thank You Wall"],
    price: 1700,
    popular: false,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 4,
    name: "Corporate Events",
    icon: "🏢",
    description: "Create team celebration pages and company milestone sites perfect for launches, achievements, and corporate gatherings.",
    features: ["Event Countdown", "Team Gallery", "Company Stats", "Interactive Agenda", "Live Updates"],
    price: 2900,
    popular: false,
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    id: 5,
    name: "Baby Announcement",
    icon: "👶",
    description: "Welcome your little one with beautiful announcement pages featuring galleries, growth tracking, and family messages.",
    features: ["Photo Gallery", "Birth Details", "Family Tree", "Growth Tracker", "Guest Book"],
    price: 1500,
    popular: true,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    id: 6,
    name: "Graduation",
    icon: "🎓",
    description: "Celebrate academic achievements with pages showcasing the graduate's journey, accomplishments, and well wishes.",
    features: ["Academic Journey", "Photo Timeline", "Congrats Wall", "Future Goals", "Memory Slideshow"],
    price: 1400,
    popular: false,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: 7,
    name: "Retirement",
    icon: "🌟",
    description: "Honor a lifetime of work with career retrospective webpages, colleague messages, and memorable moments.",
    features: ["Career Retrospective", "Colleague Messages", "Photo Archive", "Achievement Showcase", "Farewell Video"],
    price: 1200,
    popular: false,
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    id: 8,
    name: "Memorial & Tribute",
    icon: "🕯️",
    description: "Create touching remembrance pages to honor loved ones with tributes, memories, and virtual candle lighting.",
    features: ["Memory Wall", "Photo Archive", "Tribute Messages", "Virtual Candles", "Timeline of Life"],
    price: 2400,
    popular: false,
    gradient: "from-slate-400 to-gray-500",
  },
];

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [orderForm, setOrderForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleOrderClick = (product: typeof products[0]) => {
    setSelectedProduct(product);
    setShowOrderModal(true);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setOrderForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSendWhatsApp = () => {
    if (!selectedProduct || !orderForm.name || !orderForm.email || !orderForm.message) {
      return; // Form validation will handle this via required attributes
    }

    // Sanitize user input for URL encoding
    const sanitizedName = orderForm.name.trim();
    const sanitizedEmail = orderForm.email.trim();
    const sanitizedMessage = orderForm.message.trim();

    const message = `Hi, I would like to order:\n\nProduct: ${selectedProduct.name}\nPrice: ₹${selectedProduct.price}\n\nMy Details:\nName: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`;
    const whatsappUrl = `https://wa.me/918015767780?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Reset form and close modal
    setOrderForm({ name: "", email: "", message: "" });
    setShowOrderModal(false);
    setSelectedProduct(null);
  };

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
            professionally crafted with AI-powered design and delivered within 5-10 days 
            based on complexity. Simply order and we&apos;ll create an unforgettable celebration for you.
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
                      <span className="text-2xl font-bold text-white">₹{product.price}</span>
                      <span className="text-gray-500 text-sm">/page</span>
                    </div>
                    <button
                      onClick={() => handleOrderClick(product)}
                      className="btn-primary px-4 py-2 rounded-full text-white text-sm font-medium"
                    >
                      Order Now
                    </button>
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
              Contact us for help selecting the perfect package. We&apos;ll customize it to your needs 
              and deliver within 5-10 days based on complexity.
            </p>
            <Link
              href="/contact"
              className="inline-block btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg glow"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Order Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="glass-card rounded-2xl p-8 max-w-md w-full relative">
            {/* Close button */}
            <button
              onClick={() => {
                setShowOrderModal(false);
                setSelectedProduct(null);
                setOrderForm({ name: "", email: "", message: "" });
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              aria-label="Close"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl font-bold text-white mb-2">Order Product</h2>
            {selectedProduct && (
              <p className="text-gray-400 mb-6">
                {selectedProduct.name} - ₹{selectedProduct.price}
              </p>
            )}

            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={orderForm.name}
                  onChange={handleFormChange}
                  required
                  minLength={2}
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={orderForm.email}
                  onChange={handleFormChange}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={orderForm.message}
                  onChange={handleFormChange}
                  required
                  minLength={10}
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                onClick={handleSendWhatsApp}
                className="w-full btn-primary px-6 py-3 rounded-lg text-white font-semibold flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Send via WhatsApp
              </button>

              <p className="text-gray-500 text-xs text-center">
                You&apos;ll be redirected to WhatsApp to complete your order
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
