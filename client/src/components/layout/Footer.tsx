import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10 border-t border-border font-sans">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-3xl font-serif font-bold text-primary tracking-widest uppercase mb-6">
            Lumière
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Where luxury meets tranquility. Experience the pinnacle of hospitality at Lumière.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-serif font-semibold mb-6 tracking-wide">Explore</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li><Link href="/rooms"><a className="hover:text-primary transition-colors">Accommodations</a></Link></li>
            <li><Link href="/dining"><a className="hover:text-primary transition-colors">Fine Dining</a></Link></li>
            <li><Link href="/events"><a className="hover:text-primary transition-colors">Events & Offers</a></Link></li>
            <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact Us</a></Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif font-semibold mb-6 tracking-wide">Contact</h3>
          <ul className="space-y-4 text-sm text-muted-foreground">
            <li>123 Luxury Ave, Beverly Hills, CA</li>
            <li>+1 (555) 123-4567</li>
            <li>concierge@lumierehotel.com</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-serif font-semibold mb-6 tracking-wide">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="p-2 border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 border border-border rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
        <p>&copy; 2026 Lumière Hotel. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-primary">Privacy Policy</a>
          <a href="#" className="hover:text-primary">Terms of Service</a>
          <Link href="/admin"><a className="hover:text-primary text-muted-foreground/50">Staff Login</a></Link>
        </div>
      </div>
    </footer>
  );
}
