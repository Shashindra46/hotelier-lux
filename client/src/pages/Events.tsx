import { motion } from "framer-motion";
import { events } from "@/lib/mockData";
import { Calendar, Clock } from "lucide-react";
import poolImage from "@assets/generated_images/surfing_kabalana_beach.png";
import diningImage from "@assets/generated_images/sunset_beach_bar.png";

export default function Events() {
  return (
    <div className="pt-32 min-h-screen bg-background text-foreground pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Experiences & Adventures</h1>
          <div className="w-20 h-1 bg-primary mb-6" />
          <p className="text-muted-foreground max-w-2xl text-lg">
            Immerse yourself in the Ahangama lifestyle. From world-class surfing to whale watching expeditions.
          </p>
        </motion.div>

        <div className="space-y-24">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} gap-12 items-center`}
            >
              <div className="w-full md:w-1/2 overflow-hidden shadow-2xl">
                <img 
                  src={event.id === 1 ? poolImage : diningImage} // Logic is a bit loose but works for prototype
                  alt={event.title} 
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              <div className="w-full md:w-1/2 space-y-6">
                <div className="flex gap-4 text-primary text-sm font-bold tracking-widest uppercase">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} /> {event.date.split(",")[0]}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} /> {event.date.split(",")[1]}
                  </div>
                </div>
                
                <h2 className="text-4xl font-serif">{event.title}</h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {event.description}
                </p>
                
                <button className="text-primary hover:text-[#d4af37] border-b border-primary hover:border-[#d4af37] pb-1 uppercase text-xs font-bold tracking-widest transition-colors">
                  Reserve Experience
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
