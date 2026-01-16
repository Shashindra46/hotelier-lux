import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const sessionTypes = [
  { value: "Sunrise Flow (6:30 AM)", label: "Sunrise Flow (6:30 AM)", price: 25, type: "group" },
  { value: "Sunset Yin (5:30 PM)", label: "Sunset Yin (5:30 PM)", price: 25, type: "group" },
  { value: "Private Meditation", label: "Private Meditation Session", price: 60, type: "private" },
];

export default function SessionBookingDialog() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sessionType: "",
    sessionDate: "",
    participants: 1,
  });

  const selectedSession = sessionTypes.find(s => s.value === formData.sessionType);
  const totalPrice = selectedSession 
    ? selectedSession.type === "private" 
      ? selectedSession.price 
      : selectedSession.price * formData.participants
    : 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/session-bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit booking");

      toast({
        title: "Session Booked",
        description: "Your yoga session has been reserved. We'll send confirmation to your email.",
      });
      setFormData({
        name: "",
        email: "",
        sessionType: "",
        sessionDate: "",
        participants: 1,
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to book session. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: name === "participants" ? parseInt(value) || 1 : value 
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-8 py-6 text-xs tracking-[0.2em] uppercase transition-all"
          data-testid="button-book-session"
        >
          Book a Session
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Book a Yoga Session</DialogTitle>
          <DialogDescription>
            Reserve your spot for a transformative wellness experience on our rooftop sanctuary.
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-secondary/30 p-4 rounded-lg mb-4 text-sm">
          <p className="font-semibold mb-2">Pricing</p>
          <div className="flex justify-between text-muted-foreground">
            <span>Group Sessions (Sunrise/Sunset)</span>
            <span className="font-semibold text-foreground">$25 / person</span>
          </div>
          <div className="flex justify-between text-muted-foreground mt-1">
            <span>Private Meditation</span>
            <span className="font-semibold text-foreground">$60 / session</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            data-testid="input-session-name"
          />
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            data-testid="input-session-email"
          />
          
          <Select 
            value={formData.sessionType} 
            onValueChange={(value) => setFormData(prev => ({ ...prev, sessionType: value }))}
          >
            <SelectTrigger data-testid="select-session-type">
              <SelectValue placeholder="Select Session Type" />
            </SelectTrigger>
            <SelectContent>
              {sessionTypes.map((session) => (
                <SelectItem key={session.value} value={session.value}>
                  {session.label} - ${session.price}{session.type === "group" ? "/person" : ""}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div>
            <label className="text-xs text-muted-foreground mb-1 block">Session Date</label>
            <Input
              name="sessionDate"
              type="date"
              value={formData.sessionDate}
              onChange={handleChange}
              required
              data-testid="input-session-date"
            />
          </div>

          {selectedSession?.type === "group" && (
            <Input
              name="participants"
              type="number"
              min="1"
              max="10"
              placeholder="Number of Participants"
              value={formData.participants}
              onChange={handleChange}
              required
              data-testid="input-session-participants"
            />
          )}

          {formData.sessionType && (
            <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Estimated Total</span>
                <span className="text-2xl font-serif text-primary">${totalPrice}</span>
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-widest text-xs py-6"
            disabled={loading || !formData.sessionType}
            data-testid="button-submit-session"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
