import { motion } from "framer-motion";
import { ShoppingBag, Shirt, Watch } from "lucide-react";
import BoutiqueInquiryDialog from "@/components/BoutiqueInquiryDialog";

import linenShirtImage from "@assets/generated_images/men's_linen_shirt_product.png";
import linenDressImage from "@assets/generated_images/women's_linen_dress_product.png";
import linenTrousersImage from "@assets/generated_images/linen_trousers_product.png";

import shellNecklaceImage from "@assets/generated_images/shell_necklace_product.png";
import wovenBagImage from "@assets/generated_images/woven_beach_bag_product.png";
import braceletImage from "@assets/generated_images/handmade_bracelet_product.png";

import swimsuitImage from "@assets/generated_images/designer_swimsuit_product.png";
import sarongImage from "@assets/generated_images/silk_sarong_product.png";
import beachHatImage from "@assets/generated_images/beach_hat_product.png";

const linenProducts = [
  { name: "Men's Linen Shirt", price: 45, image: linenShirtImage },
  { name: "Women's Linen Dress", price: 65, image: linenDressImage },
  { name: "Linen Trousers", price: 55, image: linenTrousersImage },
];

const artisanProducts = [
  { name: "Shell Necklace", price: 25, image: shellNecklaceImage },
  { name: "Woven Beach Bag", price: 40, image: wovenBagImage },
  { name: "Handmade Bracelet", price: 15, image: braceletImage },
];

const beachwearProducts = [
  { name: "Designer Swimsuit", price: 50, image: swimsuitImage },
  { name: "Premium Silk Sarong", price: 35, image: sarongImage },
  { name: "Beach Hat", price: 30, image: beachHatImage },
];

function ProductCard({ product }: { product: { name: string; price: number; image: string } }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card border border-border group"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-serif text-lg">{product.name}</h3>
          <span className="text-xl font-serif text-primary">${product.price}</span>
        </div>
        <BoutiqueInquiryDialog productName={product.name} productPrice={product.price} />
      </div>
    </motion.div>
  );
}

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
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 text-primary uppercase tracking-widest text-sm font-bold mb-4">
              <Shirt size={18} />
              <span>Linen Collection</span>
            </div>
            <h2 className="text-4xl font-serif mb-4">Effortless <span className="text-primary italic">Elegance</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our exclusive range of breathable linen wear, designed for the tropical climate. 
              Each piece embodies the relaxed sophistication of coastal living.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {linenProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        {/* Artisanal Craftsmanship Section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 text-primary uppercase tracking-widest text-sm font-bold mb-4">
              <Watch size={18} />
              <span>Artisanal Craftsmanship</span>
            </div>
            <h2 className="text-4xl font-serif mb-4">Handmade <span className="text-primary italic">Treasures</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Support local artisans with our curated selection of handmade jewelry, woven bags, and unique keepsakes. 
              Each item tells a story of Sri Lankan heritage and skilled craftsmanship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {artisanProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

        {/* Tropical Beachwear Section */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 text-primary uppercase tracking-widest text-sm font-bold mb-4">
              <ShoppingBag size={18} />
              <span>Tropical Beachwear</span>
            </div>
            <h2 className="text-4xl font-serif mb-4">Island <span className="text-primary italic">Style</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Embrace the sun with our vibrant collection of swimwear, sarongs, and beach essentials. 
              Bold prints and comfortable fabrics ensure you look and feel your best by the water.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {beachwearProducts.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
