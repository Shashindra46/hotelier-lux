import { useState } from "react";
import { motion } from "framer-motion";
import { menu } from "@/lib/mockData";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import diningImage from "@assets/generated_images/sunset_beach_bar.png";
import { Star } from "lucide-react";

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
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-4">Taste of the Tropics</h1>
            <p className="text-white/90 uppercase tracking-widest text-sm font-bold">Beach Club & Oceanfront Dining</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 -mt-20 relative z-10 bg-card p-8 md:p-12 border border-border shadow-2xl max-w-4xl">
        <Tabs defaultValue="dinner" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-transparent border-b border-border w-full justify-center h-auto p-0 gap-4 md:gap-8 rounded-none flex-wrap">
              {["breakfast", "lunch", "dinner", "drinks_desserts"].map((tab) => (
                <TabsTrigger 
                  key={tab} 
                  value={tab}
                  className="bg-transparent border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:text-primary text-muted-foreground uppercase tracking-widest pb-4 rounded-none text-xs md:text-sm font-bold shadow-none hover:text-primary transition-colors px-2 md:px-8"
                >
                  {tab.replace('_', ' & ')}
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
                  {items.map((item: any, index: number) => (
                    <div key={index} className={`group ${item.highlighted ? "border border-primary/30 p-4 bg-primary/5 rounded-lg -m-4 md:-m-4" : ""}`}>
                      <div className="flex justify-between items-baseline mb-2 border-b border-border/30 pb-2 border-dashed group-hover:border-primary/50 transition-colors">
                        <div className="flex items-center gap-2">
                           <h4 className="text-xl font-serif">{item.name}</h4>
                           {item.highlighted && <span className="bg-primary text-primary-foreground text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold flex items-center gap-1"><Star size={10} fill="currentColor"/> Must Try</span>}
                        </div>
                        <span className="text-lg text-primary font-bold">${item.price}</span>
                      </div>
                      <p className="text-muted-foreground text-sm italic">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-12 pt-8 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    * Fresh seafood caught daily from Ahangama fishermen.
                  </p>
                  <button className="bg-primary text-primary-foreground px-8 py-3 rounded-none uppercase text-xs font-bold tracking-widest hover:bg-primary/90 transition-all">
                    View Full Menu (PDF)
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
