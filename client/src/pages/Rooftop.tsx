import { motion } from "framer-motion";
import { Coffee, Sun, Wind, ArrowRight, Music, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import cafeImage from "@assets/generated_images/rooftop_skyline_cafe.png";
import yogaImage from "@assets/generated_images/rooftop_sunrise_yoga.png";
import djImage from "@assets/generated_images/rooftop_sunset_dj_party_scene.png";

export default function Rooftop() {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground pb-20">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-serif">Rooftop</h1>
          <div className="w-20 h-1 bg-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg uppercase tracking-widest">
            Wellness • Leisure • Views
          </p>
        </motion.div>

        {/* Skyline Cafe Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 space-y-8"
            >
              <div className="flex items-center gap-3 text-primary uppercase tracking-widest text-sm font-bold">
                <Coffee size={18} />
                <span>Skyline Cafe</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Sip Above the <br/><span className="text-primary italic">Palm Trees</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Experience the vibrant energy of Ahangama from our rooftop sanctuary. 
                The Skyline Cafe offers a curated selection of single-origin specialty coffees, 
                cold-pressed tropical juices, and wholesome bites.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                With a 360-degree panoramic view of Kabalana Beach and the surrounding coconut groves, 
                it's the perfect spot to start your day or unwind as the sun dips below the horizon.
              </p>
              
              <div className="pt-4">
                 <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-xs tracking-[0.2em] uppercase transition-all">
                    View Menu
                 </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 relative"
            >
              <div className="absolute -inset-4 border border-primary/20 -z-10 translate-x-4 translate-y-4" />
              <img 
                src={cafeImage} 
                alt="Skyline Cafe" 
                className="w-full h-[500px] object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Yoga Sanctuary Section */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-primary/20 -z-10 -translate-x-4 translate-y-4" />
              <img 
                src={yogaImage} 
                alt="Rooftop Yoga" 
                className="w-full h-[500px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="flex items-center gap-3 text-primary uppercase tracking-widest text-sm font-bold">
                <Sun size={18} />
                <span>Yoga & Wellness</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Find Balance by <br/><span className="text-primary italic">The Ocean</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Reconnect with your inner self in our open-air Yoga Sanctuary. 
                Our rooftop deck provides a serene space for daily practice, surrounded by 
                the soothing sounds of the ocean and the gentle sea breeze.
              </p>
              
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  Sunrise Flow (6:30 AM)
                </li>
                <li className="flex items-center gap-4">
                   <div className="w-2 h-2 bg-primary rounded-full" />
                   Sunset Yin (5:30 PM)
                </li>
                <li className="flex items-center gap-4">
                   <div className="w-2 h-2 bg-primary rounded-full" />
                   Private Meditation Sessions
                </li>
              </ul>

              <div className="pt-4">
                 <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-8 py-6 text-xs tracking-[0.2em] uppercase transition-all">
                    Book a Session
                 </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Sunset DJ Sessions Section */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 space-y-8"
            >
              <div className="flex items-center gap-3 text-primary uppercase tracking-widest text-sm font-bold">
                <Music size={18} />
                <span>Nightlife</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Sunset <br/><span className="text-primary italic">DJ Sessions</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Join us every Saturday evening on our rooftop for vibrant DJ sets, stunning sunset views, 
                and signature cocktails. Experience the best of Kabalana's nightlife in a sophisticated, 
                open-air setting.
              </p>
              
              <div className="flex gap-8 text-muted-foreground border-t border-b border-border py-4">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-primary"/>
                  <span className="text-sm font-bold tracking-widest uppercase">Saturdays</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock size={20} className="text-primary"/>
                  <span className="text-sm font-bold tracking-widest uppercase">7:00 PM Onwards</span>
                </div>
              </div>

              <div className="pt-4">
                 <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-xs tracking-[0.2em] uppercase transition-all">
                    Reserve Your Spot
                 </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 md:order-2 relative"
            >
              <div className="absolute -inset-4 border border-primary/20 -z-10 translate-x-4 translate-y-4" />
              <img 
                src={djImage} 
                alt="Sunset DJ Party" 
                className="w-full h-[500px] object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </section>
