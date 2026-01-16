import { motion } from "framer-motion";
import { reviews } from "@/lib/mockData";
import { Star, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground pb-20">
      <div className="container mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-5xl font-serif mb-2">Get in Touch</h1>
            <p className="text-muted-foreground mb-8">
              Ready for your tropical escape? Contact us for reservations, airport transfers, or surf packages.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Location</h4>
                  <p className="text-muted-foreground text-sm">Kabalana Beach, Ahangama, Sri Lanka</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Phone</h4>
                  <p className="text-muted-foreground text-sm">+94 77 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-secondary p-3 rounded-full text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-serif text-lg mb-1">Email</h4>
                  <p className="text-muted-foreground text-sm">reservations@lumiere-kabalana.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             animate={{ opacity: 1, x: 0 }}
             className="bg-card border border-border h-[400px] relative overflow-hidden flex items-center justify-center bg-secondary"
          >
            <div className="absolute inset-0 bg-secondary/50" />
            <div className="z-10 text-center">
               <MapPin size={48} className="mx-auto text-primary mb-4" />
               <p className="text-muted-foreground uppercase tracking-widest text-sm font-bold">Google Maps Integration</p>
               <p className="text-xs text-muted-foreground mt-2">(Interactive map would be embedded here)</p>
            </div>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <div className="border-t border-border pt-20">
          <h2 className="text-4xl font-serif text-center mb-16">Guest Reviews</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card p-8 border border-border shadow-lg relative"
              >
                <div className="absolute -top-4 -right-4 text-6xl font-serif text-secondary select-none opacity-50">"</div>
                <div className="flex gap-1 mb-4 text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "opacity-30"} />
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-6 leading-relaxed">"{review.comment}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-serif text-primary font-bold">
                    {review.user[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{review.user}</h4>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
