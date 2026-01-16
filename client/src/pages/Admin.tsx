import { useState } from "react";
import { Lock, Plus, Trash, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { rooms, menu, events } from "@/lib/mockData";

// Login Component
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
              />
            </div>
            <Button type="submit" className="w-full bg-primary text-primary-foreground">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

// Dashboard Component
export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  // Mock State for "Editing"
  const [localRooms] = useState(rooms);
  const [localMenu] = useState(menu);

  if (!isAuthenticated) return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 px-6 pb-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-serif">Admin Dashboard</h1>
          <Button variant="outline" onClick={() => setIsAuthenticated(false)}>Logout</Button>
        </div>

        <Tabs defaultValue="rooms" className="space-y-8">
          <TabsList className="bg-secondary">
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="menu">Menu</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          {/* Rooms Management */}
          <TabsContent value="rooms">
            <Card className="bg-card border-border">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Room Management</CardTitle>
                <Button size="sm" className="bg-primary text-primary-foreground"><Plus size={16} className="mr-2"/> Add Room</Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {localRooms.map(room => (
                    <div key={room.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div>
                        <h3 className="font-bold">{room.name}</h3>
                        <p className="text-sm text-muted-foreground">{room.category} • ${room.price}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost"><Edit size={16}/></Button>
                        <Button size="icon" variant="ghost" className="text-destructive"><Trash size={16}/></Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Menu Management */}
          <TabsContent value="menu">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle>Restaurant Menu</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {Object.entries(localMenu).map(([category, items]) => (
                    <div key={category} className="space-y-4">
                      <h3 className="uppercase font-bold text-primary tracking-widest">{category}</h3>
                      {items.map((item, i) => (
                        <div key={i} className="p-3 border border-border rounded bg-secondary/20">
                           <div className="flex justify-between font-bold text-sm">
                             <span>{item.name}</span>
                             <span>${item.price}</span>
                           </div>
                           <p className="text-xs text-muted-foreground mt-1 truncate">{item.description}</p>
                        </div>
                      ))}
                      <Button variant="outline" size="sm" className="w-full">Add Item</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* Events Management */}
          <TabsContent value="events">
             <Card className="bg-card border-border">
               <CardHeader className="flex flex-row items-center justify-between">
                 <CardTitle>Upcoming Events</CardTitle>
                 <Button size="sm" className="bg-primary text-primary-foreground"><Plus size={16} className="mr-2"/> Add Event</Button>
               </CardHeader>
               <CardContent>
                 <div className="space-y-4">
                    {events.map(event => (
                      <div key={event.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                        <div>
                          <h3 className="font-bold">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.date}</p>
                        </div>
                         <div className="flex gap-2">
                          <Button size="icon" variant="ghost"><Edit size={16}/></Button>
                          <Button size="icon" variant="ghost" className="text-destructive"><Trash size={16}/></Button>
                        </div>
                      </div>
                    ))}
                 </div>
               </CardContent>
             </Card>
          </TabsContent>

        </Tabs>
      </div>
    </div>
  );
}
