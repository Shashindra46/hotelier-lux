import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface BoutiqueInquiryDialogProps {
  productName: string;
  productPrice: number;
}

export default function BoutiqueInquiryDialog({ productName, productPrice }: BoutiqueInquiryDialogProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    product: productName,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/boutique-inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, product: productName }),
      });

      if (!response.ok) throw new Error("Failed to submit inquiry");

      toast({
        title: "Inquiry Sent",
        description: `Thank you for your interest in ${productName}. We'll get back to you soon.`,
      });
      setFormData({
        name: "",
        email: "",
        product: productName,
        message: "",
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline"
          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none uppercase tracking-widest text-xs py-5"
          data-testid={`button-inquire-${productName.toLowerCase().replace(/\s+/g, '-')}`}
        >
          Inquire Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Product Inquiry</DialogTitle>
          <DialogDescription>
            Interested in this item? Send us a message and we'll get back to you.
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-secondary/30 p-4 rounded-lg mb-4 flex justify-between items-center">
          <div>
            <p className="font-semibold">{productName}</p>
            <p className="text-sm text-muted-foreground">Lumière Boutique Collection</p>
          </div>
          <span className="text-2xl font-serif text-primary">${productPrice}</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            data-testid="input-boutique-name"
          />
          
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            data-testid="input-boutique-email"
          />

          <Textarea
            name="message"
            placeholder="Your message (size preferences, questions, etc.)"
            value={formData.message}
            onChange={handleChange}
            required
            className="min-h-[100px]"
            data-testid="input-boutique-message"
          />

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-widest text-xs py-6"
            disabled={loading}
            data-testid="button-submit-boutique"
          >
            {loading ? "Sending..." : "Send Inquiry"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
