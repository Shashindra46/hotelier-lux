import { useState } from "react";
import { Lock, Eye, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useQuery } from "@tanstack/react-query";
import type { Inquiry, Booking } from "@shared/schema";

async function fetchInquiries(): Promise<Inquiry[]> {
  const response = await fetch("/api/inquiries");
  if (!response.ok) throw new Error("Failed to fetch inquiries");
  return response.json();
}

async function fetchBookings(): Promise<Booking[]> {
  const response = await fetch("/api/bookings");
  if (!response.ok) throw new Error("Failed to fetch bookings");
  return response.json();
}

function AdminLogin({ onLogin }: { onLogin: () => void }) {
  const [password, setPassword] = useState("");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      onLogin();
      toast({ title: "Welcome back", description: "Logged in as Administrator" });
    } else {
      toast({ title: "Access Denied", description: "Incorrect password", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md border-border bg-card">
        <CardHeader>
          <CardTitle className="text-center font-serif text-2xl">Admin Portal</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                type="password" 
                placeholder="Enter password (admin123)" 
                className="pl-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                data-testid="input-admin-password"
              />
            </div>
            <Button 
              type="submit" 
              className="w-full bg-primary text-primary-foreground"
              data-testid="button-admin-login"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const { data: inquiries = [], isLoading: loadingInquiries } = useQuery({
    queryKey: ["inquiries"],
    queryFn: fetchInquiries,
    enabled: isAuthenticated,
  });

  const { data: bookings = [], isLoading: loadingBookings } = useQuery({
    queryKey: ["bookings"],
    queryFn: fetchBookings,
    enabled: isAuthenticated,
  });

  if (!isAuthenticated) return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 px-6 pb-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-serif">Admin Dashboard</h1>
          <Button variant="outline" onClick={() => setIsAuthenticated(false)}>Logout</Button>
        </div>

        <Tabs defaultValue="inquiries" className="space-y-8">
          <TabsList className="bg-secondary">
            <TabsTrigger value="inquiries">Contact Inquiries</TabsTrigger>
            <TabsTrigger value="bookings">Room Bookings</TabsTrigger>
          </TabsList>

          <TabsContent value="inquiries">
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Contact Inquiries</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {inquiries.length} total
                </div>
              </CardHeader>
              <CardContent>
                {loadingInquiries ? (
                  <p className="text-center text-muted-foreground py-8">Loading...</p>
                ) : inquiries.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">No inquiries yet</p>
                ) : (
                  <div className="space-y-4">
                    {inquiries.map(inquiry => (
                      <div 
                        key={inquiry.id} 
                        className="p-6 border border-border rounded-lg bg-secondary/20"
                        data-testid={`inquiry-${inquiry.id}`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-bold text-lg" data-testid="text-inquiry-name">{inquiry.name}</h3>
                            <p className="text-sm text-muted-foreground" data-testid="text-inquiry-email">{inquiry.email}</p>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {new Date(inquiry.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-primary">{inquiry.subject}</p>
                          <p className="text-sm text-muted-foreground">{inquiry.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="bookings">
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Room Bookings</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {bookings.length} total
                </div>
              </CardHeader>
              <CardContent>
                {loadingBookings ? (
                  <p className="text-center text-muted-foreground py-8">Loading...</p>
                ) : bookings.length === 0 ? (
                  <p className="text-center text-muted-foreground py-8">No bookings yet</p>
                ) : (
                  <div className="space-y-4">
                    {bookings.map(booking => (
                      <div 
                        key={booking.id} 
                        className="p-6 border border-border rounded-lg bg-secondary/20"
                        data-testid={`booking-${booking.id}`}
                      >
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h3 className="font-bold text-lg" data-testid="text-booking-name">{booking.name}</h3>
                            <p className="text-sm text-muted-foreground" data-testid="text-booking-email">{booking.email}</p>
                            <p className="text-sm text-muted-foreground" data-testid="text-booking-phone">{booking.phone}</p>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            {new Date(booking.createdAt).toLocaleDateString()}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-muted-foreground">Room:</span>
                            <span className="ml-2 font-semibold">{booking.roomType}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Guests:</span>
                            <span className="ml-2 font-semibold">{booking.guests}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Check-in:</span>
                            <span className="ml-2 font-semibold">{booking.checkIn}</span>
                          </div>
                          <div>
                            <span className="text-muted-foreground">Check-out:</span>
                            <span className="ml-2 font-semibold">{booking.checkOut}</span>
                          </div>
                        </div>
                        {booking.specialRequests && (
                          <div className="mt-3 pt-3 border-t border-border">
                            <p className="text-xs text-muted-foreground mb-1">Special Requests:</p>
                            <p className="text-sm">{booking.specialRequests}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
}
