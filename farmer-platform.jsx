import React, { useState } from 'react';
import { Calendar, Heart, Leaf, MapPin, Clock, ArrowRight, Check, Users, TrendingUp, Shield, Package } from 'lucide-react';

// Main App Component
export default function FarmFreshPlatform() {
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Organic Tomatoes",
      farmer: "Rajesh Kumar",
      location: "Nashik, Maharashtra",
      price: 45,
      unit: "kg",
      image: "🍅",
      category: "vegetables",
      delivery: "Saturday, Feb 3"
    },
    {
      id: 2,
      name: "Fresh Spinach",
      farmer: "Lakshmi Devi",
      location: "Pune, Maharashtra",
      price: 30,
      unit: "kg",
      image: "🥬",
      category: "vegetables",
      delivery: "Saturday, Feb 3"
    },
    {
      id: 3,
      name: "Alphonso Mangoes",
      farmer: "Suresh Patil",
      location: "Ratnagiri, Maharashtra",
      price: 180,
      unit: "kg",
      image: "🥭",
      category: "fruits",
      delivery: "Saturday, Feb 3"
    },
    {
      id: 4,
      name: "Raw Honey",
      farmer: "Meena Sharma",
      location: "Coorg, Karnataka",
      price: 320,
      unit: "500g",
      image: "🍯",
      category: "homemade",
      delivery: "Saturday, Feb 3"
    },
    {
      id: 5,
      name: "Red Onions",
      farmer: "Anil Jadhav",
      location: "Nashik, Maharashtra",
      price: 35,
      unit: "kg",
      image: "🧅",
      category: "vegetables",
      delivery: "Saturday, Feb 3"
    },
    {
      id: 6,
      name: "Fresh Cauliflower",
      farmer: "Ramesh Singh",
      location: "Pune, Maharashtra",
      price: 40,
      unit: "kg",
      image: "🥦",
      category: "vegetables",
      delivery: "Saturday, Feb 3"
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#E8DCC8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <button 
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6B8E23] to-[#556B2F] flex items-center justify-center">
              <Leaf className="text-white" size={24} />
            </div>
            <span className="text-2xl font-bold text-[#2C3E1F] tracking-tight">खेत<span className="text-[#6B8E23]">संग</span></span>
          </button>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => setCurrentView('home')}
              className="text-[#2C3E1F] hover:text-[#6B8E23] transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentView('marketplace')}
              className="text-[#2C3E1F] hover:text-[#6B8E23] transition-colors font-medium"
            >
              Marketplace
            </button>
            <button 
              onClick={() => setCurrentView('how-it-works')}
              className="text-[#2C3E1F] hover:text-[#6B8E23] transition-colors font-medium"
            >
              How It Works
            </button>
            <button 
              onClick={() => setCurrentView('about')}
              className="text-[#2C3E1F] hover:text-[#6B8E23] transition-colors font-medium"
            >
              About
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setCurrentView('marketplace')}
              className="relative"
            >
              <Package className="text-[#2C3E1F]" size={24} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#D4A574] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
            <button 
              onClick={() => setCurrentView('seller-onboarding')}
              className="px-6 py-2.5 bg-[#2C3E1F] text-white rounded-full hover:bg-[#6B8E23] transition-all duration-300 font-medium"
            >
              Start Selling
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  // Homepage
  const Homepage = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FEFAF5] to-[#F5EFE7]">
      <div className="pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-[#E8DCC8] rounded-full text-sm font-medium text-[#2C3E1F]">
                🌾 Supporting 1,200+ farming families
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-[#2C3E1F] leading-tight">
                Fresh from the farm,
                <span className="block text-[#6B8E23]">once a week</span>
              </h1>
              <p className="text-xl text-[#5C6B4A] leading-relaxed">
                Real produce from real farmers. No middlemen. No daily chaos. 
                Just predictable, dignified farming that respects the land and the people who work it.
              </p>
              
              {/* Delivery Timeline */}
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border-2 border-[#D4A574]">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="text-[#6B8E23]" size={24} />
                  <span className="font-semibold text-[#2C3E1F]">This Week's Delivery</span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-[#5C6B4A]">Orders close</span>
                    <span className="font-bold text-[#2C3E1F]">Friday, 9 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#5C6B4A]">Delivery happens</span>
                    <span className="font-bold text-[#6B8E23]">Saturday, Feb 3</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button 
                  onClick={() => setCurrentView('marketplace')}
                  className="px-8 py-4 bg-[#6B8E23] text-white rounded-full hover:bg-[#556B2F] transition-all duration-300 font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Browse Marketplace
                  <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => setCurrentView('how-it-works')}
                  className="px-8 py-4 border-2 border-[#2C3E1F] text-[#2C3E1F] rounded-full hover:bg-[#2C3E1F] hover:text-white transition-all duration-300 font-semibold text-lg"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6B8E23]/20 to-[#D4A574]/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white/40 backdrop-blur-sm rounded-3xl p-8 border border-[#E8DCC8]">
                <div className="grid grid-cols-2 gap-4">
                  {['🌾', '🥕', '🍇', '🥬'].map((emoji, i) => (
                    <div 
                      key={i}
                      className="aspect-square bg-gradient-to-br from-white to-[#FFF8F0] rounded-2xl flex items-center justify-center text-6xl hover:scale-105 transition-transform shadow-lg"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    >
                      {emoji}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#E8DCC8] hover:border-[#D4A574] transition-colors">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6B8E23] to-[#556B2F] flex items-center justify-center mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#2C3E1F] mb-3">Farmer Dignity</h3>
              <p className="text-[#5C6B4A] leading-relaxed">
                No public comparisons, no exploitation. Farmers set their prices and work on their own schedule.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#E8DCC8] hover:border-[#D4A574] transition-colors">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6B8E23] to-[#556B2F] flex items-center justify-center mb-6">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#2C3E1F] mb-3">Predictable Schedule</h3>
              <p className="text-[#5C6B4A] leading-relaxed">
                Weekly deliveries reduce waste, stress, and emissions. Better for everyone.
              </p>
            </div>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#E8DCC8] hover:border-[#D4A574] transition-colors">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6B8E23] to-[#556B2F] flex items-center justify-center mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-[#2C3E1F] mb-3">Complete Trust</h3>
              <p className="text-[#5C6B4A] leading-relaxed">
                Know exactly where your food comes from and who grew it with care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Marketplace
  const Marketplace = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FEFAF5] to-[#F5EFE7] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notice Banner */}
        <div className="mb-12 bg-gradient-to-r from-[#6B8E23]/10 to-[#D4A574]/10 rounded-2xl p-6 border-l-4 border-[#6B8E23]">
          <div className="flex items-start gap-4">
            <Calendar className="text-[#6B8E23] mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="font-bold text-[#2C3E1F] mb-2">Items are delivered together once a week</h3>
              <p className="text-[#5C6B4A]">
                Order anytime before Friday 9 PM. All items will be freshly prepared and delivered on Saturday, February 3.
              </p>
            </div>
          </div>
        </div>

        <h1 className="text-5xl font-bold text-[#2C3E1F] mb-4">Weekly Marketplace</h1>
        <p className="text-xl text-[#5C6B4A] mb-12">Fresh produce from local farming families</p>

        {/* Category Filters */}
        <div className="flex gap-4 mb-12 overflow-x-auto pb-2">
          {['All', 'Vegetables', 'Fruits', 'Homemade'].map((cat) => (
            <button 
              key={cat}
              className="px-6 py-3 bg-white rounded-full border-2 border-[#E8DCC8] hover:border-[#6B8E23] hover:bg-[#6B8E23] hover:text-white transition-all font-medium whitespace-nowrap"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8DCC8] hover:border-[#D4A574] cursor-pointer group"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="aspect-square bg-gradient-to-br from-[#FFF8F0] to-[#F5EFE7] flex items-center justify-center text-8xl group-hover:scale-110 transition-transform">
                {product.image}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#2C3E1F] mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 text-[#5C6B4A] mb-3">
                  <MapPin size={16} />
                  <span className="text-sm">{product.farmer} · {product.location}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-3xl font-bold text-[#6B8E23]">₹{product.price}</span>
                    <span className="text-[#5C6B4A]">/{product.unit}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-[#5C6B4A] mb-4 bg-[#F5EFE7] rounded-lg p-3">
                  <Calendar size={16} className="flex-shrink-0" />
                  <span>Delivery: {product.delivery}</span>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="w-full py-3 bg-[#6B8E23] text-white rounded-full hover:bg-[#556B2F] transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  Add to Weekly Delivery
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Product Detail Modal
  const ProductDetail = ({ product, onClose }) => (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="grid md:grid-cols-2 gap-8 p-8">
          <div className="aspect-square bg-gradient-to-br from-[#FFF8F0] to-[#F5EFE7] rounded-2xl flex items-center justify-center text-9xl">
            {product.image}
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-[#2C3E1F] mb-4">{product.name}</h2>
              <div className="flex items-center gap-2 text-[#5C6B4A] mb-2">
                <MapPin size={18} />
                <span>{product.farmer}</span>
              </div>
              <div className="text-[#5C6B4A]">{product.location}</div>
            </div>

            <div className="border-t border-[#E8DCC8] pt-6">
              <div className="text-4xl font-bold text-[#6B8E23] mb-2">₹{product.price} <span className="text-xl text-[#5C6B4A]">per {product.unit}</span></div>
            </div>

            <div className="bg-[#F5EFE7] rounded-xl p-4">
              <div className="flex items-center gap-2 text-[#2C3E1F] font-semibold mb-2">
                <Calendar size={20} />
                <span>Delivery Schedule</span>
              </div>
              <p className="text-[#5C6B4A]">This item will be freshly prepared and delivered on {product.delivery}</p>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => {
                  addToCart(product);
                  onClose();
                }}
                className="w-full py-4 bg-[#6B8E23] text-white rounded-full hover:bg-[#556B2F] transition-colors font-semibold text-lg"
              >
                Add to Weekly Delivery
              </button>
              <button 
                onClick={onClose}
                className="w-full py-4 border-2 border-[#E8DCC8] text-[#2C3E1F] rounded-full hover:bg-[#F5EFE7] transition-colors font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // How It Works
  const HowItWorks = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FEFAF5] to-[#F5EFE7] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl font-bold text-[#2C3E1F] mb-6 text-center">How It Works</h1>
        <p className="text-xl text-[#5C6B4A] mb-16 text-center max-w-3xl mx-auto">
          A simple, predictable system that respects farmers' time and delivers fresh produce to your doorstep
        </p>

        <div className="space-y-12">
          {[
            {
              step: "1",
              title: "Order Anytime During the Week",
              description: "Browse our marketplace and add items to your weekly delivery basket. Order window stays open until Friday 9 PM.",
              icon: <Package size={32} />
            },
            {
              step: "2",
              title: "Farmers Prepare After Window Closes",
              description: "Once orders close on Friday evening, farmers harvest and prepare your items fresh. This ensures minimal waste and maximum freshness.",
              icon: <Leaf size={32} />
            },
            {
              step: "3",
              title: "Delivery on Fixed Day",
              description: "All items are delivered together on Saturday. One predictable delivery day reduces emissions, costs, and complexity.",
              icon: <Calendar size={32} />
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-white/60 backdrop-blur-sm rounded-3xl p-10 border border-[#E8DCC8] hover:border-[#D4A574] transition-all"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#6B8E23] to-[#556B2F] flex items-center justify-center text-white flex-shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <div className="text-[#D4A574] font-bold text-lg mb-2">Step {item.step}</div>
                  <h3 className="text-3xl font-bold text-[#2C3E1F] mb-4">{item.title}</h3>
                  <p className="text-lg text-[#5C6B4A] leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#6B8E23] to-[#556B2F] rounded-3xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Why Weekly Delivery?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Weekly deliveries reduce carbon emissions by 60%, eliminate daily delivery stress for farmers, 
            minimize food waste, and create a sustainable rhythm that works for everyone.
          </p>
          <button 
            onClick={() => setCurrentView('marketplace')}
            className="px-8 py-4 bg-white text-[#6B8E23] rounded-full hover:bg-[#FFF8F0] transition-colors font-semibold text-lg"
          >
            Start Shopping
          </button>
        </div>
      </div>
    </div>
  );

  // About / Trust Page
  const About = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FEFAF5] to-[#F5EFE7] pt-32 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl font-bold text-[#2C3E1F] mb-6 text-center">Built on Trust & Dignity</h1>
        <p className="text-xl text-[#5C6B4A] mb-16 text-center max-w-3xl mx-auto">
          We believe farming families deserve respect, predictability, and fair compensation
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: "Farmer Respect",
              description: "No public earnings displays. No comparison dashboards. No exploitation narratives. Farmers are partners, not vendors.",
              icon: <Heart size={28} />
            },
            {
              title: "Predictable Income",
              description: "Weekly order summaries give farmers time to plan harvest and pricing. No daily delivery chaos.",
              icon: <TrendingUp size={28} />
            },
            {
              title: "Reduced Waste",
              description: "Farmers harvest only what's ordered. Customers receive only what they need. Everyone wins.",
              icon: <Leaf size={28} />
            },
            {
              title: "No Middleman Exploitation",
              description: "Direct connection between farmers and customers. Fair prices for both sides. Transparent process.",
              icon: <Shield size={28} />
            }
          ].map((item, i) => (
            <div 
              key={i}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#E8DCC8] hover:border-[#D4A574] transition-colors"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6B8E23] to-[#556B2F] flex items-center justify-center mb-6 text-white">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#2C3E1F] mb-3">{item.title}</h3>
              <p className="text-[#5C6B4A] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-12 border border-[#E8DCC8]">
          <h2 className="text-3xl font-bold text-[#2C3E1F] mb-6 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#6B8E23] mb-2">1,200+</div>
              <div className="text-[#5C6B4A]">Farming Families</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#6B8E23] mb-2">60%</div>
              <div className="text-[#5C6B4A]">Less Carbon Emissions</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#6B8E23] mb-2">₹180+</div>
              <div className="text-[#5C6B4A]">Crores Paid to Farmers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Seller Onboarding
  const SellerOnboarding = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#2C3E1F] via-[#3D5029] to-[#556B2F] pt-32 pb-20 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6">
            🌾 For Farmers Only
          </div>
          <h1 className="text-6xl font-bold mb-6">Start Selling With Dignity</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Predictable weekly orders. Fair prices you control. No daily delivery stress. No public comparisons.
          </p>
        </div>

        {/* Why Sell With Us */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Why Sell With Us?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Weekly Predictability",
                description: "Get your full order summary once a week. Plan your harvest with confidence.",
                icon: <Calendar size={32} />
              },
              {
                title: "No Daily Stress",
                description: "One collection day per week. No daily delivery pressure. Work at your own pace.",
                icon: <Clock size={32} />
              },
              {
                title: "Private Earnings",
                description: "Your income stays private. No public dashboards or comparisons with other farmers.",
                icon: <Shield size={32} />
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="opacity-90">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How Selling Works */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">How Selling Works</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-10 border border-white/20">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "List Your Products",
                  description: "Add what you grow with your own pricing. Update anytime."
                },
                {
                  step: "2",
                  title: "Receive Weekly Summary",
                  description: "Every Friday evening, see exactly what's been ordered for the week."
                },
                {
                  step: "3",
                  title: "Prepare & Collect",
                  description: "Harvest fresh on Saturday morning. Our logistics team collects from your location."
                },
                {
                  step: "4",
                  title: "Get Paid",
                  description: "Receive payment within 3-5 business days. Transparent pricing, no hidden fees."
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-full bg-[#D4A574] flex items-center justify-center font-bold text-2xl text-[#2C3E1F] flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="opacity-90">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Plans & Pricing */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">Choose Your Plan</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white text-[#2C3E1F] rounded-3xl p-10 border-4 border-white/20">
              <h3 className="text-3xl font-bold mb-2">Free Plan</h3>
              <p className="text-[#5C6B4A] mb-6">Perfect for getting started</p>
              <div className="text-5xl font-bold mb-8">₹0<span className="text-2xl font-normal">/month</span></div>
              <ul className="space-y-4 mb-8">
                {[
                  "5% service fee per order",
                  "Basic dashboard access",
                  "Weekly order summaries",
                  "Standard payout timing",
                  "Email support"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="text-[#6B8E23] flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-[#6B8E23] text-white rounded-full hover:bg-[#556B2F] transition-colors font-semibold">
                Start Free
              </button>
            </div>

            <div className="bg-gradient-to-br from-[#D4A574] to-[#C08D5C] text-white rounded-3xl p-10 border-4 border-[#E8DCC8] relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-white text-[#D4A574] px-4 py-1 rounded-full text-sm font-bold">
                RECOMMENDED
              </div>
              <h3 className="text-3xl font-bold mb-2">Pro Farmer Plan</h3>
              <p className="opacity-90 mb-6">For serious farmers</p>
              <div className="text-5xl font-bold mb-2">₹299<span className="text-2xl font-normal">/month</span></div>
              <div className="text-sm opacity-90 mb-8">or ₹2,999/year (save ₹590)</div>
              <ul className="space-y-4 mb-8">
                {[
                  "Only 2% service fee per order",
                  "Priority listing in marketplace",
                  "Advanced analytics dashboard",
                  "Express payout (1-2 days)",
                  "Priority phone support",
                  "Featured farmer badge"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="flex-shrink-0" size={20} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 bg-white text-[#D4A574] rounded-full hover:bg-opacity-90 transition-colors font-semibold">
                Choose Pro
              </button>
            </div>
          </div>
        </div>

        {/* Apply Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Apply to become a seller. We'll verify your details and get you started within 48 hours.
          </p>
          <button className="px-12 py-4 bg-white text-[#2C3E1F] rounded-full hover:bg-opacity-90 transition-colors font-semibold text-lg">
            Apply to Sell
          </button>
        </div>
      </div>
    </div>
  );

  // Farmer Dashboard (Private)
  const FarmerDashboard = () => (
    <div className="min-h-screen bg-gradient-to-br from-[#FFF8F0] via-[#FEFAF5] to-[#F5EFE7] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-[#2C3E1F] mb-2">Your Dashboard</h1>
          <p className="text-xl text-[#5C6B4A]">Welcome back, Rajesh Kumar</p>
        </div>

        {/* This Week's Orders */}
        <div className="bg-gradient-to-r from-[#6B8E23] to-[#556B2F] rounded-3xl p-8 text-white mb-8">
          <h2 className="text-3xl font-bold mb-4">This Week's Orders</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-5xl font-bold mb-2">24</div>
              <div className="opacity-90">Total Orders</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">186kg</div>
              <div className="opacity-90">Total Quantity</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">₹8,370</div>
              <div className="opacity-90">Expected Earnings</div>
            </div>
          </div>
          <div className="mt-6 bg-white/20 backdrop-blur-sm rounded-xl p-4">
            <div className="flex items-center justify-between">
              <span>Collection Day</span>
              <span className="font-bold">Saturday, Feb 3 at 8:00 AM</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Performance */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#E8DCC8]">
            <h3 className="text-2xl font-bold text-[#2C3E1F] mb-6">Product Performance</h3>
            <div className="space-y-4">
              {[
                { name: "Organic Tomatoes", orders: 8, revenue: "₹3,240" },
                { name: "Fresh Spinach", orders: 6, revenue: "₹1,980" },
                { name: "Red Onions", orders: 10, revenue: "₹3,150" }
              ].map((product, i) => (
                <div key={i} className="flex items-center justify-between py-3 border-b border-[#E8DCC8] last:border-0">
                  <div>
                    <div className="font-semibold text-[#2C3E1F]">{product.name}</div>
                    <div className="text-sm text-[#5C6B4A]">{product.orders} orders</div>
                  </div>
                  <div className="text-xl font-bold text-[#6B8E23]">{product.revenue}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <button className="w-full bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DCC8] hover:border-[#6B8E23] transition-colors text-left">
              <h3 className="text-xl font-bold text-[#2C3E1F] mb-2">Manage Products</h3>
              <p className="text-[#5C6B4A]">Add, edit, or remove items from your catalog</p>
            </button>
            <button className="w-full bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DCC8] hover:border-[#6B8E23] transition-colors text-left">
              <h3 className="text-xl font-bold text-[#2C3E1F] mb-2">View Earnings History</h3>
              <p className="text-[#5C6B4A]">Check past payouts and pending amounts</p>
            </div>
            <button className="w-full bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-[#E8DCC8] hover:border-[#6B8E23] transition-colors text-left">
              <h3 className="text-xl font-bold text-[#2C3E1F] mb-2">Contact Support</h3>
              <p className="text-[#5C6B4A]">Get help with orders or platform questions</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');
        
        * {
          font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
        }
        
        body {
          margin: 0;
          padding: 0;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
      
      <Navigation />
      
      {currentView === 'home' && <Homepage />}
      {currentView === 'marketplace' && <Marketplace />}
      {currentView === 'how-it-works' && <HowItWorks />}
      {currentView === 'about' && <About />}
      {currentView === 'seller-onboarding' && <SellerOnboarding />}
      {currentView === 'farmer-dashboard' && <FarmerDashboard />}
      
      {selectedProduct && <ProductDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
}
