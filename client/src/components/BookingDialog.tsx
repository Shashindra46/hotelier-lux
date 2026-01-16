import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface BookingDialogProps {
  roomType: string;
  price: number;
}

export default function BookingDialog({ roomType, price }: BookingDialogProps) {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: roomType,
    checkIn: "",
    checkOut: "",
    guests: 1,
    specialRequests: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit booking");

      toast({
        title: "Booking Request Received",
        description: "Thank you! We'll confirm your reservation shortly.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        roomType: roomType,
        checkIn: "",
        checkOut: "",
        guests: 1,
        specialRequests: "",
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: name === "guests" ? parseInt(value) || 1 : value }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          className="flex-1 bg-primary text-primary-foreground hover:bg-white hover:text-black rounded-none uppercase tracking-widest text-xs font-bold py-6"
          data-testid="button-book-room"
        >
          Book Now
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Book {roomType}</DialogTitle>
          <DialogDescription>
            ${price} per night. Fill out the form below to request a reservation.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              data-testid="input-booking-name"
            />
            <Input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              data-testid="input-booking-email"
            />
          </div>
          <Input
            name="phone"
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            data-testid="input-booking-phone"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Check-in</label>
              <Input
                name="checkIn"
                type="date"
                value={formData.checkIn}
                onChange={handleChange}
                required
                data-testid="input-booking-checkin"
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1 block">Check-out</label>
              <Input
                name="checkOut"
                type="date"
                value={formData.checkOut}
                onChange={handleChange}
                required
                data-testid="input-booking-checkout"
              />
            </div>
          </div>
          <Input
            name="guests"
            type="number"
            min="1"
            placeholder="Number of Guests"
            value={formData.guests}
            onChange={handleChange}
            required
            data-testid="input-booking-guests"
          />
          <Textarea
            name="specialRequests"
            placeholder="Special Requests (Optional)"
            value={formData.specialRequests}
            onChange={handleChange}
            className="min-h-[80px]"
            data-testid="input-booking-requests"
          />
          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-widest text-xs py-6"
            disabled={loading}
            data-testid="button-submit-booking"
          >
            {loading ? "Submitting..." : "Submit Booking Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
