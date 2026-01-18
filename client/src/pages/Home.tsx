import { motion } from "framer-motion";
import { ArrowRight, Calendar, Search } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import BookingDialog from "@/components/BookingDialog";
import heroVideo from "@assets/generated_videos/luxury_beach_resort_sunset.mp4";
import heroPoster from "@assets/generated_images/beach_resort_sunset_poster.png";
import roomImage from "@assets/generated_images/beachfront_villa_plunge_pool.png";
import diningImage from "@assets/generated_images/sunset_beach_bar.png";
import experienceImage from "@assets/generated_images/surfing_kabalana_beach.png";

const roomTypes = [
  { value: "Royal Ocean Villa", label: "Royal Ocean Villa", price: 1500 },
  { value: "Ocean View Suite", label: "Ocean View Suite", price: 950 },
  { value: "Garden Cabana", label: "Garden Cabana", price: 550 },
];

export default function Home() {
  const [selectedRoom, setSelectedRoom] = useState("");
  const [videoLoaded, setVideoLoaded] = useState(false);
  const selectedRoomData = roomTypes.find(r => r.value === selectedRoom);
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section with Video */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Poster image shown instantly while video loads */}
        <img 
          src={heroPoster} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          onCanPlay={() => setVideoLoaded(true)}
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover z-[1] transition-opacity duration-500 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30 z-10" />
        
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.1 }}
             className="text-xl md:text-3xl tracking-[0.5em] uppercase mb-4 font-bold text-[#d4af37] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Kabalana | Ahangama
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-serif font-bold mb-12 drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] tracking-wide text-white"
          >
            Lumière
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/90 backdrop-blur-sm p-8 md:p-12 max-w-xl mx-auto shadow-2xl"
          >
            <h2 className="text-foreground text-2xl font-serif mb-6 italic">Ideally situated on the golden sands of Kabalana</h2>
             <Link href="/rooms">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-10 py-6 text-xs tracking-[0.2em] uppercase transition-all duration-300 w-full md:w-auto">
                Book Your Villa
              </Button>
            </Link>
          </motion.div>
        </div>

      </section>

      {/* Quick Booking Bar - Separate Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-40 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-y border-primary/20"
      >
        <div className="container mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="bg-white/95 backdrop-blur-md shadow-xl border border-primary/10 p-4 md:p-6 flex flex-col lg:flex-row gap-4 items-stretch lg:items-end max-w-6xl mx-auto">
            <div className="flex-1">
              <label className="text-xs text-muted-foreground uppercase tracking-widest mb-2 block font-medium">Check-in</label>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/60" />
                <Input type="date" className="pl-10 rounded-none border-primary/20 focus:border-primary h-12" data-testid="input-quick-checkin" />
              </div>
            </div>
            <div className="flex-1">
              <label className="text-xs text-muted-foreground uppercase tracking-widest mb-2 block font-medium">Check-out</label>
              <div className="relative">
                <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/60" />
                <Input type="date" className="pl-10 rounded-none border-primary/20 focus:border-primary h-12" data-testid="input-quick-checkout" />
              </div>
            </div>
            <div className="flex-1">
              <label className="text-xs text-muted-foreground uppercase tracking-widest mb-2 block font-medium">Room Type</label>
              <Select value={selectedRoom} onValueChange={setSelectedRoom}>
                <SelectTrigger className="rounded-none border-primary/20 h-12" data-testid="select-quick-room">
                  <SelectValue placeholder="Select Room" />
                </SelectTrigger>
                <SelectContent>
                  {roomTypes.map((room) => (
                    <SelectItem key={room.value} value={room.value}>
                      {room.label} - ${room.price}/night
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="lg:w-auto">
              {selectedRoomData ? (
                <BookingDialog roomType={selectedRoomData.value} price={selectedRoomData.price} />
              ) : (
                <Link href="/rooms">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 h-12 text-xs tracking-[0.2em] uppercase" data-testid="button-check-availability">
                    <Search size={16} className="mr-2" /> Check Availability
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience Section - 3 Columns */}
      <section className="py-12 relative z-30 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { title: "Villas & Suites", img: roomImage, link: "/rooms", subtitle: "Oceanfront Luxury" },
               { title: "Beach Club", img: diningImage, link: "/dining", subtitle: "Sunset Drinks" },
               { title: "Surfing & Wellness", img: experienceImage, link: "/events", subtitle: "Adventures" }
             ].map((item, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, y: 40 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.2, duration: 0.8 }}
                 className="group relative h-[500px] overflow-hidden cursor-pointer shadow-lg"
               >
                 <Link href={item.link}>
                   <div className="w-full h-full relative">
                     <img 
                       src={item.img} 
                       alt={item.title} 
                       loading="lazy"
                       className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                     />
                     {/* Bottom gradient overlay for text readability */}
                     <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
                     {/* Text container with proper spacing */}
                     <div className="absolute bottom-0 left-0 right-0 z-20 p-8 pb-10 text-center flex flex-col items-center justify-end">
                        <p className="text-sm uppercase tracking-[0.3em] mb-4 text-[#D4AF37] font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 drop-shadow-lg">{item.subtitle}</p>
                        <h3 className="text-4xl font-serif font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] group-hover:-translate-y-2 transition-transform duration-500">{item.title}</h3>
                     </div>
                   </div>
                 </Link>
               </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-background text-foreground text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-8"
          >
            <div className="w-[1px] h-16 bg-primary mx-auto mb-8" />
            <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-bold">Welcome to Paradise</h3>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              A Tropical Sanctuary in <span className="text-primary italic">Ahangama</span>
            </h2>
            <p className="text-muted-foreground leading-loose text-lg font-light">
              Nestled along the pristine shores of Kabalana Beach, Lumière Beach Resort offers an 
              unparalleled escape in Sri Lanka. Surrounded by swaying coconut palms and the rhythmic 
              sound of the Indian Ocean, our resort blends modern luxury with island charm. 
              Whether you're here to catch the perfect wave or unwind by your private plunge pool, 
              paradise awaits.
            </p>
            <div className="pt-8">
              <Link href="/rooms">
                <a className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors uppercase tracking-[0.2em] text-[10px] font-bold border-b border-gray-300 pb-2 hover:border-primary">
                  Explore The Resort <ArrowRight size={14} />
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
