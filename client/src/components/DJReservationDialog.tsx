import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Music } from "lucide-react";

const tableOptions = [
  { value: "Table for 2", label: "Table for 2", guests: 2 },
  { value: "Table for 4", label: "Table for 4", guests: 4 },
  { value: "VIP Lounge", label: "VIP Lounge (up to 8 guests)", guests: 8 },
];

export default function DJReservationDialog() {
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    activityType: "DJ Night",
    tableOption: "",
    eventDate: "",
    guests: 2,
    specialRequests: "",
  });

  const selectedTable = tableOptions.find(t => t.value === formData.tableOption);
  const coverCharge = formData.guests * 50;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/activity-bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to submit reservation");

      toast({
        title: "Reservation Confirmed",
        description: "Your table has been reserved. See you Saturday night!",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        activityType: "DJ Night",
        tableOption: "",
        eventDate: "",
        guests: 2,
        specialRequests: "",
      });
      setOpen(false);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to make reservation. Please try again.",
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
      [name]: name === "guests" ? parseInt(value) || 2 : value 
    }));
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-xs tracking-[0.2em] uppercase transition-all"
          data-testid="button-reserve-dj"
        >
          Reserve Your Spot
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-zinc-900 text-white border-zinc-800">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <Music className="text-primary" size={24} />
            <DialogTitle className="font-serif text-2xl text-white">Sunset DJ Sessions</DialogTitle>
          </div>
          <DialogDescription className="text-zinc-400">
            Reserve your table for an unforgettable Saturday night under the stars.
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-zinc-800/50 p-4 rounded-lg mb-4 border border-primary/30">
          <p className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Cover Charge</p>
          <p className="text-white text-lg">$50 minimum spend per person</p>
          <p className="text-zinc-500 text-xs mt-1">Applicable towards food & drinks</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
              data-testid="input-dj-name"
            />
            <Input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
              data-testid="input-dj-phone"
            />
          </div>
          
          <Input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500"
            data-testid="input-dj-email"
          />
          
          <Select 
            value={formData.tableOption} 
            onValueChange={(value) => {
              const table = tableOptions.find(t => t.value === value);
              setFormData(prev => ({ 
                ...prev, 
                tableOption: value,
                guests: table?.guests || 2
              }));
            }}
          >
            <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white" data-testid="select-table-option">
              <SelectValue placeholder="Select Table Option" />
            </SelectTrigger>
            <SelectContent className="bg-zinc-800 border-zinc-700">
              {tableOptions.map((option) => (
                <SelectItem 
                  key={option.value} 
                  value={option.value}
                  className="text-white hover:bg-zinc-700 focus:bg-zinc-700"
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-zinc-400 mb-1 block">Event Date (Saturday)</label>
              <Input
                name="eventDate"
                type="date"
                value={formData.eventDate}
                onChange={handleChange}
                required
                className="bg-zinc-800 border-zinc-700 text-white"
                data-testid="input-dj-date"
              />
            </div>
            <div>
              <label className="text-xs text-zinc-400 mb-1 block">Number of Guests</label>
              <Input
                name="guests"
                type="number"
                min="1"
                max={selectedTable?.guests || 8}
                value={formData.guests}
                onChange={handleChange}
                required
                className="bg-zinc-800 border-zinc-700 text-white"
                data-testid="input-dj-guests"
              />
            </div>
          </div>

          <Textarea
            name="specialRequests"
            placeholder="Special requests or celebration details (optional)"
            value={formData.specialRequests}
            onChange={handleChange}
            className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 min-h-[80px]"
            data-testid="input-dj-requests"
          />

          {formData.tableOption && (
            <div className="bg-primary/20 p-4 rounded-lg border border-primary/30">
              <div className="flex justify-between items-center">
                <span className="text-zinc-300 text-sm">Minimum Spend ({formData.guests} guests)</span>
                <span className="text-2xl font-serif text-primary">${coverCharge}</span>
              </div>
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none uppercase tracking-widest text-xs py-6"
            disabled={loading || !formData.tableOption}
            data-testid="button-submit-dj"
          >
            {loading ? "Reserving..." : "Confirm Reservation"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
