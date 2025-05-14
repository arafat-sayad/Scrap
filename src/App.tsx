import React, { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Truck,
  DollarSign,
  Recycle,
  Clock,
  Shield,
  Coins,
  FastForward,
  Leaf,
  ArrowUp,
  Facebook,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import "./custom.css";
import heroImage from "./assets/scarp-hero-1.webp";

// Declare module for image imports
declare module "*.png" {
  const value: string;
  export default value;
}

// @ts-ignore
import officeDismantledScrapImage from "./assets/Office-Dismantled-Scrap-V3.png";
// @ts-ignore
import cableScrapImage from "./assets/Cable-Scrap-V3.png";
// @ts-ignore
import aluminiumScrapImage from "./assets/Aluminium-Scarp-V3.png";
// @ts-ignore
import eScrapImage from "./assets/E-Scrap-V3.png";
// @ts-ignore
import buildingScrapImage from "./assets/Building-Scrap-V3.png";
// @ts-ignore
import batteryScrapImage from "./assets/battery.avif";
// @ts-ignore
import acScrapImage from "./assets/ac.jpeg";
// @ts-ignore
import oldMachineryImage from "./assets/old.webp";
// @ts-ignore
import pipeScrapImage from "./assets/pipe.jpg";
// @ts-ignore
import panelBoardsScrapImage from "./assets/panel-hurdasi.jpg";
// @ts-ignore
import portaCabinScrapImage from "./assets/pcabinabudhabi2.jpg";
// @ts-ignore
import nahazScrapImage from "./assets/Aluminum.webp";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [expandedReviews, setExpandedReviews] = useState<{ [key: number]: boolean }>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const reviews = [
    {
      name: "Rahim",
      subtitle: "ان عده",
      image: "https://placehold.co/100x100",
      text: "This is great!.Outstanding service! They helped clear out my entire warehouse of scrap materials. Very organized and professional approach. The best part was their quick payment process.",
      rating: 5
    },
    {
      name: "Mohammed",
      subtitle: "تاجر سكراب",
      image: "https://placehold.co/100x100",
      text: "Excellent service and best prices in Dammam! They handled everything professionally and efficiently. I've been dealing with them for over 2 years now and never had any issues.",
      rating: 5
    },
    {
      name: "Abdullah",
      subtitle: "صاحب مصنع",
      image: "https://placehold.co/100x100",
      text: "Very professional team. Quick response and fair prices. Would highly recommend their services to anyone looking for reliable scrap buyers. They handle large industrial quantities with ease.",
      rating: 5
    },
    {
      name: "Ahmed",
      subtitle: "مقاول",
      image: "https://placehold.co/100x100",
      text: "Great experience! They handled everything professionally and made the whole process smooth and easy. Their team is knowledgeable and provides excellent customer service.",
      rating: 5
    },
    {
      name: "Khalid",
      subtitle: "صاحب شركة",
      image: "https://placehold.co/100x100",
      text: "Best scrap buyers in the region. Highly recommended! Their team is efficient and their prices are very competitive. They also provide excellent documentation for all transactions.",
      rating: 5
    },
    {
      name: "Hassan",
      subtitle: "مالك مستودع",
      image: "https://placehold.co/100x100",
      text: "Outstanding service! They helped clear out my entire warehouse of scrap materials. Very organized and professional approach. The best part was their quick payment process.",
      rating: 5
    },
    {
      name: "Fahad",
      subtitle: "مدير مشروع",
      image: "https://placehold.co/100x100",
      text: "Excellent experience with this team. They handled our construction site scrap removal perfectly. Very reliable and professional service with competitive pricing.",
      rating: 5
    },
    {
      name: "Omar",
      subtitle: "صاحب ورشة",
      image: "https://placehold.co/100x100",
      text: "I've been in the industry for 15 years, and these guys are the best scrap buyers I've dealt with. Fair prices, professional team, and always on time.",
      rating: 5
    },
    {
      name: "Yousuf",
      subtitle: "مقاول كهرباء",
      image: "https://placehold.co/100x100",
      text: "As an electrical contractor, I regularly have copper and aluminum scrap. They always offer the best prices and their pickup service is extremely reliable.",
      rating: 5
    },
    {
      name: "Ibrahim",
      subtitle: "مدير مصنع",
      image: "https://placehold.co/100x100",
      text: "Their industrial scrap collection service is outstanding. They handle large volumes efficiently and their prices are always competitive. Great documentation too!",
      rating: 5
    }
  ];

  // Show 3 reviews at a time on desktop
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const nextReview = () => {
    setCurrentReviewIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex >= totalPages ? 0 : nextIndex;
    });
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => {
      const nextIndex = prev - 1;
      return nextIndex < 0 ? totalPages - 1 : nextIndex;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Smooth scroll for navigation links
    const handleClick = (e: Event) => {
      e.preventDefault();
      const link = e.currentTarget as HTMLAnchorElement;
      const targetId = link.getAttribute("href") || "";
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleClick);
    });

    // Animation on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", animateOnScroll);
    window.addEventListener("load", animateOnScroll);

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleClick);
      });
      window.removeEventListener("scroll", animateOnScroll);
      window.removeEventListener("load", animateOnScroll);
    };
  }, []);

  useEffect(() => {
    const autoRotate = setInterval(() => {
      if (!isPaused) {
        nextReview();
      }
    }, 5000); // Change review every 5 seconds

    return () => clearInterval(autoRotate);
  }, [isPaused]);

  const toggleReviewExpansion = (index: number) => {
    setExpandedReviews(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const whatsappMessage = `Name: ${formData.name}%0AEmail: ${formData.email}%0AMessage: ${formData.message}`;
    
    // Open WhatsApp with the formatted message
    window.open(`https://wa.me/+966501234567?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Main Header - Now Sticky */}
      <header
        className={`bg-[#3f51b5] text-white py-4 header-shadow sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
                SBD
              </h1>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="nav-link font-medium hover:text-gray-200 transition-colors"
              >
                HOME
              </a>
              <a
                href="#our-services"
                className="nav-link font-medium hover:text-gray-200 transition-colors"
              >
                OUR SERVICES
              </a>
              <a
                href="#about"
                className="nav-link font-medium hover:text-gray-200 transition-colors"
              >
                ABOUT
              </a>
              <a
                href="#location"
                className="nav-link font-medium hover:text-gray-200 transition-colors"
              >
                LOCATION
              </a>
              <a
                href="#contact"
                className="contact-button px-6 py-2 rounded font-medium text-white hover:bg-red-700 transition-all"
              >
                CONTACT US
              </a>
            </nav>
          </div>

          {/* Mobile Navigation */}
          <nav
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:hidden flex-col items-center space-y-4 pt-4`}
          >
            <a
              href="#"
              className="w-full text-center py-2 hover:bg-blue-700 transition-colors"
              onClick={toggleMenu}
            >
              HOME
            </a>
            <a
              href="#our-services"
              className="w-full text-center py-2 hover:bg-blue-700 transition-colors"
              onClick={toggleMenu}
            >
              OUR SERVICES
            </a>
            <a
              href="#about"
              className="w-full text-center py-2 hover:bg-blue-700 transition-colors"
              onClick={toggleMenu}
            >
              ABOUT
            </a>
            <a
              href="#location"
              className="w-full text-center py-2 hover:bg-blue-700 transition-colors"
              onClick={toggleMenu}
            >
              LOCATION
            </a>
            <a
              href="#contact"
              className="w-full text-center py-2 bg-red-600 hover:bg-red-700 transition-colors"
              onClick={toggleMenu}
            >
              CONTACT US
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <header className="relative bg-black text-white min-h-[90vh]">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Industrial scrap yard"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-6 py-24 md:py-48 flex items-center min-h-[90vh]">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-8">
              Best Scrap Buyers in Dammam
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-3xl">
              Get the best prices for your scrap metal, electronics, and
              industrial waste. Professional, reliable, and environmentally
              conscious service.
            </p>
            <a
              href="#contact"
              className="inline-block bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Get a Quote Today
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 relative text-center">
              About Us
              <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600"></div>
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-600 mb-8 text-justify px-0 md:px-4">
              We provide an extensive array of scrap buying services, working
              diligently to ensure our clients receive the maximum value for
              their scrap materials. Our commitment goes beyond mere
              transactions; we focus on delivering exceptional quality,
              cost-effective solutions, and trustworthy service, all while
              ensuring timely execution to meet our clients' needs.
            </p>
            <div className="text-center">
              <a
                href="#contact"
                className="inline-block bg-blue-600 text-white px-6 md:px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Scrape Buying Services Section */}
      <section id="our-services" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Scrape Buying Services
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 max-w-4xl mx-auto">
            We specialize in buying various types of scrap materials. Our
            professional team ensures fair pricing and efficient collection
            services for all your scrap needs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {/* Service Cards */}
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={acScrapImage}
                alt="Air Condition Scrap"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Air Condition Scrap
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We buy air condition scrap, including old or broken units with
                copper, aluminum, and steel.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={aluminiumScrapImage}
                alt="Aluminium Scrap"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Aluminium Scrap
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We buy aluminum scrap, including used or discarded aluminum
                materials.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={batteryScrapImage}
                alt="Battery Scrap"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Battery Scrap
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We buy battery scrap, including used or discarded batteries.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={buildingScrapImage}
                alt="Building Demolition Scrap"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Building Demolition Scrap
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We buy building demolition scrap, including concrete, metal, and
                other materials from demolition projects.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={oldMachineryImage}
                alt="Old Machinery Scrap"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Old Machinery Scrap
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We buy old machinery scrap, including equipment and parts,
                offering competitive prices and reliable service.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={panelBoardsScrapImage}
                alt="Panel Boards Scrap"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Panel Boards Scrap
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We buy panel boards scrap, including electrical panels and
                circuit boards, offering competitive prices and fast service.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={pipeScrapImage}
                alt="Pipe Scrap"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Pipe Scrap
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We buy pipe scrap, including metal and plastic pipes, offering
                competitive prices and reliable service.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={portaCabinScrapImage}
                alt="Porta Cabin Scrap"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Porta Cabin Scrap
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We buy porta cabin scrap, offering competitive prices and fast
                service for all types of cabin materials.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={cableScrapImage}
                alt="Copper Scrap"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Copper Scrap
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We buy all types of copper scrap, including wires, pipes, and
                sheets, offering competitive prices and prompt service.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={eScrapImage}
                alt="E-Scrap"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">E-Scrap</h3>
              <p className="text-sm md:text-base text-gray-600">
                We buy all types of e-scrap, including old electronics and
                devices, offering competitive prices and fast service.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={nahazScrapImage}
                alt="Nahaz Scrap"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Nahaz Scrap
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We buy all types of nahaz scrap, offering competitive prices and
                reliable service for sellers.
              </p>
            </div>

            <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition">
              <img
                src={officeDismantledScrapImage}
                alt="Office Dismantled Scrap"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                Office Dismantled Scrap
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                We buy office dismantled scrap, including furniture, equipment,
                and other materials, offering competitive prices and fast
                service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why we rock Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 relative">
            Why we rock!
            <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-600"></div>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-3">
              <Phone className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">On Call Facility</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-3">
              <Truck className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">FREE Pick Up</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-3">
              <Clock className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">24x7 Support</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-3">
              <Shield className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">Hassle Free</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-3">
              <DollarSign className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">Proper Evaluation</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">Professional Consulte</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-3">
              <Recycle className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">Customized Solutions</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-3">
              <FastForward className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">Great Experience</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-3">
              <Leaf className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">Site Cleaning</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-3">
              <MapPin className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">Site Supervision</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-3">
              <Shield className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">Quality Work</span>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg flex items-center gap-3">
              <Clock className="h-6 w-6 text-green-500" />
              <span className="text-gray-700">Timely Delivery</span>
            </div>
          </div>

          <div className="text-center">
            <a href="#contact" className="inline-block bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105">
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-16 md:py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
            alt="Industrial background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            WHY CHOOSE US?
          </h2>
          <p className="text-center text-gray-600 mb-12 md:mb-16 max-w-4xl mx-auto">
            Scrap Buyer a leading, Top and Best Scrap Buyer, purchaser in the
            city of Dammam.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Why Choose Us Cards */}
            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Coins className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Best Prices for Your Scrap
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                We offer top market rates for all types of scrap materials.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <FastForward className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Fast and Hassle-Free Service
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                Our process is quick and easy! From contact to collection, we
                handle everything.
              </p>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Leaf className="h-6 w-6 md:h-8 md:w-8 text-green-600" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold">
                  Eco-Friendly and Responsible
                </h3>
              </div>
              <p className="text-sm md:text-base text-gray-600">
                By selling your scrap to us, you contribute to recycling and
                environmental sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section className="py-16 md:py-24 bg-[#1e3a8a] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
            Client Reviews
          </h2>
          <p className="text-center text-blue-200 mb-12 max-w-4xl mx-auto text-lg">
            What our valued customers say about our services
          </p>
          
          <div className="max-w-6xl mx-auto">
            <div className="relative px-6">
              {/* Review Cards Container */}
              <div 
                className="transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentReviewIndex * (100 / totalPages)}%)` }}
              >
                <div className="flex gap-6">
                  {reviews.map((review, index) => (
                    <div 
                      key={index}
                      className="w-[350px] flex-shrink-0"
                      onMouseEnter={() => setIsPaused(true)}
                      onMouseLeave={() => setIsPaused(false)}
                    >
                      <div className="bg-gradient-to-br from-[#1e4ed8] to-[#1e40af] rounded-2xl p-8 shadow-xl min-h-[295px] flex flex-col border border-blue-400/20">
                        {/* Quote Mark */}
                        <div className="text-blue-200 text-4xl font-serif leading-none">
                          "
                        </div>
                        
                        {/* Content Container */}
                        <div className="flex flex-col h-full">
                          {/* Review Text Container */}
                          <div className="relative flex-1 mt-4">
                            <div className={`${expandedReviews[index] ? 'h-[140px] overflow-y-auto' : 'h-auto'} pr-2 scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-transparent`}>
                              <p className={`text-blue-50 text-lg leading-relaxed ${!expandedReviews[index] ? 'line-clamp-3' : ''}`}>
                                {review.text}
                              </p>
                            </div>
                            {review.text.length > 80 && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleReviewExpansion(index);
                                }}
                                className={`text-blue-300 hover:text-blue-200 text-sm focus:outline-none transition-colors underline ${expandedReviews[index] ? 'mt-2' : ''}`}
                              >
                                {expandedReviews[index] ? 'Show Less' : 'See More'}
                              </button>
                            )}
                          </div>
                          
                          {/* Profile Section - Fixed at Bottom */}
                          <div className="mt-auto pt-4 border-t border-blue-400/20">
                            <div className="flex items-center gap-3">
                              <img
                                src={review.image}
                                alt={review.name}
                                className="w-12 h-12 rounded-full border-2 border-blue-300 flex-shrink-0"
                              />
                              <div className="min-w-0">
                                <h3 className="text-lg font-semibold text-white leading-tight truncate">{review.name}</h3>
                                <p className="text-blue-200 text-sm truncate">{review.subtitle}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Arrows */}
              <button 
                onClick={prevReview}
                className="absolute -left-3 top-1/2 transform -translate-y-1/2 bg-blue-900/90 hover:bg-blue-800 p-4 rounded-full z-10 transition-all duration-300 shadow-xl border border-blue-700"
                disabled={currentReviewIndex === 0}
                style={{ opacity: currentReviewIndex === 0 ? 0.5 : 1 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextReview}
                className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-blue-900/90 hover:bg-blue-800 p-4 rounded-full z-10 transition-all duration-300 shadow-xl border border-blue-700"
                disabled={currentReviewIndex >= totalPages - 1}
                style={{ opacity: currentReviewIndex >= totalPages - 1 ? 0.5 : 1 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Navigation */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: totalPages }, (_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentReviewIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      currentReviewIndex === idx
                        ? 'bg-blue-300 w-4 h-2'
                        : 'bg-blue-900 hover:bg-blue-800 w-2 h-2'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Location Section */}
      <section id="location" className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Location
          </h2>
          <p className="text-center text-gray-600 mb-8 md:mb-12">
            Visit us at our convenient location in Dammam. We're easily
            accessible and ready to serve you.
          </p>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115273.58011740816!2d50.03899655!3d26.4314723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49ef85c961edaf%3A0x7b2db98f2941c78c!2sDammam%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1710371245749!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location"
              className="w-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-12 md:py-16">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1555324/pexels-photo-1555324.jpeg"
            alt="Contact background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="relative container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-10">
            Contact Us
          </h2>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4 bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-lg">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-600" />
                <div>
                  <h3 className="text-xl font-medium">Phone</h3>
                  <p className="text-lg text-gray-600">+966 50 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-600" />
                <div>
                  <h3 className="text-xl font-medium">Email</h3>
                  <p className="text-lg text-gray-600">
                    info@scrapbuyerindammam.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-green-600" />
                <div>
                  <h3 className="text-xl font-medium">Location</h3>
                  <p className="text-lg text-gray-600">
                    Industrial Area 2, Dammam, Saudi Arabia
                  </p>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-lg">
              <div className="space-y-3">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-3 py-2 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-3 py-2 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  rows={3}
                  className="w-full px-3 py-2 text-lg rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-green-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded-lg text-xl font-medium hover:bg-green-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 md:py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm md:text-base">
            &copy; 2025 Scrap Buyer Dammam. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Fixed Buttons */}
      <a
        href="https://wa.me/+966501234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-4 md:right-6 z-50 bg-green-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-4 md:right-6 z-50 bg-red-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-red-600 transition-all duration-300 hover:scale-110 ${
          showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    </div>
  );
}

export default App;
