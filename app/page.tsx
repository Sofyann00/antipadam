"use client"
import { Button } from "@/components/ui/button"
import { ChevronRight, Gamepad2, Gift, CreditCard, ArrowRight, Smartphone, Monitor, Globe, Users, LucideProps, CheckCircle2, Zap, Shield, Sparkles, Search, ShoppingCart, User, LogOut, Lightbulb, Calculator } from "lucide-react"
import Link from "next/link"
import { products, formatPrice } from "@/lib/data"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import { useRef, useState } from "react"
import { useUser } from "@/contexts/user-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useRouter } from "next/navigation"
import { RedeemCode } from "@/components/redeem-code"

export default function Home() {
  const { user, logout } = useUser()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [openQna, setOpenQna] = useState<number | null>(null);
  const [points, setPoints] = useState(0)

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    setShowSearchResults(query.length > 0)
  }

  const servicesRef = useRef<HTMLDivElement>(null)
  
  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const categories = [
    { name: "Token Listrik", icon: (props: LucideProps) => <Zap {...props} /> },
    { name: "Tagihan PLN", icon: (props: LucideProps) => <Calculator {...props} /> },
    { name: "Pulsa & Paket Data", icon: (props: LucideProps) => <Smartphone {...props} /> },
    { name: "Semua Operator", icon: (props: LucideProps) => <CreditCard {...props} /> },
  ]

  const marketplaceFeatures = [
    {
      name: 'Token Listrik PLN',
      description: 'Beli token listrik prabayar dengan berbagai nominal, proses instan langsung masuk meteran.',  
      icon: <Zap className="h-8 w-8 text-blue-400" />,
    },
    {
      name: 'Pembayaran Tagihan',
      description: 'Bayar tagihan listrik pascabayar PLN dengan mudah, tidak perlu antri.',
      icon: <Calculator className="h-8 w-8 text-green-400" />,
    },
    {
      name: 'Pulsa Semua Operator',
      description: 'Isi pulsa untuk semua operator: Telkomsel, XL, Indosat, THREE, Axis, Smartfren, by.U.',
      icon: <Smartphone className="h-8 w-8 text-purple-400" />,
    },
    {
      name: 'Pembayaran Aman',
      description: 'Berbelanja dengan tenang menggunakan sistem pembayaran yang aman dan terpercaya.',
      icon: <Shield className="h-8 w-8 text-blue-500" />,
    },
    {
      name: 'Layanan 24/7',
      description: 'Tim support kami siap membantu Anda kapan saja untuk masalah layanan PPOB.',
      icon: <Users className="h-8 w-8 text-indigo-400" />,
    },
    {
      name: 'Proses Instan',
      description: 'Semua transaksi diproses secara real-time dengan pengiriman yang cepat dan akurat.',
      icon: <Sparkles className="h-8 w-8 text-cyan-400" />,
    },
  ];

  const qnaList = [
    {
      question: "Layanan Apa Saja yang Tersedia di pulsahub.com?",
      answer: (
        <span>
          Kami menyediakan <b>Token Listrik PLN, Pembayaran Tagihan Listrik, dan Pulsa untuk semua operator</b> (Telkomsel, XL, Indosat, THREE, Axis, Smartfren, by.U). Semua layanan 100% resmi dan terpercaya.
        </span>
      ),
    },
    {
      question: "Bagaimana Cara Beli Token Listrik dan Pulsa?", 
      answer: (
        <span>
          Pilih layanan yang diinginkan (Token Listrik/Pulsa), masukkan nomor meteran atau nomor HP, pilih nominal, dan selesaikan pembayaran. Semua transaksi diproses secara instan!
        </span>
      ),
    },
    {
      question: "Apakah Semua Operator Pulsa Tersedia?",
      answer: (
        <span>
          Ya, kami melayani pulsa untuk semua operator besar di Indonesia: Telkomsel, XL Axiata, Indosat Ooredoo, THREE, Axis, Smartfren, dan by.U dengan berbagai nominal.
        </span>
      ),
    },
    {
      question: "Bagaimana Jika Token Listrik/Pulsa Tidak Masuk?",
      answer: (
        <span>
          Jika token listrik tidak masuk dalam 5 menit atau pulsa tidak masuk dalam 3 menit, silakan hubungi customer service kami dengan bukti transaksi. Kami akan segera membantu menyelesaikan masalah.
        </span>
      ),
    },
    {
      question: "Mengapa Harus Pilih pulsahub.com?",
      answer: (
        <span>
          Kami menyediakan layanan lengkap (listrik + pulsa), proses instan, harga kompetitif, dan customer service 24/7. Semua produk resmi dari provider terpercaya!
        </span>
      ),
    },
  ];

  return (
    <div className="flex flex-col bg-white text-gray-900">
      {/* Hero Section - Modern Split Design */}
      <section className="relative mb-12 sm:mb-16 mt-16 sm:mt-24 overflow-hidden">
        <div className="w-full mx-auto max-w-7xl px-4 sm:px-6">
          {/* Main Hero Container */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[600px]">
            
            {/* Left Content */}
            <div className="space-y-8 lg:pr-8">
              {/* Floating Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-[#1e40af]/10 to-[#059669]/10 border border-[#1e40af]/20 text-[#1e40af] text-sm font-medium backdrop-blur-sm">
                <Zap className="w-4 h-4 mr-2" />
                Platform PPOB Terpercaya #1
              </div>
              
              {/* Main Title with Gradient */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
                  <span className="bg-gradient-to-r from-[#1e40af] via-[#059669] to-[#f59e0b] bg-clip-text text-transparent">
                    Token Listrik
                  </span>
                  <br />
                  <span className="text-gray-900">& Pulsa Instan</span>
                </h1>
                
                {/* Animated Subtitle */}
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl">
                  Beli token listrik PLN, bayar tagihan, dan isi pulsa dengan 
                  <span className="font-semibold text-[#1e40af]"> proses tercepat</span> di Indonesia
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={scrollToServices}
                  className="bg-gradient-to-r from-[#1e40af] to-[#059669] hover:from-[#1e40af]/90 hover:to-[#059669]/90 text-white font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#1e40af]/25 transform hover:-translate-y-1"
                >
                  Mulai Sekarang
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                
                {/* <Button 
                  variant="outline"
                  className="border-2 border-[#1e40af]/20 text-[#1e40af] hover:bg-[#1e40af]/5 font-semibold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:border-[#1e40af]/40"
                >
                  Lihat Cara Kerja
                  <Lightbulb className="w-5 h-5 ml-2" />
                </Button> */}
              </div>
              
              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#059669]" />
                  <span className="text-sm font-medium text-gray-700">100% Aman</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#f59e0b]" />
                  <span className="text-sm font-medium text-gray-700">Proses Instan</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#1e40af]" />
                  <span className="text-sm font-medium text-gray-700">Support 24/7</span>
                </div>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative lg:ml-8">
              {/* Main Card */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#1e40af] to-[#059669] rounded-2xl flex items-center justify-center shadow-lg rotate-12 transform hover:rotate-6 transition-transform duration-300">
                  <Zap className="w-12 h-12 text-white" />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-[#f59e0b] to-[#f77a0e] rounded-2xl flex items-center justify-center shadow-lg -rotate-12 transform hover:-rotate-6 transition-transform duration-300">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                
                {/* Card Content */}
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Layanan Tersedia</h3>
                    <p className="text-gray-600">Semua kebutuhan PPOB dalam satu platform</p>
                  </div>
                  
                  {/* Service Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-[#1e40af]/10 to-[#1e40af]/5 rounded-xl p-4 border border-[#1e40af]/10">
                      <div className="w-8 h-8 bg-[#1e40af] rounded-lg flex items-center justify-center mb-2">
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Token Listrik</h4>
                      <p className="text-xs text-gray-600">PLN Prabayar</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#059669]/10 to-[#059669]/5 rounded-xl p-4 border border-[#059669]/10">
                      <div className="w-8 h-8 bg-[#059669] rounded-lg flex items-center justify-center mb-2">
                        <Calculator className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Tagihan PLN</h4>
                      <p className="text-xs text-gray-600">Pascabayar</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#f59e0b]/10 to-[#f59e0b]/5 rounded-xl p-4 border border-[#f59e0b]/10">
                      <div className="w-8 h-8 bg-[#f59e0b] rounded-lg flex items-center justify-center mb-2">
                        <Smartphone className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Pulsa</h4>
                      <p className="text-xs text-gray-600">Semua Operator</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-[#8b5cf6]/10 to-[#8b5cf6]/5 rounded-xl p-4 border border-[#8b5cf6]/10">
                      <div className="w-8 h-8 bg-[#8b5cf6] rounded-lg flex items-center justify-center mb-2">
                        <Globe className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 text-sm mb-1">Paket Data</h4>
                      <p className="text-xs text-gray-600">Internet</p>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="border-t border-gray-100 pt-4">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-[#1e40af]">100K+</div>
                        <div className="text-xs text-gray-600">Transaksi</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#059669]">99.9%</div>
                        <div className="text-xs text-gray-600">Uptime</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-[#f59e0b]">24/7</div>
                        <div className="text-xs text-gray-600">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background Decorations */}
              <div className="absolute -z-10 top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#1e40af]/20 to-[#059669]/20 rounded-full blur-3xl"></div>
              <div className="absolute -z-10 -bottom-20 -left-20 w-32 h-32 bg-gradient-to-br from-[#f59e0b]/20 to-[#f77a0e]/20 rounded-full blur-3xl"></div>
            </div>
            
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-20 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #1e40af 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #059669 2px, transparent 2px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section ref={servicesRef} className="py-12 sm:py-16 md:py-24 2xl:py-32 mt-20 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="w-full mx-auto max-w-[1920px] px-4 sm:px-6 2xl:px-8">
          <div className="text-center mb-8 sm:mb-16 2xl:mb-24">
            <span className="inline-block px-3 sm:px-4 2xl:px-6 py-1 sm:py-1.5 2xl:py-2 bg-[#1e40af]/10 text-[#1e40af] rounded-full text-xs sm:text-sm 2xl:text-lg font-medium mb-1 sm:mb-1 2xl:mb-2 border border-[#1e40af]/20">
              Layanan PPOB Lengkap
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-bold mb-3 sm:mb-4 2xl:mb-6">
              <span className="bg-gradient-to-r from-[#1e40af] to-[#059669] bg-clip-text text-transparent">Token Listrik, Tagihan PLN & Pulsa</span>
            </h2>
            <p className="text-base sm:text-lg 2xl:text-2xl text-gray-600 max-w-2xl 2xl:max-w-4xl mx-auto px-4">
              Lengkapi kebutuhan listrik dan pulsa Anda dengan layanan terpercaya dan proses yang instan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 2xl:gap-12">
            {products.map((product) => {
              const isElectricity = product.category === 'token-listrik' || product.category === 'tagihan-listrik';
              const isPulsa = product.category === 'pulsa';
              const isHighlighted = isElectricity || isPulsa; // All products are now highlighted

              return (
                <div key={product.id} className={`relative ${!isHighlighted && 'cursor-not-allowed'}`}>
                  {!isHighlighted && (
                    <div className="absolute inset-0 bg-black/50 z-10 rounded-lg flex items-center justify-center">
                      <span className="text-white font-medium text-sm sm:text-base 2xl:text-lg px-4 py-2 bg-black/50 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}
                  <Link href={isHighlighted ? `/products/${product.id}` : '#'} className={!isHighlighted ? 'pointer-events-none' : ''}>
                    <Card className={`group cursor-pointer bg-white border-gray-100 ${!isHighlighted && 'opacity-50'}`}>
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 2xl:p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <div className="flex items-center justify-between">
                            <span className="text-white font-medium text-xs sm:text-sm 2xl:text-lg">
                              {product.price > 0 ? `Mulai ${formatPrice(product.price)}` : 'Cek Tagihan'}
                            </span>
                            <Button className={`${isElectricity ? 'bg-[#1e40af] hover:bg-[#1e40af]/90' : 'bg-[#f59e0b] hover:bg-[#f59e0b]/90'} text-white text-xs sm:text-sm 2xl:text-base px-3 sm:px-4 2xl:px-6 py-1.5 sm:py-2 2xl:py-3 rounded-full transition-all duration-300`}>
                              Lihat Detail
                            </Button>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-3 sm:p-4 2xl:p-6">
                        <h3 className={`font-semibold text-base sm:text-lg 2xl:text-2xl mb-1 line-clamp-1 group-hover:text-${isElectricity ? '[#1e40af]' : '[#f59e0b]'} transition-colors duration-200`}>
                          {product.name}
                        </h3>
                        <p className="text-xs sm:text-sm 2xl:text-lg text-gray-500 line-clamp-2">
                          {product.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* QnA Section */}
      <section className="py-12 sm:py-16 md:py-24 2xl:py-32 relative">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="max-w-4xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 2xl:px-8">
          <div className="text-center mb-8 sm:mb-16 2xl:mb-24">
            <span className="inline-block px-3 sm:px-4 2xl:px-6 py-1 sm:py-1.5 2xl:py-2 bg-[#1e40af]/10 text-[#1e40af] rounded-full text-xs sm:text-sm 2xl:text-lg font-medium mb-3 sm:mb-4 2xl:mb-6 border border-[#1e40af]/20">
              Pertanyaan Umum
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-bold mb-3 sm:mb-4 2xl:mb-6">
              <span className="bg-gradient-to-r from-[#1e40af] to-[#059669] bg-clip-text text-transparent">Frequently Asked Questions</span>
            </h2>
            <p className="text-base sm:text-lg 2xl:text-2xl text-gray-600 max-w-2xl 2xl:max-w-4xl mx-auto px-4">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan PPOB kami
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 2xl:space-y-6">
            {qnaList.map((qna, idx) => (
              <div 
                key={qna.question} 
                className="group relative"
              >
                <button
                  className={`w-full flex items-center justify-between p-4 sm:p-6 2xl:p-8 text-base sm:text-lg md:text-xl 2xl:text-2xl font-semibold rounded-xl sm:rounded-2xl 2xl:rounded-3xl transition-all duration-300 ${
                    openQna === idx 
                      ? "bg-white shadow-lg border border-[#1e40af]/20" 
                      : "bg-white/50 hover:bg-white/80 border border-gray-100"
                  }`}
                  onClick={() => setOpenQna(openQna === idx ? null : idx)}
                >
                  <div className="flex items-center gap-3 sm:gap-4 2xl:gap-6">
                    <div className={`w-6 h-6 sm:w-8 sm:h-8 2xl:w-12 2xl:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                      openQna === idx 
                        ? "bg-[#1e40af] text-white" 
                        : "bg-[#1e40af]/10 text-[#1e40af]"
                    }`}>
                      <span className="text-sm sm:text-lg 2xl:text-2xl font-bold">{idx + 1}</span>
                    </div>
                    <span className="text-left font-[600] text-gray-800 group-hover:text-[#1e40af] transition-colors duration-200 text-sm sm:text-base md:text-lg 2xl:text-xl">
                      {qna.question}
                    </span>
                  </div>
                  <ChevronRight 
                    className={`ml-2 h-5 w-5 sm:h-6 sm:w-6 2xl:h-8 2xl:w-8 transition-all duration-300 ${
                      openQna === idx 
                        ? "rotate-90 text-[#1e40af]" 
                        : "text-gray-400 group-hover:text-[#1e40af]"
                    }`} 
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openQna === idx ? "max-h-[500px] 2xl:max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="p-4 sm:p-6 2xl:p-8 pt-3 sm:pt-4 2xl:pt-6 bg-white/50 rounded-b-xl sm:rounded-b-2xl 2xl:rounded-b-3xl border-x border-b border-gray-100">
                    <div className="flex items-start gap-3 sm:gap-4 2xl:gap-6">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 2xl:w-12 2xl:h-12 rounded-full bg-[#059669]/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 2xl:w-7 2xl:h-7 text-[#059669]" />
                      </div>
                      <div className="text-sm sm:text-base 2xl:text-xl text-gray-600 leading-relaxed">
                        {qna.answer}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 sm:mt-12 2xl:mt-16 text-center">
            <p className="text-sm sm:text-base 2xl:text-xl text-gray-500 mb-3 sm:mb-4 2xl:mb-6">Masih punya pertanyaan tentang layanan kami?</p>
            <a
              href="https://wa.me/6285811959392"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 sm:px-6 2xl:px-8 py-2.5 sm:py-3 2xl:py-4 bg-white text-[#1e40af] rounded-full text-sm sm:text-base 2xl:text-xl font-medium hover:bg-[#1e40af]/90 hover:text-white transition-all duration-300 shadow-lg shadow-[#1e40af]/20 hover:shadow-xl hover:shadow-[#1e40af]/30 hover:-translate-y-0.5 border border-[#1e40af]/20"
            >
              <img src="/wa_img.png" alt="WhatsApp" className="w-5 h-5 sm:w-6 sm:h-6 2xl:w-8 2xl:h-8" />
              Chat dengan Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    name: 'Instant Delivery',
    description: 'Get your electricity tokens and pulsa instantly after purchase.',
    icon: <Zap className="h-6 w-6 text-blue-400" />,
    benefits: [
      'Digital delivery within minutes',
      'Direct to your meter/phone',
      '24/7 availability'
    ]
  },
  {
    name: 'Secure Payments',
    description: 'Shop with confidence using our secure payment system.',
    icon: <Shield className="h-6 w-6 text-blue-400" />,
    benefits: [
      'Multiple payment methods',
      'SSL encryption',
      'Secure checkout process'
    ]
  },
  {
    name: 'Complete PPOB Services',
    description: 'We provide complete PPOB services for electricity and telecommunications.',
    icon: <Lightbulb className="h-6 w-6 text-blue-400" />,
    benefits: [
      'Official PLN tokens',
      'All major operators',
      'Comprehensive services'
    ]
  },
]