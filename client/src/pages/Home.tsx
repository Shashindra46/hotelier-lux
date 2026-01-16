import { motion } from "framer-motion";
import { ArrowRight, Star, MapPin } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/luxury_hotel_lobby.png";
import roomImage from "@assets/generated_images/luxury_ocean_view_suite.png";
import diningImage from "@assets/generated_images/fine_dining_restaurant.png";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-subtle-zoom"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base tracking-[0.3em] uppercase mb-4"
          >
            Welcome to Lumière
          </motion.h2>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight"
          >
            Redefining <br /> <span className="text-primary italic">Luxury</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link href="/rooms">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-white hover:text-black rounded-none px-8 py-6 text-sm tracking-widest uppercase transition-all duration-300">
                Explore Suites
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-widest uppercase opacity-70">Scroll to Explore</span>
          <div className="w-[1px] h-12 bg-white/30" />
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-background text-foreground">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-primary text-sm tracking-widest uppercase font-bold">About Us</h3>
            <h2 className="text-4xl md:text-5xl font-serif">A Sanctuary in the <br/> Heart of the City</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nestled in the most prestigious district, Lumière offers an escape from the ordinary. 
              Our architecture blends modern elegance with timeless sophistication, creating an atmosphere 
              where every moment is a celebration of refined living.
            </p>
            <div className="pt-4">
              <Link href="/contact">
                <a className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors uppercase tracking-widest text-xs font-bold border-b border-primary pb-1">
                  Read Our Story <ArrowRight size={14} />
                </a>
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img src={roomImage} alt="Luxury Interior" className="w-full h-[500px] object-cover" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary z-[-1]" />
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
             <h3 className="text-primary text-sm tracking-widest uppercase font-bold">Experience</h3>
             <h2 className="text-4xl font-serif">Unparalleled Service</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Fine Dining", img: diningImage, desc: "Culinary masterpieces by world-renowned chefs." },
              { title: "Wellness Spa", img: roomImage, desc: "Rejuvenate your senses in our tranquil sanctuary." }, // reusing image for now
              { title: "Exclusive Events", img: heroImage, desc: "Curated experiences for the discerning guest." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.6 } }
                }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden mb-6 h-80 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-500 z-10" />
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                </div>
                <h3 className="text-2xl font-serif mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
