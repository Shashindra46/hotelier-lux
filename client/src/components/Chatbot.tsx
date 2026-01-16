import { useState } from "react";
import { MessageSquare, Send, X, Bot } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Welcome to Lumière. I am your personal concierge. How may I assist you today?" }
  ]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    // Mock AI response
    setTimeout(() => {
      let response = "I'm sorry, I didn't catch that. Could you please rephrase?";
      const lower = userMsg.toLowerCase();
      
      if (lower.includes("room") || lower.includes("book")) {
        response = "We have Luxury, Deluxe, and Standard rooms available. Would you like to check availability for specific dates?";
      } else if (lower.includes("menu") || lower.includes("food") || lower.includes("restaurant")) {
        response = "Our restaurant serves Breakfast, Lunch, and Dinner. You can view the full menu on our Dining page.";
      } else if (lower.includes("event") || lower.includes("party")) {
        response = "We have a Jazz Night every Friday and a Pool Party on Saturdays. Would you like to reserve a spot?";
      } else if (lower.includes("location") || lower.includes("where")) {
        response = "We are located at 123 Luxury Ave, Beverly Hills, CA. We look forward to welcoming you.";
      }

      setMessages(prev => [...prev, { role: "bot", text: response }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground p-4 rounded-full shadow-lg hover:bg-primary/90 transition-all"
          >
            <MessageSquare size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 right-6 z-50 w-80 md:w-96 bg-card border border-border rounded-lg shadow-2xl overflow-hidden flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-primary p-4 flex justify-between items-center text-primary-foreground">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-serif font-bold">Lumière Concierge</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:text-primary-foreground/80">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4 bg-background/50">
              <div className="flex flex-col gap-3">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`max-w-[80%] p-3 rounded-lg text-sm ${
                      msg.role === "user"
                        ? "bg-primary text-primary-foreground self-end rounded-br-none"
                        : "bg-secondary text-secondary-foreground self-start rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                {loading && (
                  <div className="bg-secondary text-secondary-foreground self-start rounded-bl-none p-3 rounded-lg text-sm">
                    <span className="animate-pulse">Thinking...</span>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 bg-card border-t border-border flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about rooms, dining..."
                className="bg-background border-border focus:ring-primary"
              />
              <Button onClick={handleSend} size="icon" className="shrink-0 bg-primary hover:bg-primary/90">
                <Send size={18} />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
