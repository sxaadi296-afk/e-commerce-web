import React, { useState } from 'react';
import { 
  ShoppingCart, Search, User, ShieldCheck, Truck, RotateCcw, 
  CreditCard, CheckCircle, Trash2, Plus, Minus, X, LogOut, Mail, Lock, Globe, Smartphone, Package, Check
} from 'lucide-react';

const PRODUCTS = [
  { 
    id: 1, 
    name: "iPhone 18 Pro Max", 
    category: "iPhones", 
    basePrice: 489999, 
    nonPtaPrice: 359999,
    rating: 5.0, 
    image: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=85", 
    desc: "A20 Pro 2nm chip, Under-display Face ID, 48MP Triple Pro Camera.",
    specs: { display: "6.9\" Super Retina XDR", processor: "Apple A20 Pro", camera: "48MP Triple Setup", battery: "4800 mAh" },
    colors: ["Desert Titanium", "Space Black", "Natural Titanium", "Silver"]
  },
  { 
    id: 2, 
    name: "iPhone 18 Pro", 
    category: "iPhones", 
    basePrice: 429999, 
    nonPtaPrice: 319999,
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1695048065488-4336bf7b274c?auto=format&fit=crop&w=1000&q=85", 
    desc: "Grade-5 Titanium, ProMotion XDR display, Apple Intelligence Pro.",
    specs: { display: "6.3\" Super Retina XDR", processor: "Apple A20 Pro", camera: "48MP Triple Setup", battery: "4100 mAh" },
    colors: ["Space Black", "Titanium Gray", "White Titanium"]
  },
  { 
    id: 3, 
    name: "iPhone 17 Pro Max", 
    category: "iPhones", 
    basePrice: 409999, 
    nonPtaPrice: 299999,
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=85", 
    desc: "A19 Pro chip, 48MP Telephoto zoom, 24MP TrueDepth selfie camera.",
    specs: { display: "6.9\" LTPO OLED", processor: "Apple A19 Pro", camera: "48MP + 48MP Telephoto", battery: "4670 mAh" },
    colors: ["Cosmic Orange", "Natural Titanium", "Jet Black"]
  },
  { 
    id: 4, 
    name: "iPhone 17 Pro", 
    category: "iPhones", 
    basePrice: 379999, 
    nonPtaPrice: 279999,
    rating: 4.8, 
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=85", 
    desc: "Compact powerhouse with A19 Pro and advanced vapor chamber cooling.",
    specs: { display: "6.3\" LTPO OLED", processor: "Apple A19 Pro", camera: "48MP Fusion", battery: "4000 mAh" },
    colors: ["Natural Titanium", "Space Gray", "Silver"]
  },
  { 
    id: 5, 
    name: "iPhone 16 Pro Max", 
    category: "iPhones", 
    basePrice: 349999, 
    nonPtaPrice: 259999,
    rating: 4.8, 
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=85", 
    desc: "Desert Titanium, 6.9-inch display, A18 Pro, Camera Control button.",
    specs: { display: "6.9\" Super Retina XDR", processor: "Apple A18 Pro", camera: "48MP Fusion", battery: "4685 mAh" },
    colors: ["Desert Titanium", "Natural Titanium", "Black Titanium", "White Titanium"]
  },
  { 
    id: 6, 
    name: "iPhone 16 Pro", 
    category: "iPhones", 
    basePrice: 319999, 
    nonPtaPrice: 239999,
    rating: 4.7, 
    image: "https://images.unsplash.com/photo-1530319067432-f2a729c03db5?auto=format&fit=crop&w=1000&q=85", 
    desc: "Grade-5 Titanium, 6.3-inch display, A18 Pro chip, 5x Telephoto.",
    specs: { display: "6.3\" Super Retina XDR", processor: "Apple A18 Pro", camera: "48MP Fusion", battery: "3582 mAh" },
    colors: ["Desert Titanium", "Natural Titanium", "Black Titanium"]
  },
  { 
    id: 7, 
    name: "MacBook Pro 16\" M4 Max", 
    category: "MacBooks", 
    basePrice: 849999, 
    nonPtaPrice: 849999,
    rating: 5.0, 
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85", 
    desc: "Space Black, M4 Max chip, Nano-texture Liquid Retina XDR display.",
    specs: { display: "16.2\" XDR", processor: "Apple M4 Max", memory: "36GB RAM", storage: "1TB SSD" },
    colors: ["Space Black", "Silver"]
  },
  { 
    id: 8, 
    name: "iPad Pro 13\" M4", 
    category: "iPads", 
    basePrice: 389999, 
    nonPtaPrice: 389999,
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=85", 
    desc: "Ultra Retina XDR display, Tandem OLED, M4 processor, extremely thin.",
    specs: { display: "13\" Tandem OLED", processor: "Apple M4", camera: "12MP Wide", battery: "10h use" },
    colors: ["Silver", "Space Black"]
  },
  { 
    id: 9, 
    name: "AirPods Pro (3rd Gen)", 
    category: "AirPods", 
    basePrice: 79999, 
    nonPtaPrice: 79999,
    rating: 4.9, 
    image: "https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=85", 
    desc: "H3 chip, 2x stronger Active Noise Cancellation, Heart rate sensor.",
    specs: { type: "True Wireless", anc: "Advanced ANC", battery: "8h listening" },
    colors: ["Gloss White"]
  },
  { 
    id: 10, 
    name: "Apple AirPods Max 2", 
    category: "Headphones", 
    basePrice: 179999, 
    nonPtaPrice: 179999,
    rating: 4.8, 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85", 
    desc: "Spatial Audio, USB-C charging, Custom acoustic design, Adaptive EQ.",
    specs: { type: "Over-Ear", anc: "Transparency & ANC", battery: "20h playback" },
    colors: ["Midnight", "Starlight", "Orange", "Blue"]
  }
];

