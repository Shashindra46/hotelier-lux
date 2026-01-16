import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, DollarSign } from "lucide-react";

interface ExperienceBookingDialogProps {
  experience: {
    id: number;
    title: string;
    date: string;
    description: string;
    price: number;
  };
}

const experienceDetails: Record<number, string[]> = {
  1: [
    "High-quality surfboards for all skill levels",
    "Professional instruction available",
    "Equipment & wetsuit included",
    "2-hour session duration"
  ],
  2: [
    "Fresh local fish caught daily",
    "Live acoustic music & bonfire",
    "Premium beverages included",
    "Beachfront seating"
  ],
  3: [
    "Transport to Mirissa Harbor included",
    "Private luxury ship experience",
    "Refreshments & snacks provided",
    "Expert marine guides"
  ],
  4: [
    "Personal baby turtle release",
    "Conservation center tour",
    "Educational presentation",
    "Photo opportunities"
  ]
};

export default function ExperienceBookingDialog({ experience }: ExperienceBookingDialogProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    activityType: experience.title,
    tableOption: "Standard",
    eventDate: "",
    guests: 1,
    specialRequests: "",
  });

  const totalPrice = experience.price * formData.guests;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/activity-bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit booking");

      toast({
        title: "Experience Reserved",
        description: `Your ${experience.title} has been booked. We'll send confirmation to your email.`,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        activityType: experience.title,
        tableOption: "Standard",
        eventDate: "",
        guests: 1,
        specialRequests: "",
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to book experience. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === "guests" ? parseInt(value) || 1 : value 
    }));
  };

  const details = experienceDetails[experience.id] || [];

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button 
          className="text-primary hover:text-[#d4af37] border-b border-primary hover:border-[#d4af37] pb-1 uppercase text-xs font-bold tracking-widest transition-colors"
          data-testid={`button-reserve-experience-${experience.id}`}
        >
          Reserve Experience
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{experience.title}</DialogTitle>
          <DialogDescription>
            Reserve your spot for this unforgettable experience.
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-secondary/30 p-4 rounded-lg mb-4">
          <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-primary" />
              <span>{experience.date.split(",")[0]}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary" />
              <span>{experience.date.split(",")[1]}</span>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">{experience.description}</p>
          <div className="grid grid-cols-2 gap-2">
            {details.map((detail, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                {detail}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between bg-primary/10 p-3 rounded-lg border border-primary/20 mb-4">
          <div className="flex items-center gap-2">
            <DollarSign size={18} className="text-primary" />
            <span className="text-sm font-semibold">Price per person</span>
          </div>
          <span className="text-xl font-serif text-primary">${experience.price}</span>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              data-testid="input-experience-name"
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              data-testid="input-experience-phone"
            />
          </div>
          
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            data-testid="input-experience-email"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Preferred Date</label>
              <Input
                name="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={handleChange}
                required
                data-testid="input-experience-date"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Number of Guests</label>
              <Input
                name="guests"
                type="number"
                min="1"
                max="20"
                value={formData.guests}
                onChange={handleChange}
                required
                data-testid="input-experience-guests"
              />
            </div>
          </div>

          <Textarea
            name="specialRequests"
            placeholder="Special requests or dietary requirements (optional)"
            value={formData.specialRequests}
            onChange={handleChange}
            className="min-h-[80px]"
            data-testid="input-experience-requests"
          />

          <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Total ({formData.guests} guest{formData.guests > 1 ? 's' : ''})</span>
              <span className="text-2xl font-serif text-primary">${totalPrice}</span>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-widest text-xs py-6"
            disabled={loading}
            data-testid="button-submit-experience"
          >
            {loading ? "Reserving..." : "Confirm Reservation"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
