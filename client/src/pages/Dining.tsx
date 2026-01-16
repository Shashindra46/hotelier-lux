import { useState } from "react";
import { motion } from "framer-motion";
import { menu } from "@/lib/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import diningImage from "@assets/generated_images/fine_dining_restaurant.png";

export default function Dining() {
  const [activeTab, setActiveTab] = useState("dinner");

  return (
    <div className="min-h-screen bg-background text-foreground pb-20">
      {/* Hero */}
      <div className="h-[60vh] relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${diningImage})` }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">The Epicurean</h1>
            <p className="text-white/80 uppercase tracking-widest text-sm">Fine Dining • 7AM - 11PM</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-10 bg-card p-8 md:p-12 border border-border shadow-2xl max-w-4xl">
        <Tabs defaultValue="dinner" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-transparent border-b border-border w-full justify-center h-auto p-0 gap-8 rounded-none">
              {["breakfast", "lunch", "dinner"].map((tab) => (
                <TabsTrigger 
                  key={tab} 
                  value={tab}
                  className="bg-transparent border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground uppercase tracking-widest pb-4 rounded-none text-sm font-bold shadow-none hover:text-primary transition-colors px-4 md:px-8"
                >
                  {tab}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {Object.entries(menu).map(([category, items]) => (
              <TabsContent key={category} value={category} className="space-y-8 mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                  {items.map((item, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between items-baseline mb-2 border-b border-border/30 pb-2 border-dashed group-hover:border-primary/50 transition-colors">
                        <h4 className="text-xl font-serif">{item.name}</h4>
                        <span className="text-lg text-primary font-bold">${item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm italic">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-12 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    * Please inform our staff of any dietary restrictions or allergies.
                  </p>
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-none uppercase text-xs font-bold tracking-widest hover:bg-primary/90 transition-all">
                    Make a Reservation
                  </button>
                </div>
              </TabsContent>
            ))}
          </motion.div>
        </Tabs>
      </div>
    </div>
  );
}