const COUNTRY_CITIES = {
  "Pakistan": ["Islamabad", "Lahore", "Karachi", "Rawalpindi", "Faisalabad", "Multan", "Peshawar", "Abbottabad", "Quetta"],
  "United Arab Emirates": ["Dubai", "Abu Dhabi", "Sharjah", "Ajman"],
  "United Kingdom": ["London", "Manchester", "Birmingham", "Edinburgh"],
  "United States": ["New York", "Los Angeles", "Chicago", "Houston"],
  "Saudi Arabia": ["Riyadh", "Jeddah", "Mecca", "Medina"]
};

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [productOptions, setProductOptions] = useState({});

  const [user, setUser] = useState(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);

  const [authName, setAuthName] = useState("");
  const [authPhone, setAuthPhone] = useState("");
  const [authEmail, setAuthEmail] = useState("");
  const [authPassword, setAuthPassword] = useState("");

  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [shippingInfo, setShippingInfo] = useState({ 
    name: "", 
    phone: "", 
    email: "",
    country: "Pakistan", 
    city: "Islamabad", 
    postalCode: "",
    address: "",
    paymentMethod: "COD",
    cardNumber: "",
    cardExpiry: "",
    cardCvc: ""
  });

  const [orderSuccess, setOrderSuccess] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);

  const getOption = (product) => {
    const opt = productOptions[product.id];
    return {
      isPta: opt?.isPta !== undefined ? opt.isPta : true,
      color: opt?.color || product.colors[0]
    };
  };

  const handleOptionChange = (id, key, value) => {
    setProductOptions(prev => ({
      ...prev,
      [id]: {
        isPta: key === 'isPta' ? value : (prev[id]?.isPta !== undefined ? prev[id].isPta : true),
        color: key === 'color' ? value : (prev[id]?.color || PRODUCTS.find(p => p.id === id).colors[0])
      }
    }));
  };

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (product) => {
    const opts = getOption(product);
    const price = (product.category === "iPhones" && !opts.isPta) ? product.nonPtaPrice : product.basePrice;
    const cartItemId = `${product.id}-${opts.isPta ? 'PTA' : 'NonPTA'}-${opts.color}`;

    setCart(prev => {
      const existing = prev.find(item => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map(item => item.cartItemId === cartItemId ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { 
        ...product, 
        cartItemId, 
        selectedPta: product.category === "iPhones" ? opts.isPta : null, 
        selectedColor: opts.color, 
        actualPrice: price,
        qty: 1 
      }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (cartItemId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.cartItemId === cartItemId) {
        const newQty = item.qty + delta;
        return newQty > 0 ? { ...item, qty: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const cartSubtotal = cart.reduce((sum, item) => sum + (item.actualPrice * item.qty), 0);
  const isPakistan = shippingInfo.country === "Pakistan";
  const shippingFee = isPakistan ? 0 : 25000;
  const finalTotal = cartSubtotal + shippingFee;

  const handleAuth = (e) => {
    e.preventDefault();
    if (isLoginMode) {
      if (!authEmail || !authPassword) {
        alert("Please enter your email and password!");
        return;
      }
      setUser({ email: authEmail, name: "Valued Customer", phone: "0300-1234567" });
      setShippingInfo(prev => ({ ...prev, email: authEmail }));
    } else {
      if (!authName || !authPhone || !authEmail || !authPassword) {
        alert("Please fill all fields for registration!");
        return;
      }
      setUser({ email: authEmail, name: authName, phone: authPhone });
      setShippingInfo(prev => ({ ...prev, name: authName, phone: authPhone, email: authEmail }));
    }
    setIsAuthOpen(false);
    alert(isLoginMode ? "Logged in successfully!" : "Account created successfully!");
  };

  const handleProceedToCheckout = () => {
    if (!user) {
      setIsAuthOpen(true);
      return;
    }
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!shippingInfo.name || !shippingInfo.phone || !shippingInfo.email || !shippingInfo.address) {
      alert("Please fill complete delivery details!");
      return;
    }

    if (shippingInfo.paymentMethod === "Card") {
      if (!shippingInfo.cardNumber || !shippingInfo.cardExpiry || !shippingInfo.cardCvc) {
        alert("Please enter valid card details to complete payment!");
        return;
      }
    }

    const generatedId = "ORD-" + Math.floor(100000 + Math.random() * 900000);
    const orderData = {
      id: generatedId,
      name: shippingInfo.name,
      phone: shippingInfo.phone,
      email: shippingInfo.email,
      address: `${shippingInfo.address}, ${shippingInfo.city}, ${shippingInfo.country}`,
      items: [...cart],
      total: finalTotal,
      paymentMethod: shippingInfo.paymentMethod,
      date: new Date().toLocaleDateString()
    };

    setLastOrder(orderData);
    setIsCheckoutOpen(false);
    setOrderSuccess(true);
    setCart([]);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Top Announcement Bar */}
      <div className="bg-slate-950 text-white text-xs py-2.5 px-4 text-center font-medium tracking-wide border-b border-slate-800">
        🇵🇰 Pakistan Free Delivery • 🌍 Worldwide DHL Shipping • Secure Card Processing • Instant Email Receipts
      </div>

      {/* Professional Sticky Navbar */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}>
            <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">🍎 iMEGA<span className="text-blue-600">STORE</span></span>
          </div>

          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search iPhone 18, 17, 16, iPad, Mac..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-100 rounded-full text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            {user ? (
              <div className="flex items-center space-x-2 bg-slate-100 px-3 py-1.5 rounded-full text-xs font-bold border border-slate-200">
                <Smartphone className="h-3.5 w-3.5 text-blue-600" />
                <span className="truncate max-w-[110px]">{user.email}</span>
                <button onClick={() => setUser(null)} title="Logout" className="text-rose-500 hover:text-rose-700 ml-1">
                  <LogOut className="h-3.5 w-3.5" />
                </button>
              </div>
            ) : (
              <button 
                onClick={() => { setIsLoginMode(true); setIsAuthOpen(true); }}
                className="flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-slate-900 rounded-full hover:bg-blue-600 transition shadow"
              >
                <Smartphone className="h-3.5 w-3.5" />
                <span>Login / Signup</span>
              </button>
            )}

            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 bg-slate-100 hover:bg-slate-200 rounded-full transition"
            >
              <ShoppingCart className="h-5 w-5 text-slate-900" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cart.reduce((sum, item) => sum + item.qty, 0)}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="bg-blue-600/30 text-blue-400 border border-blue-500/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase">Official Apple Flagships</span>
            <span className="bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase">Instant Email Dispatch</span>
          </div>
          <h1 className="text-3xl sm:text-6xl font-black tracking-tight">The Ultimate Apple Flagship Store</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">Explore iPhone 16 through 18 models, MacBooks, iPads, and AirPods with secure checkout and professional email receipts.</p>
          <div className="pt-2 flex justify-center gap-3">
            <button 
              onClick={() => setSelectedCategory("iPhones")}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-full transition shadow-lg"
            >
              Browse iPhones
            </button>
            <button 
              onClick={() => setSelectedCategory("All")}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-full transition border border-white/10"
            >
              View All ({PRODUCTS.length})
            </button>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {["All", "iPhones", "MacBooks", "iPads", "AirPods", "Headphones"].map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition shadow-xs ${selectedCategory === cat ? 'bg-slate-900 text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => {
            const currentOpts = getOption(product);
            const activePrice = (product.category === "iPhones" && !currentOpts.isPta) ? product.nonPtaPrice : product.basePrice;

            return (
              <div key={product.id} className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition flex flex-col justify-between">
                <div>
                  <div className="h-64 bg-slate-100 overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=85";
                      }}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500" 
                    />
                    <span className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-white text-[11px] px-3 py-1 rounded-full font-semibold">
                      {product.category}
                    </span>
                    <span className="absolute top-3 right-3 bg-blue-600 text-white text-[11px] px-2.5 py-0.5 rounded-full font-bold">
                      ★ {product.rating}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{product.name}</h3>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">{product.desc}</p>
                    </div>

                    {product.category === "iPhones" && (
                      <div className="bg-slate-100 p-1 rounded-2xl flex items-center justify-between border border-slate-200">
                        <button
                          onClick={() => handleOptionChange(product.id, 'isPta', true)}
                          className={`flex-1 py-1.5 text-[11px] font-bold rounded-xl transition ${currentOpts.isPta ? 'bg-slate-900 text-white shadow' : 'text-slate-600 hover:text-slate-900'}`}
                        >
                          PTA Approved
                        </button>
                        <button
                          onClick={() => handleOptionChange(product.id, 'isPta', false)}
                          className={`flex-1 py-1.5 text-[11px] font-bold rounded-xl transition ${!currentOpts.isPta ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'}`}
                        >
                          Non-PTA
                        </button>
                      </div>
                    )}

                    <div>
                      <span className="block text-[11px] font-bold text-slate-400 uppercase mb-1.5">Color: <span className="text-slate-900 font-bold">{currentOpts.color}</span></span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.colors.map(col => (
                          <button
                            key={col}
                            onClick={() => handleOptionChange(product.id, 'color', col)}
                            className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold border transition ${currentOpts.color === col ? 'border-blue-600 bg-blue-50 text-blue-700 shadow-xs' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}
                          >
                            {col}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-[11px] space-y-1 text-slate-600">
                      <span className="font-bold text-slate-900 block mb-0.5">Key Specs:</span>
                      {Object.entries(product.specs).map(([key, val]) => (
                        <div key={key} className="flex justify-between">
                          <span className="capitalize font-semibold text-slate-400">{key}:</span>
                          <span className="font-bold text-slate-800">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-100 mt-2 pt-4">
                  <div>
                    <span className="block text-[10px] text-slate-400 uppercase font-bold">Price</span>
                    <span className="text-xl font-black text-slate-900">Rs. {activePrice.toLocaleString()}</span>
                  </div>
                  <button 
                    onClick={() => addToCart(product)}
                    className="px-4 py-2.5 bg-slate-900 hover:bg-blue-600 text-white text-xs font-bold rounded-xl transition shadow"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/50 backdrop-blur-xs flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col">
            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
              <h2 className="text-lg font-bold flex items-center space-x-2">
                <ShoppingCart className="h-5 w-5 text-blue-600" />
                <span>Your Shopping Cart</span>
              </h2>
              <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-slate-100 rounded-full">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-20 text-slate-400 text-sm">Your cart is empty.</div>
              ) : (
                cart.map(item => (
                  <div key={item.cartItemId} className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=85";
                      }}
                      className="w-14 h-14 object-cover rounded-xl border border-slate-200" 
                    />
                    <div className="flex-1 ml-3 space-y-1">
                      <h4 className="font-bold text-xs text-slate-900">{item.name}</h4>
                      <div className="text-[10px] text-slate-500 flex flex-wrap gap-x-1.5">
                        <span>Color: <strong>{item.selectedColor}</strong></span>
                        {item.selectedPta !== null && (
                          <strong className={item.selectedPta ? "text-emerald-600" : "text-blue-600"}>{item.selectedPta ? "• PTA" : "• Non-PTA"}</strong>
                        )}
                      </div>
                      <p className="text-blue-600 font-bold text-xs">Rs. {item.actualPrice.toLocaleString()}</p>
                      
                      <div className="flex items-center space-x-2 pt-1">
                        <button onClick={() => updateQty(item.cartItemId, -1)} className="p-1 bg-white border rounded hover:bg-slate-100"><Minus className="h-3 w-3" /></button>
                        <span className="text-xs font-bold px-1.5">{item.qty}</span>
                        <button onClick={() => updateQty(item.cartItemId, 1)} className="p-1 bg-white border rounded hover:bg-slate-100"><Plus className="h-3 w-3" /></button>
                      </div>
                    </div>
                    <button onClick={() => updateQty(item.cartItemId, -item.qty)} className="text-rose-500 hover:text-rose-700 p-2"><Trash2 className="h-4 w-4" /></button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-200 bg-slate-50 space-y-3">
                <div className="flex items-center justify-between text-base font-bold">
                  <span>Subtotal:</span>
                  <span className="text-blue-600">Rs. {cartSubtotal.toLocaleString()}</span>
                </div>
                <button 
                  onClick={handleProceedToCheckout}
                  className="w-full py-3.5 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-xl transition shadow text-xs uppercase tracking-wider"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-6 sm:p-8 relative my-8 border border-slate-100">
            <button onClick={() => setIsCheckoutOpen(false)} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full">
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-xl sm:text-2xl font-bold mb-1 flex items-center space-x-2">
              <Truck className="h-6 w-6 text-blue-600" />
              <span>Secure Checkout</span>
            </h2>
            <p className="text-xs text-slate-500 mb-6">Enter your delivery details & payment info.</p>
            
            <form onSubmit={handleCheckoutSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Muhammad Saad"
                    value={shippingInfo.name}
                    onChange={e => setShippingInfo({...shippingInfo, name: e.target.value})}
                    className="w-full p-3 bg-slate-100 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="0300-1234567"
                    value={shippingInfo.phone}
                    onChange={e => setShippingInfo({...shippingInfo, phone: e.target.value})}
                    className="w-full p-3 bg-slate-100 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Email Address (For Receipt)</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com"
                  value={shippingInfo.email}
                  onChange={e => setShippingInfo({...shippingInfo, email: e.target.value})}
                  className="w-full p-3 bg-slate-100 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Country</label>
                  <select
                    value={shippingInfo.country}
                    onChange={e => {
                      const newCountry = e.target.value;
                      const defaultCity = COUNTRY_CITIES[newCountry][0];
                      setShippingInfo(prev => ({
                        ...prev, 
                        country: newCountry,
                        city: defaultCity,
                        paymentMethod: newCountry === "Pakistan" ? "COD" : "Card"
                      }));
                    }}
                    className="w-full p-3 bg-slate-100 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    {Object.keys(COUNTRY_CITIES).map(cntry => (
                      <option key={cntry} value={cntry}>
                        {cntry === "Pakistan" ? "Pakistan (Free Delivery)" : `${cntry} (DHL Express)`}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">City</label>
                  <select
                    value={shippingInfo.city}
                    onChange={e => setShippingInfo({...shippingInfo, city: e.target.value})}
                    className="w-full p-3 bg-slate-100 rounded-xl text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    {(COUNTRY_CITIES[shippingInfo.country] || []).map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Delivery Address</label>
                <textarea 
                  required
                  rows="2"
                  placeholder="House #, Street, Area"
                  value={shippingInfo.address}
                  onChange={e => setShippingInfo({...shippingInfo, address: e.target.value})}
                  className="w-full p-3 bg-slate-100 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1.5">Payment Method</label>
                <div className="grid grid-cols-2 gap-2">
                  {isPakistan ? (
                    <>
                      <button
                        type="button"
                        onClick={() => setShippingInfo({...shippingInfo, paymentMethod: "COD"})}
                        className={`p-3 rounded-xl border text-[11px] font-bold transition flex items-center justify-center space-x-1 ${shippingInfo.paymentMethod === "COD" ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600'}`}
                      >
                        <span>Cash on Delivery</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setShippingInfo({...shippingInfo, paymentMethod: "Card"})}
                        className={`p-3 rounded-xl border text-[11px] font-bold transition flex items-center justify-center space-x-1 ${shippingInfo.paymentMethod === "Card" ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 text-slate-600'}`}
                      >
                        <CreditCard className="h-3.5 w-3.5" />
                        <span>Credit Card</span>
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="col-span-2 p-3 rounded-xl border border-blue-600 bg-blue-50 text-blue-700 text-[11px] font-bold flex items-center justify-center space-x-1.5"
                    >
                      <Globe className="h-3.5 w-3.5" />
                      <span>International Orders Require Credit / Debit Card Payment</span>
                    </button>
                  )}
                </div>
              </div>

              {shippingInfo.paymentMethod === "Card" && (
                <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-2.5">
                  <div className="flex items-center space-x-1 text-[11px] font-bold text-slate-700">
                    <CreditCard className="h-3.5 w-3.5 text-blue-600" />
                    <span>Enter Card Details (Any Dummy Number Allowed)</span>
                  </div>
                  <div>
                    <input 
                      type="text" 
                      required
                      placeholder="Card Number (e.g. 4532 0000 0000 8921)"
                      value={shippingInfo.cardNumber}
                      onChange={e => setShippingInfo({...shippingInfo, cardNumber: e.target.value})}
                      className="w-full p-2.5 bg-white rounded-lg text-xs border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input 
                      type="text" 
                      required
                      placeholder="MM/YY"
                      value={shippingInfo.cardExpiry}
                      onChange={e => setShippingInfo({...shippingInfo, cardExpiry: e.target.value})}
                      className="w-full p-2.5 bg-white rounded-lg text-xs border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <input 
                      type="password" 
                      required
                      maxLength="4"
                      placeholder="CVC"
                      value={shippingInfo.cardCvc}
                      onChange={e => setShippingInfo({...shippingInfo, cardCvc: e.target.value})}
                      className="w-full p-2.5 bg-white rounded-lg text-xs border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>
              )}

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 space-y-1 text-xs font-semibold">
                <div className="flex justify-between text-slate-500">
                  <span>Subtotal:</span>
                  <span>Rs. {cartSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-slate-500">
                  <span>Shipping:</span>
                  <span className={isPakistan ? "text-emerald-600 font-bold" : ""}>
                    {isPakistan ? "FREE" : `Rs. ${shippingFee.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-black text-slate-900 pt-1 border-t border-slate-200">
                  <span>Total Payable:</span>
                  <span className="text-blue-600">Rs. {finalTotal.toLocaleString()}</span>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-blue-600 hover:bg-slate-900 text-white font-bold rounded-xl transition shadow text-xs uppercase tracking-wider"
              >
                Pay Rs. {finalTotal.toLocaleString()} & Confirm Order
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Order Success Confirmation Page & Email Simulation */}
      {orderSuccess && lastOrder && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white max-w-lg w-full rounded-3xl shadow-2xl p-6 sm:p-8 text-center space-y-5 relative my-8 border border-slate-100">
            <CheckCircle className="h-14 w-14 text-emerald-500 mx-auto animate-bounce" />
            
            <div>
              <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-3 py-1 rounded-full">Order Successfully Confirmed</span>
              <h2 className="text-2xl font-black mt-2 text-slate-900">Thank You, {lastOrder.name}!</h2>
              <p className="text-slate-500 text-xs mt-1">Order ID: <strong className="text-slate-900">{lastOrder.id}</strong></p>
            </div>

            <div className="bg-blue-50 border border-blue-100 p-3.5 rounded-2xl text-left space-y-1.5">
              <div className="flex items-center space-x-1.5 text-blue-900 font-bold text-[11px] uppercase">
                <Package className="h-3.5 w-3.5" />
                <span>Automated Email Receipt Sent</span>
              </div>
              <p className="text-[11px] text-blue-800 leading-relaxed">
                Your order receipt and shipment tracking details have been successfully dispatched to your email: <strong className="underline">{lastOrder.email}</strong>.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-left space-y-3">
              <div className="flex items-center justify-between border-b pb-2">
                <span className="text-[11px] font-bold text-slate-700 uppercase flex items-center space-x-1">
                  <Mail className="h-3.5 w-3.5 text-blue-600" />
                  <span>iMegaStore Official Invoice</span>
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">PAID</span>
              </div>
              <div className="text-xs space-y-1 text-slate-600">
                <p><strong>Customer:</strong> {lastOrder.name} ({lastOrder.phone})</p>
                <p><strong>Email:</strong> {lastOrder.email}</p>
                <p><strong>Delivery Address:</strong> {lastOrder.address}</p>
                <p><strong>Payment Mode:</strong> {lastOrder.paymentMethod === "Card" ? "Credit Card (Secure)" : "Cash on Delivery"}</p>
                <div className="pt-2 border-t mt-2">
                  <span className="font-bold text-slate-900 block mb-1">Items Ordered:</span>
                  {lastOrder.items.map((it, idx) => (
                    <div key={idx} className="flex justify-between text-[11px]">
                      <span>{it.qty}x {it.name} ({it.selectedColor})</span>
                      <span className="font-semibold">Rs. {(it.actualPrice * it.qty).toLocaleString()}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between font-bold text-slate-900 text-xs pt-2 border-t mt-2">
                  <span>Total Paid:</span>
                  <span className="text-blue-600">Rs. {lastOrder.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button 
              onClick={() => setOrderSuccess(false)}
              className="w-full py-3.5 bg-slate-900 text-white font-bold rounded-xl hover:bg-blue-600 transition shadow text-xs uppercase tracking-wider"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      {/* Login / Signup Modal */}
      {isAuthOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-sm w-full rounded-3xl shadow-2xl p-6 relative border border-slate-100">
            <button onClick={() => setIsAuthOpen(false)} className="absolute top-4 right-4 p-2 hover:bg-slate-100 rounded-full">
              <X className="h-5 w-5" />
            </button>
            <h2 className="text-xl font-bold mb-1 text-center text-slate-900">{isLoginMode ? "Store Login" : "Create Account"}</h2>
            <p className="text-xs text-center text-slate-500 mb-6">
              {isLoginMode ? "Enter your email & password to login." : "Enter details to register your account."}
            </p>
            
            <form onSubmit={handleAuth} className="space-y-3.5">
              {!isLoginMode && (
                <>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Muhammad Saad"
                      value={authName}
                      onChange={e => setAuthName(e.target.value)}
                      className="w-full p-3 bg-slate-100 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="0300-1234567"
                      value={authPhone}
                      onChange={e => setAuthPhone(e.target.value)}
                      className="w-full p-3 bg-slate-100 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Email Address</label>
                <input 
                  type="email" 
                  required
                  placeholder="name@example.com"
                  value={authEmail}
                  onChange={e => setAuthEmail(e.target.value)}
                  className="w-full p-3 bg-slate-100 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase mb-1">Password</label>
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  value={authPassword}
                  onChange={e => setAuthPassword(e.target.value)}
                  className="w-full p-3 bg-slate-100 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-blue-600 text-white font-bold rounded-xl transition shadow text-xs uppercase tracking-wider"
              >
                {isLoginMode ? "Login Now" : "Sign Up Now"}
              </button>
            </form>

            <div className="mt-4 text-center">
              <button 
                onClick={() => setIsLoginMode(!isLoginMode)}
                className="text-xs text-blue-600 hover:underline font-semibold"
              >
                {isLoginMode ? "Don't have an account? Sign Up" : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-10 px-4 mt-20 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-slate-400 space-y-3 sm:space-y-0 font-medium">
          <p>© 2026 iMegaStore Pakistan & Global. All rights reserved.</p>
          <div className="flex space-x-6">
            <span>iPhone Flagships</span>
            <span>Secure Checkout</span>
            <span>Worldwide DHL Shipping</span>
          </div>
        </div>
      </footer>
    </div>
  );
}