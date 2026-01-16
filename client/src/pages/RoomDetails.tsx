import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { rooms } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import BookingDialog from "@/components/BookingDialog";
import { Wifi, Wind, Wine, User, Droplets, ArrowLeft, Check } from "lucide-react";

import bedroomImage from "@assets/generated_images/villa_master_bedroom_interior.png";
import bathroomImage from "@assets/generated_images/villa_bathroom_with_bathtub.png";
import poolImage from "@assets/generated_images/villa_private_pool_terrace.png";
import livingImage from "@assets/generated_images/villa_living_room_interior.png";
import heroImage from "@assets/generated_images/beachfront_villa_plunge_pool.png";

const galleryImages = [
  { src: heroImage, alt: "Villa Exterior" },
  { src: bedroomImage, alt: "Master Bedroom" },
  { src: bathroomImage, alt: "Luxury Bathroom" },
  { src: poolImage, alt: "Private Pool" },
  { src: livingImage, alt: "Living Area" },
];

const amenityIcons: Record<string, typeof Wifi> = {
  "Wifi": Wifi,
  "Mini Bar": Wine,
  "Butler Service": User,
  "Private Butler": User,
  "Outdoor Rain Shower": Droplets,
  "AC": Wind,
};

const allAmenities = [
  { name: "High-Speed Wi-Fi", icon: Wifi },
  { name: "Climate Control AC", icon: Wind },
  { name: "Premium Mini-Bar", icon: Wine },
  { name: "Private Butler", icon: User },
  { name: "Outdoor Rain Shower", icon: Droplets },
];

const roomDescriptions: Record<number, string> = {
  1: "Experience unparalleled luxury in our Royal Ocean Villa, a 1,500 sq ft beachfront sanctuary where the Indian Ocean greets you each morning. Step directly from your private terrace onto the pristine sands of Kabalana Beach. Your personal plunge pool offers a serene retreat, while the outdoor rain shower under the stars creates unforgettable moments. With dedicated butler service attending to your every need, handcrafted furnishings, and panoramic ocean views from every room, this villa represents the pinnacle of tropical indulgence.",
  2: "The Ocean View Suite captures the essence of coastal elegance across 900 sq ft of thoughtfully designed space. Wake to breathtaking views of the Indian Ocean from your private balcony, where dolphins often play in the morning light. The suite features a luxurious Jacuzzi, a king-size bed dressed in the finest Egyptian cotton, and a curated mini-bar with local and international selections. Floor-to-ceiling windows frame nature's ever-changing canvas, making this suite perfect for couples seeking romance and tranquility.",
  3: "Nestled within our lush tropical gardens, the Garden Cabana offers an intimate 600 sq ft retreat surrounded by nature's symphony. Your private terrace opens to swaying palms and exotic flowers, with a hammock inviting lazy afternoon naps. The space blends indoor-outdoor living seamlessly, with natural materials and artisanal touches throughout. Wake to birdsong, enjoy your morning coffee in the garden, and let the gentle tropical breeze carry your cares away.",
};

export default function RoomDetails() {
  const params = useParams();
  const roomId = parseInt(params.id || "1");
  const room = rooms.find(r => r.id === roomId);

  if (!room) {
    return (
      <div className="pt-24 min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif mb-4">Room Not Found</h1>
          <Link href="/rooms">
            <Button variant="outline">Back to Villas</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-background text-foreground pb-20">
      <div className="container mx-auto px-6">
        
        <Link href="/rooms">
          <span className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer mb-8 text-sm uppercase tracking-widest">
            <ArrowLeft size={16} />
            Back to Villas
          </span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <span className="text-primary uppercase tracking-widest text-sm font-bold">{room.category}</span>
              <h1 className="text-4xl md:text-6xl font-serif mt-2">{room.name}</h1>
              <p className="text-muted-foreground mt-2">{room.floor} • {room.view} • {room.size}</p>
            </div>
            <div className="text-right">
              <p className="text-4xl font-serif">${room.price}</p>
              <p className="text-muted-foreground text-sm">per night</p>
            </div>
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          <div className="col-span-2 row-span-2">
            <img 
              src={galleryImages[0].src} 
              alt={galleryImages[0].alt}
              className="w-full h-full object-cover min-h-[300px] md:min-h-[500px]"
            />
          </div>
          {galleryImages.slice(1).map((img, index) => (
            <div key={index} className="aspect-square overflow-hidden">
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-serif mb-6">About This Villa</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {roomDescriptions[room.id] || `Experience luxury in our beautiful ${room.name}, featuring ${room.amenities.join(", ")}.`}
              </p>
            </div>

            {/* Amenities List */}
            <div>
              <h2 className="text-2xl font-serif mb-6">Villa Amenities</h2>
              <div className="grid grid-cols-2 gap-4">
                {room.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-secondary/30 border border-border">
                    <Check size={18} className="text-primary" />
                    <span className="text-sm">{amenity}</span>
                  </div>
                ))}
                {allAmenities.map((amenity, i) => (
                  <div key={`extra-${i}`} className="flex items-center gap-3 p-4 bg-secondary/30 border border-border">
                    <amenity.icon size={18} className="text-primary" />
                    <span className="text-sm">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-32 bg-card border border-border p-8 shadow-lg">
              <div className="text-center mb-6">
                <p className="text-4xl font-serif">${room.price}</p>
                <p className="text-muted-foreground text-sm">per night</p>
              </div>
              
              <div className="space-y-4 mb-6 text-sm">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Room Type</span>
                  <span className="font-semibold">{room.category}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Size</span>
                  <span className="font-semibold">{room.size}</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">View</span>
                  <span className="font-semibold">{room.view}</span>
                </div>
              </div>

              <BookingDialog roomType={room.name} price={room.price} />
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                Free cancellation up to 48 hours before check-in
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
