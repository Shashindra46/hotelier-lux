import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/bright_luxury_hotel_exterior.png";
import roomImage from "@assets/generated_images/bright_luxury_room.png";
import diningImage from "@assets/generated_images/bright_fine_dining.png";
import experienceImage from "@assets/generated_images/luxury_spa_experience.png";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0 animate-subtle-zoom"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Subtle overlay, lighter than before to keep it "bright" but readable */}
        <div className="absolute inset-0 bg-black/10 z-10" />
        
        <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium mb-12 drop-shadow-lg tracking-tight"
          >
            Lumière
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/90 backdrop-blur-sm p-8 md:p-12 max-w-xl mx-auto shadow-2xl"
          >
            <h2 className="text-foreground text-2xl font-serif mb-6 italic">Ideally situated in the heart of the city</h2>
             <Link href="/rooms">
              <Button className="bg-primary text-white hover:bg-primary/90 rounded-none px-10 py-6 text-xs tracking-[0.2em] uppercase transition-all duration-300 w-full md:w-auto">
                Book Your Stay
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Experience Section - 3 Columns */}
      <section className="py-0 relative -mt-20 z-30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {[
               { title: "Rooms & Suites", img: roomImage, link: "/rooms", subtitle: "Refined Comfort" },
               { title: "Dining", img: diningImage, link: "/dining", subtitle: "Culinary Excellence" },
               { title: "Experiences", img: experienceImage, link: "/events", subtitle: "Wellness & Leisure" }
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
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                     <img 
                       src={item.img} 
                       alt={item.title} 
                       className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
                     />
                     <div className="absolute bottom-10 left-0 right-0 text-center z-20 text-white">
                        <p className="text-xs uppercase tracking-[0.2em] mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">{item.subtitle}</p>
                        <h3 className="text-3xl font-serif tracking-wide group-hover:-translate-y-2 transition-transform duration-500">{item.title}</h3>
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
            <h3 className="text-xs tracking-[0.3em] uppercase text-muted-foreground font-bold">Our Heritage</h3>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              A Legacy of <span className="text-primary italic">Timeless Hospitality</span>
            </h2>
            <p className="text-muted-foreground leading-loose text-lg font-light">
              For over a century, Lumière has stood as a beacon of elegance and refinement. 
              Our commitment to providing an authentic and luxurious experience is rooted in 
              the belief that true hospitality is an art form. From the moment you arrive, 
              you are enveloped in a world where every detail is curated to inspire and delight.
            </p>
            <div className="pt-8">
              <Link href="/contact">
                <a className="inline-flex items-center gap-3 text-foreground hover:text-primary transition-colors uppercase tracking-[0.2em] text-[10px] font-bold border-b border-gray-300 pb-2 hover:border-primary">
                  Discover More <ArrowRight size={14} />
                </a>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
