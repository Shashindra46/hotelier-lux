import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/Chatbot";
import Home from "@/pages/Home";
import Rooms from "@/pages/Rooms";
import Dining from "@/pages/Dining";
import Events from "@/pages/Events";
import Boutique from "@/pages/Boutique";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import Rooftop from "@/pages/Rooftop";

// Layout wrapper to conditionally hide Navbar/Footer for Admin
function Layout({ children }: { children: React.ReactNode }) {
  const [location] = window.location.pathname === "/admin" ? ["/admin"] : ["/"]; // Simplified check for prototype
  
  // Actually, let's use the wouter hook inside the component
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarWrapper />
      <main className="flex-grow">
        {children}
      </main>
      <FooterWrapper />
      <ChatbotWrapper />
    </div>
  );
}

// Helper components to hide elements on Admin page
const NavbarWrapper = () => {
  return window.location.pathname.startsWith("/admin") ? null : <Navbar />;
};

const FooterWrapper = () => {
  return window.location.pathname.startsWith("/admin") ? null : <Footer />;
};

const ChatbotWrapper = () => {
  return window.location.pathname.startsWith("/admin") ? null : <Chatbot />;
};


function Router() {
  return (
    <Switch>
      <Route path="/admin" component={Admin} />
      
      {/* Public Routes with Layout */}
      <Route path="/">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
             <Home />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Route>

       <Route path="/rooms">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
             <Rooms />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Route>

      <Route path="/dining">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
             <Dining />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Route>

      <Route path="/rooftop">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
             <Rooftop />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Route>

       <Route path="/events">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
             <Events />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Route>

      <Route path="/boutique">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
             <Boutique />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Route>

       <Route path="/contact">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
             <Contact />
          </main>
          <Footer />
          <Chatbot />
        </div>
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
