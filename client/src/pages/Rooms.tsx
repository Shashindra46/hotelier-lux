import { motion } from "framer-motion";
import { rooms } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import BookingDialog from "@/components/BookingDialog";
import { Wifi, Monitor, Coffee, Wind } from "lucide-react";
import roomImage from "@assets/generated_images/beachfront_villa_plunge_pool.png";

export default function Rooms() {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-5xl md:text-6xl font-serif">Villas & Suites</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our collection of beachfront sanctuaries, featuring private plunge pools and direct ocean access.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group grid grid-cols-1 md:grid-cols-2 gap-0 border border-border bg-card overflow-hidden hover:border-primary/50 transition-colors duration-300"
            >
              <div className="h-64 md:h-96 overflow-hidden relative">
                <img 
                  src={roomImage} // Using single asset for prototype
                  alt={room.name} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs uppercase font-bold px-3 py-1 tracking-widest">
                  {room.category}
                </div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-3xl font-serif mb-2">{room.name}</h3>
                      <p className="text-sm text-primary uppercase tracking-wider">{room.floor} • {room.view}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-serif">${room.price}</p>
                      <p className="text-xs text-muted-foreground">/ night</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                    Relax in our {room.size} sanctuary. {room.amenities[0]} and {room.amenities[1]} await you.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {room.amenities.map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {amenity}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <BookingDialog roomType={room.name} price={room.price} />
                  <Button variant="outline" className="flex-1 border-border text-foreground hover:bg-secondary rounded-none uppercase tracking-widest text-xs font-bold py-6">
                    View Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
