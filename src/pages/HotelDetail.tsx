import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Wifi, Waves, Coffee, Car, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import hotelImage from "@/assets/hotel-1.jpg";
import heroImage from "@/assets/hero-hotel.jpg";

const HotelDetail = () => {
  const amenities = [
    { icon: Wifi, label: "Free WiFi" },
    { icon: Waves, label: "Swimming Pool" },
    { icon: Coffee, label: "Restaurant" },
    { icon: Car, label: "Free Parking" },
  ];

  return (
    <div className="min-h-screen bg-secondary">
      <Navigation />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-4 mb-8"
          >
            <img
              src={hotelImage}
              alt="Hotel exterior"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
            <img
              src={heroImage}
              alt="Hotel pool"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Hotel Details */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-card-dark rounded-2xl p-8"
              >
                <h1 className="text-4xl font-bold text-white mb-4">Rimuru Hotel</h1>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < 4 ? "fill-yellow-400 text-yellow-400" : "text-white/30"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-white">4.7 (300 Reviews)</span>
                </div>

                <div className="flex items-center gap-2 text-white/70 mb-8">
                  <MapPin className="w-5 h-5" />
                  <span>123 Hotel Street, City Center, Downtown</span>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">About This Hotel</h2>
                  <p className="text-white/80 leading-relaxed">
                    Experience luxury and comfort at Rimuru Hotel. Our modern facilities and 
                    exceptional service ensure a memorable stay. Located in the heart of the 
                    city, we offer easy access to major attractions, shopping districts, and 
                    business centers. Each room is designed with your comfort in mind, featuring 
                    contemporary amenities and stunning city views.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-4">Amenities</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3 text-white">
                        <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                          <amenity.icon className="w-5 h-5 text-primary" />
                        </div>
                        <span>{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">Room Features</h2>
                  <div className="grid md:grid-cols-2 gap-3">
                    {["Air Conditioning", "Flat-screen TV", "Mini Bar", "Room Service", "Safety Box", "City View"].map(
                      (feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-white">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>{feature}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Booking Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="bg-card-dark rounded-2xl p-6 sticky top-24">
                <div className="mb-6">
                  <div className="text-3xl font-bold text-white mb-2">
                    120 USDC<span className="text-lg font-normal text-white/70">/night</span>
                  </div>
                  <p className="text-white/70">Prices protected in escrow until check-in</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="text-sm text-white/70 block mb-2">Check-in Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                      defaultValue="2025-11-27"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70 block mb-2">Check-out Date</label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white"
                      defaultValue="2025-11-28"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-white/70 block mb-2">Guests</label>
                    <select className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white">
                      <option>1 Adult</option>
                      <option>2 Adults</option>
                      <option>2 Adults, 1 Child</option>
                      <option>2 Adults, 2 Children</option>
                    </select>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 mb-6">
                  <div className="flex justify-between text-white mb-2">
                    <span>120 USDC × 1 night</span>
                    <span>120 USDC</span>
                  </div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Service fee</span>
                    <span>10 USDC</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white mt-4">
                    <span>Total</span>
                    <span>130 USDC</span>
                  </div>
                </div>

                <Link to="/booking">
                  <Button variant="hero" size="lg" className="w-full">
                    Book Now
                  </Button>
                </Link>
                
                <p className="text-sm text-white/70 text-center mt-4">
                  Secure payment with USDC escrow protection
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetail;
