import { Calendar, CheckCircle, MapPin, Music, Utensils, Wifi, Star } from "lucide-react";

export const rooms = [
  {
    id: 1,
    name: "Royal Ocean Suite",
    category: "Luxury",
    floor: "Top Floor (25th)",
    price: 1200,
    view: "Panoramic Ocean View",
    size: "1200 sq ft",
    amenities: ["Private Jacuzzi", "Butler Service", "King Size Bed", "Lounge Area"],
    image: "luxury_ocean_view_suite" // Maps to generated image
  },
  {
    id: 2,
    name: "Prestige Garden Suite",
    category: "Deluxe",
    floor: "Floors 15-20",
    price: 800,
    view: "Botanical Garden View",
    size: "850 sq ft",
    amenities: ["Balcony", "Rain Shower", "King Size Bed", "Mini Bar"],
    image: "luxury_ocean_view_suite" // Reusing for now, normally would generate unique
  },
  {
    id: 3,
    name: "Executive Room",
    category: "Standard",
    floor: "Floors 5-14",
    price: 450,
    view: "City Skyline",
    size: "500 sq ft",
    amenities: ["Work Desk", "High-speed Wifi", "Queen Bed", "Smart TV"],
    image: "luxury_ocean_view_suite" // Reusing
  }
];

export const menu = {
  breakfast: [
    { name: "Truffle Eggs Benedict", price: 35, description: "Poached eggs, black truffle hollandaise, brioche" },
    { name: "Acai Royal Bowl", price: 28, description: "Organic berries, manuka honey, house granola" },
    { name: "Smoked Salmon Platter", price: 42, description: "Scottish salmon, capers, cream cheese, bagel" }
  ],
  lunch: [
    { name: "Lobster Bisque", price: 45, description: "Cognac cream, chives, brioche croutons" },
    { name: "Wagyu Burger", price: 55, description: "A5 Wagyu patty, gruyere, caramelized onions" },
    { name: "Mediterranean Salad", price: 32, description: "Feta, olives, heirloom tomatoes, balsamic glaze" }
  ],
  dinner: [
    { name: "Pan-Seared Scallops", price: 65, description: "Cauliflower purée, caviar, lemon butter" },
    { name: "Filet Mignon", price: 95, description: "8oz prime beef, truffle mash, red wine reduction" },
    { name: "Miso Glazed Black Cod", price: 85, description: "Sustainable cod, sweet miso, bok choy" }
  ]
};

export const events = [
  {
    id: 1,
    title: "Jazz Night Under the Stars",
    date: "Every Friday, 8:00 PM",
    description: "Live jazz band performance at the Sky Lounge.",
    image: "fine_dining_restaurant" 
  },
  {
    id: 2,
    title: "Sunset Pool Party",
    date: "Saturdays, 4:00 PM",
    description: "DJ sets, cocktails, and sunset views at the Infinity Pool.",
    image: "infinity_pool_sunset"
  },
  {
    id: 3,
    title: "Chef's Table Experience",
    date: "Monthly, 1st Sunday",
    description: "Exclusive 7-course tasting menu with wine pairing.",
    image: "fine_dining_restaurant"
  }
];

export const reviews = [
  {
    id: 1,
    user: "Eleanor Vance",
    rating: 5,
    comment: "An absolute dream. The attention to detail is unmatched.",
    date: "Oct 2025"
  },
  {
    id: 2,
    user: "Arthur Blackwood",
    rating: 5,
    comment: "The dining experience was exquisite. Highly recommend the Wagyu.",
    date: "Nov 2025"
  },
  {
    id: 3,
    user: "Sarah Jenkins",
    rating: 4,
    comment: "Beautiful views, though room service was slightly slow during peak hours.",
    date: "Dec 2025"
  }
];
