import { motion } from "framer-motion";
import { ShoppingBag, Shirt, Watch, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import linenImage from "@assets/generated_images/linen_clothing_collection_on_rack.png";
import accessoriesImage from "@assets/generated_images/handmade_local_accessories_display.png";
import beachwearImage from "@assets/generated_images/tropical_beachwear_mannequin.png";

export default function Boutique() {
  return (
    <div className="pt-24 min-h-screen bg-background text-foreground pb-20">
      <div className="container mx-auto px-6">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-serif">The Boutique</h1>
          <div className="w-20 h-1 bg-primary mx-auto" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg uppercase tracking-widest">
            Curated beachwear and local crafts, inspired by the spirit of Kabalana.
          </p>
        </motion.div>

        {/* Linen Collection Section */}
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
                <Shirt size={18} />
                <span>Linen Collection</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Effortless <br/><span className="text-primary italic">Elegance</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Discover our exclusive range of breathable linen wear, designed for the tropical climate. 
                From flowing dresses to tailored shirts, each piece embodies the relaxed sophistication of coastal living.
              </p>
              
              <div className="pt-4">
                 <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-xs tracking-[0.2em] uppercase transition-all">
                    View Collection
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
                src={linenImage} 
                alt="Linen Collection" 
                className="w-full h-[500px] object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

        {/* Handmade Accessories Section */}
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
                src={accessoriesImage} 
                alt="Handmade Accessories" 
                className="w-full h-[500px] object-cover shadow-2xl"
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
                <Watch size={18} />
                <span>Handmade Accessories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Artisanal <br/><span className="text-primary italic">Craftsmanship</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Support local artisans with our curated selection of handmade jewelry, woven bags, and unique keepsakes. 
                Each item tells a story of Sri Lankan heritage and skilled craftsmanship.
              </p>
              
              <div className="pt-4">
                 <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-8 py-6 text-xs tracking-[0.2em] uppercase transition-all">
                    Shop Accessories
                 </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Tropical Beachwear Section */}
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
                <ShoppingBag size={18} />
                <span>Tropical Beachwear</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                Island <br/><span className="text-primary italic">Style</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Embrace the sun with our vibrant collection of swimwear, sarongs, and beach essentials. 
                Bold prints and comfortable fabrics ensure you look and feel your best by the water.
              </p>
              
              <div className="pt-4">
                 <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-xs tracking-[0.2em] uppercase transition-all">
                    Browse Beachwear
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
                src={beachwearImage} 
                alt="Tropical Beachwear" 
                className="w-full h-[500px] object-cover shadow-2xl"
              />
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
}
