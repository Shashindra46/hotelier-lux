import { Calendar, CheckCircle, MapPin, Music, Utensils, Wifi, Star } from "lucide-react";

export const rooms = [
  {
    id: 1,
    name: "Royal Ocean Villa",
    category: "Luxury",
    floor: "Beachfront",
    price: 1500,
    view: "Panoramic Ocean View",
    size: "1500 sq ft",
    amenities: ["Private Plunge Pool", "Direct Beach Access", "Butler Service", "Outdoor Rain Shower"],
    image: "beachfront_villa_plunge_pool"
  },
  {
    id: 2,
    name: "Ocean View Suite",
    category: "Deluxe",
    floor: "Floors 2-3",
    price: 950,
    view: "Indian Ocean View",
    size: "900 sq ft",
    amenities: ["Ocean View Balcony", "Jacuzzi", "King Size Bed", "Mini Bar"],
    image: "luxury_ocean_view_suite" 
  },
  {
    id: 3,
    name: "Garden Cabana",
    category: "Standard",
    floor: "Ground Floor",
    price: 550,
    view: "Tropical Garden",
    size: "600 sq ft",
    amenities: ["Private Terrace", "Hammock", "Queen Bed", "Wifi"],
    image: "luxury_ocean_view_suite" 
  }
];

export const menu = {
  breakfast: [
    { name: "Pink Dragon Bowl", price: 15, description: "Dragon fruit, banana, coconut milk, granola" },
    { name: "Mango Magic Bowl", price: 15, description: "Fresh mango, passion fruit, yogurt, chia seeds" },
    { name: "Avocado on Sourdough", price: 18, description: "Poached eggs, chili flakes, feta, lime" },
    { name: "Eggs Benedict", price: 22, description: "Smoked salmon or bacon, hollandaise, english muffin" },
    { name: "Fluffy Pancakes", price: 16, description: "Maple syrup, fresh berries, whipped cream" },
    { name: "Barista Coffee", price: 5, description: "Cappuccino, Latte, Flat White (Oat/Almond milk available)" }
  ],
  lunch: [
    { name: "Sri Lankan Rice & Curry", price: 25, description: "Choice of Chicken, Fish, or Prawns with 5 veg curries" },
    { name: "Tuna Poke Bowl", price: 24, description: "Fresh yellowfin tuna, edamame, avocado, sushi rice" },
    { name: "Gourmet Beef Burger", price: 22, description: "Australian beef patty, cheddar, caramelized onions, fries" },
    { name: "Fish Tacos", price: 18, description: "Grilled mahi-mahi, slaw, spicy mayo, lime" },
    { name: "Quinoa Salad Bowl", price: 18, description: "Roasted pumpkin, feta, pomegranate, balsamic dressing" }
  ],
  dinner: [
    { name: "Hot Butter Cuttlefish", price: 18, description: "Crispy fried cuttlefish, chili butter, spring onions (Must Try!)", highlighted: true },
    { name: "Sesame Seared Tuna", price: 28, description: "Wasabi mash, bok choy, soy ginger glaze" },
    { name: "Garlic Butter Prawns", price: 32, description: "Jumbo prawns, lemon butter, parsley, crusty bread" },
    { name: "Seafood Linguine", price: 26, description: "Prawns, calamari, clams, cherry tomatoes, white wine" },
    { name: "Grilled Pork Chop", price: 28, description: "Creamy mashed potatoes, apple sauce, green beans" }
  ],
  drinks_desserts: [
    { name: "Passionfruit Mojito", price: 12, description: "White rum, fresh passion fruit, mint, soda" },
    { name: "Arrack Sour", price: 12, description: "Ceylon Arrack, lime, ginger, egg white" },
    { name: "Chocolate Brownie", price: 10, description: "Warm brownie with vanilla ice cream" },
    { name: "Coconut Panna Cotta", price: 10, description: "Passion fruit coulis, toasted coconut" },
    { name: "King Coconut", price: 4, description: "Freshly chilled thambili" }
  ]
};

export const events = [
  {
    id: 1,
    title: "Surfing at Kabalana Beach",
    date: "Daily, 7:00 AM & 4:00 PM",
    description: "Kabalana is world-famous for its incredible surf breaks. Whether you're a beginner catching your first wave or an expert seeking thrills, we provide high-quality surfboard facilities for all skill levels. Our experienced instructors offer personalized lessons, and premium board rentals are included for all guests.",
    price: 20,
    image: "surfer_riding_tropical_wave" 
  },
  {
    id: 2,
    title: "Sunset Beach BBQ",
    date: "Saturdays, 6:00 PM",
    description: "Join us for an unforgettable beachfront dining experience featuring a variety of specialized local fish caught fresh daily by our partner fishermen. Savor grilled lobster, jumbo prawns, and the day's catch while enjoying live acoustic music and bonfires under the stars.",
    price: 30,
    image: "sunset_beach_bar"
  },
  {
    id: 3,
    title: "Whale Watching Expedition",
    date: "Wednesdays, 6:00 AM",
    description: "Embark on a majestic journey to witness Blue Whales and Dolphins in their natural habitat. We provide complimentary transport to Mirissa Harbor, where you'll board our own private luxury ship equipped with comfortable seating, refreshments, and expert marine guides for an exclusive oceanic adventure.",
    price: 150,
    image: "majestic_blue_whale_fluke_high_quality"
  },
  {
    id: 4,
    title: "Turtle Hatchery Visit",
    date: "Mondays, 10:00 AM",
    description: "Visit the local conservation center and experience a truly magical moment as you personally release baby turtles into the ocean. Learn about sea turtle conservation efforts in Sri Lanka and witness these gentle creatures begin their incredible journey to the sea.",
    price: 45,
    image: "baby_sea_turtles_on_sand"
  }
];

export const reviews = [
  {
    id: 1,
    user: "Sophie Miller",
    rating: 5,
    comment: "The most beautiful beach resort I've ever stayed at. The plunge pool was heavenly.",
    date: "Jan 2026"
  },
  {
    id: 2,
    user: "James Chen",
    rating: 5,
    comment: "Surfing at Kabalana is world-class. The hotel staff organized everything perfectly.",
    date: "Dec 2025"
  },
  {
    id: 3,
    user: "Emma Thompson",
    rating: 4,
    comment: "Stunning sunsets from the beach bar. A truly magical tropical getaway.",
    date: "Nov 2025"
  }
];
