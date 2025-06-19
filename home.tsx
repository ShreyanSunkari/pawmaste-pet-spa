import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logoPath from "@assets/327462836_699195308368607_7839392009451557297_n_1750358025451.jpg";
import heroImage from "@assets/image_1750358642253.png";
import galleryImage1 from "@assets/image_1750358579866.png";
import galleryImage2 from "@assets/image_1750358590119.png";
import galleryImage3 from "@assets/image_1750358606955.png";
import galleryImage4 from "@assets/image_1750358630704.png";
import galleryImage5 from "@assets/image_1750358642253.png";
import galleryImage6 from "@assets/image_1750358695807.png";
import galleryImage7 from "@assets/image_1750358721693.png";
import galleryImage8 from "@assets/image_1750358767941.png";
import galleryImage9 from "@assets/image_1750358791803.png";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  const handleBooking = () => {
    alert("Thank you for your interest! Please call (757) 503-5886 to book your appointment.");
  };

  const handleCall = () => {
    window.location.href = "tel:+17575035886";
  };

  return (
    <div className="min-h-screen bg-beige-50">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-lg" 
          : "bg-white bg-opacity-95 backdrop-blur-sm shadow-sm"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src={logoPath} alt="Pawmaste Pet Spa Logo" className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-semibold text-sage-700">Pawmaste Pet Spa</h1>
                <p className="text-sm text-gray-600 hidden sm:block">Where Pets Find Their Zen</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-gray-700 hover:text-sage-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className="text-gray-700 hover:text-sage-600 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("gallery")} 
                className="text-gray-700 hover:text-sage-600 transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")} 
                className="text-gray-700 hover:text-sage-600 transition-colors"
              >
                Reviews
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-gray-700 hover:text-sage-600 transition-colors"
              >
                Contact
              </button>
            </div>
            <button 
              className="md:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection("about")} 
                  className="text-gray-700 hover:text-sage-600 transition-colors text-left"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection("services")} 
                  className="text-gray-700 hover:text-sage-600 transition-colors text-left"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection("gallery")} 
                  className="text-gray-700 hover:text-sage-600 transition-colors text-left"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => scrollToSection("testimonials")} 
                  className="text-gray-700 hover:text-sage-600 transition-colors text-left"
                >
                  Reviews
                </button>
                <button 
                  onClick={() => scrollToSection("contact")} 
                  className="text-gray-700 hover:text-sage-600 transition-colors text-left"
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-sage-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <img src={logoPath} alt="Pawmaste Pet Spa Logo" className="h-24 w-auto mx-auto lg:mx-0 mb-6" />
              <h1 className="text-4xl lg:text-6xl font-bold text-sage-800 mb-4">
                Pawmaste<br />
                <span className="text-teal-600">Pet Spa</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-700 mb-6 font-light">
                Where Pets Find Their Zen
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
                Professional grooming and spa treatments for your beloved pets in the heart of Henrico County, Virginia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleBooking}
                  className="bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                >
                  <i className="fas fa-calendar-alt mr-2"></i>
                  Book Now
                </Button>
                <Button 
                  onClick={handleCall}
                  variant="outline"
                  className="border-2 border-sage-600 text-sage-600 hover:bg-sage-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Professional pet bathing service at Pawmaste Pet Spa" 
                className="rounded-3xl shadow-2xl w-full h-auto" 
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="bg-sage-100 p-3 rounded-full">
                    <i className="fas fa-star text-sage-600 text-xl"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Premium Care</p>
                    <p className="text-sm text-gray-600">For Every Pet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-sage-800 mb-4">About Pawmaste Pet Spa</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe every pet deserves a spa day. Our experienced groomers provide premium care in a calming, zen-like environment designed specifically for your pet's comfort and well-being.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 bg-sage-50 border-none">
              <CardContent className="p-0">
                <div className="bg-sage-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-cut text-sage-700 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-sage-800 mb-4">Professional Grooming</h3>
                <p className="text-gray-600">Expert grooming services including baths, cuts, nail trims, and styling tailored to your pet's breed and personality.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-teal-50 border-none">
              <CardContent className="p-0">
                <div className="bg-teal-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-spa text-teal-700 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-teal-800 mb-4">Spa Treatments</h3>
                <p className="text-gray-600">Relaxing spa treatments including aromatherapy baths, deep conditioning, and therapeutic massages for ultimate relaxation.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 bg-beige-100 border-none">
              <CardContent className="p-0">
                <div className="bg-beige-300 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <i className="fas fa-heart text-beige-700 text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-beige-800 mb-4">Loving Care</h3>
                <p className="text-gray-600">Every pet receives individualized attention and care from our passionate team who treats your pets like family.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-beige-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-sage-800 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Comprehensive grooming and spa services for dogs and cats</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0 text-center">
                <i className="fas fa-bath text-3xl text-sage-600 mb-4"></i>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Full Grooming</h3>
                <p className="text-gray-600 text-sm">Complete grooming package with bath, cut, nail trim, and ear cleaning</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0 text-center">
                <i className="fas fa-leaf text-3xl text-teal-600 mb-4"></i>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Aromatherapy Bath</h3>
                <p className="text-gray-600 text-sm">Relaxing bath with natural essential oils for stress relief</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0 text-center">
                <i className="fas fa-scissors text-3xl text-sage-600 mb-4"></i>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Nail & Paw Care</h3>
                <p className="text-gray-600 text-sm">Professional nail trimming and paw pad moisturizing treatment</p>
              </CardContent>
            </Card>
            
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-0 text-center">
                <i className="fas fa-magic text-3xl text-teal-600 mb-4"></i>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">De-shedding Treatment</h3>
                <p className="text-gray-600 text-sm">Specialized treatment to reduce shedding and promote healthy coat</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-sage-800 mb-4">Happy & Pampered Pets</h2>
            <p className="text-xl text-gray-600">See the transformation and joy in our furry clients</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <img 
              src={galleryImage1} 
              alt="Beautiful groomed poodle in spring flowers" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full h-48 object-cover" 
            />
            <img 
              src={galleryImage2} 
              alt="Adorable groomed poodle with spring bandana" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full h-48 object-cover" 
            />
            <img 
              src={galleryImage3} 
              alt="Professional groomed poodle with pink bow" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full h-48 object-cover" 
            />
            <img 
              src={galleryImage4} 
              alt="Corgi during professional grooming session" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full h-48 object-cover" 
            />
            <img 
              src={galleryImage5} 
              alt="Professional bathing service in action" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full h-48 object-cover" 
            />
            <img 
              src={galleryImage6} 
              alt="Creative color styling service - rainbow poodle" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full h-48 object-cover" 
            />
            <img 
              src={galleryImage7} 
              alt="French Bulldog with floral bandana" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full h-48 object-cover" 
            />
            <img 
              src={galleryImage8} 
              alt="Senior dog receiving gentle grooming care" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full h-48 object-cover" 
            />
            <img 
              src={galleryImage9} 
              alt="French Bulldog with blue bandana" 
              className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full h-48 object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-teal-50 to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-sage-800 mb-4">What Pet Parents Say</h2>
            <p className="text-xl text-gray-600">Trusted by families across Henrico County</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-sm"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Does a great job with my elderly & anxious dog. Amanda is great! Don't hesitate taking your baby there!"
                </p>
                <div className="flex items-center">
                  <div className="bg-sage-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-user text-sage-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Lois Lane</p>
                    <p className="text-sm text-gray-500">Pet Parent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-sm"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Pawmaste is the Best, I wouldn't take my dogs anywhere else. Mandi is a breeze to work with."
                </p>
                <div className="flex items-center">
                  <div className="bg-teal-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-user text-teal-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">RVA Renovation & Repair LLC</p>
                    <p className="text-sm text-gray-500">Business Owner</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-sm"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "My pup and I love Geneva- she takes great care of my Rosie"
                </p>
                <div className="flex items-center">
                  <div className="bg-beige-200 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-user text-beige-700"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Michele Jacobson</p>
                    <p className="text-sm text-gray-500">Pet Parent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star text-sm"></i>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Best dog groomer in town period. My dogs Love Mandi! We're sold!"
                </p>
                <div className="flex items-center">
                  <div className="bg-sage-100 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <i className="fas fa-user text-sage-600"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Waylon Lassiter</p>
                    <p className="text-sm text-gray-500">Pet Parent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-xl"></i>
                  ))}
                </div>
                <span className="text-2xl font-bold text-gray-800">5.0</span>
              </div>
              <p className="text-gray-600 font-medium">Perfect 5-star rating from all our clients</p>
              <p className="text-sm text-gray-500 mt-2">Based on genuine customer reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-sage-800 mb-4">Visit Us Today</h2>
            <p className="text-xl text-gray-600">Located in the heart of Henrico County, Virginia</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="p-8 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-sage-100 p-3 rounded-full flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-sage-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Location</h3>
                      <p className="text-gray-600">10960 Three Chopt Rd<br />Henrico, VA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-8 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-3 rounded-full flex-shrink-0">
                      <i className="fas fa-phone text-teal-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
                      <p className="text-gray-600 text-lg font-medium">(757) 503-5886</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="p-8 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex items-start space-x-4">
                    <div className="bg-pink-100 p-3 rounded-full flex-shrink-0">
                      <i className="fab fa-instagram text-pink-600 text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow Us</h3>
                      <p className="text-gray-600">@pawmastepetspa</p>
                      <p className="text-sm text-gray-500 mt-1">See more happy pets on our Instagram!</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <Card className="p-8 shadow-lg">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold text-sage-800 mb-6 text-center">Ready to Book?</h3>
                <p className="text-gray-600 text-center mb-8">Give your pet the spa day they deserve. Our experienced team is ready to pamper your furry friend with the highest quality care.</p>
                
                <div className="space-y-4">
                  <Button 
                    onClick={handleBooking}
                    className="w-full bg-sage-600 hover:bg-sage-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                  >
                    <i className="fas fa-calendar-alt mr-2"></i>
                    Book Appointment
                  </Button>
                  
                  <Button 
                    onClick={handleCall}
                    variant="outline"
                    className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all"
                  >
                    <i className="fas fa-phone mr-2"></i>
                    Call Now: (757) 503-5886
                  </Button>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-200 text-center">
                  <p className="text-sm text-gray-500 mb-4">Business Hours</p>
                  <div className="space-y-1 text-sm text-gray-600">
                    <p>Sunday-Monday: CLOSED</p>
                    <p>Tuesday: 9:00 AM - 5:00 PM</p>
                    <p>Wednesday: 9:00 AM - 5:00 PM</p>
                    <p>Thursday: 9:00 AM - 5:00 PM</p>
                    <p>Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sage-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src={logoPath} 
                  alt="Pawmaste Pet Spa Logo" 
                  className="h-12 w-auto filter brightness-0 invert" 
                />
                <div>
                  <h3 className="text-xl font-semibold">Pawmaste Pet Spa</h3>
                  <p className="text-sage-200 text-sm">Where Pets Find Their Zen</p>
                </div>
              </div>
              <p className="text-sage-200">Premium grooming and spa services for your beloved pets in Henrico County, Virginia.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-sage-200">
                <p><i className="fas fa-map-marker-alt mr-2"></i>10960 Three Chopt Rd, Henrico, VA</p>
                <p><i className="fas fa-phone mr-2"></i>(757) 503-5886</p>
                <p><i className="fab fa-instagram mr-2"></i>@pawmastepetspa</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sage-200">
                <li>Professional Grooming</li>
                <li>Aromatherapy Baths</li>
                <li>Nail & Paw Care</li>
                <li>De-shedding Treatment</li>
                <li>Spa Treatments</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-sage-700 mt-8 pt-8 text-center">
            <p className="text-sage-300">&copy; 2024 Pawmaste Pet Spa. All rights reserved. | Henrico County, Virginia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
