import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, Wine, Coffee, UtensilsCrossed } from "lucide-react";

const menuData = {
  cocktails: {
    title: "Signature Cocktails",
    icon: Wine,
    items: [
      { name: "Ahangama Sunset", price: 12, description: "Arrack, passion fruit, lime, ginger, sunset hues" },
      { name: "Coconut Mojito", price: 10, description: "White rum, fresh coconut water, mint, lime" },
      { name: "Tropical Spritz", price: 11, description: "Prosecco, mango, elderflower, sparkling water" },
    ]
  },
  coffee: {
    title: "Specialty Coffee",
    icon: Coffee,
    items: [
      { name: "Tropical Espresso", price: 5, description: "Single-origin Sri Lankan beans, rich & smooth" },
      { name: "Iced Latte", price: 6, description: "Espresso over ice with your choice of milk" },
      { name: "Golden Turmeric Latte", price: 7, description: "Turmeric, ginger, coconut milk, honey" },
    ]
  },
  bites: {
    title: "Small Bites",
    icon: UtensilsCrossed,
    items: [
      { name: "Hot Butter Cuttlefish", price: 15, description: "Crispy fried cuttlefish, chili butter, spring onions" },
      { name: "Tropical Fruit Bowl", price: 8, description: "Papaya, mango, dragon fruit, passion fruit" },
      { name: "Bruschetta Trio", price: 12, description: "Tomato basil, avocado lime, coconut sambol" },
    ]
  }
};

export default function CafeMenuDialog() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-xs tracking-[0.2em] uppercase transition-all"
          data-testid="button-view-menu"
        >
          View Menu
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto p-0">
        <div className="sticky top-0 bg-primary text-primary-foreground p-6 z-10">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] opacity-80 mb-1">Lumière Beach Resort</p>
                <DialogTitle className="font-serif text-2xl md:text-3xl font-normal">Skyline Cafe</DialogTitle>
              </div>
              <button 
                onClick={() => setOpen(false)}
                className="p-2 hover:bg-white/20 rounded-full transition-colors"
                data-testid="button-close-menu"
              >
                <X size={20} />
              </button>
            </div>
          </DialogHeader>
        </div>
        
        <div className="p-6 space-y-8">
          {Object.entries(menuData).map(([key, category]) => (
            <div key={key} className="space-y-4">
              <div className="flex items-center gap-3 border-b border-border pb-3">
                <category.icon size={20} className="text-primary" />
                <h3 className="font-serif text-xl">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.items.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex justify-between items-start gap-4 py-2"
                    data-testid={`menu-item-${key}-${index}`}
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                    <div className="text-primary font-serif text-lg whitespace-nowrap">
                      ${item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="border-t border-border pt-6 text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              All prices in USD • Service charge not included
            </p>
          </div>
        </div>
        
        <div className="sticky bottom-0 bg-background border-t border-border p-4">
          <Button 
            onClick={() => setOpen(false)}
            variant="outline"
            className="w-full rounded-none py-4 uppercase tracking-widest text-xs"
            data-testid="button-back-to-rooftop"
          >
            Back to Rooftop
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
