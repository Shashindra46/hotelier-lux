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
    title: "Surfing Lessons",
    date: "Daily, 7:00 AM & 4:00 PM",
    description: "Learn to surf with professional instructors at Kabalana Beach, known for its perfect waves.",
    image: "surfing_kabalana_beach" 
  },
  {
    id: 2,
    title: "Sunset Beach BBQ",
    date: "Saturdays, 6:00 PM",
    description: "Fresh seafood BBQ on the beach with live acoustic music and bonfires.",
    image: "sunset_beach_bar"
  },
  {
    id: 3,
    title: "Whale Watching Expedition",
    date: "Wednesdays, 6:00 AM",
    description: "Boat trip to see Blue Whales and Dolphins off the coast of Mirissa.",
    image: "majestic_blue_whale_fluke_high_quality"
  },
  {
    id: 4,
    title: "Turtle Hatchery Visit",
    date: "Mondays, 10:00 AM",
    description: "Visit the local conservation center and help release baby turtles into the ocean.",
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
