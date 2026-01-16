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
    { name: "Sri Lankan Hopper Feast", price: 25, description: "Egg hoppers, string hoppers, dhal, coconut sambol" },
    { name: "Tropical Fruit Platter", price: 20, description: "Fresh mango, papaya, pineapple, passion fruit, curd & treacle" },
    { name: "Avocado Toast", price: 28, description: "Poached eggs, sourdough, chili flakes, lime" }
  ],
  lunch: [
    { name: "Fresh Catch of the Day", price: 45, description: "Grilled yellowfin tuna, garlic butter, salad" },
    { name: "Prawn Curry", price: 35, description: "Traditional Sri Lankan spices, coconut milk, basmati rice" },
    { name: "Lobster Roll", price: 42, description: "Brioche bun, celery, lemon mayo, fries" }
  ],
  dinner: [
    { name: "Seafood Platter for Two", price: 120, description: "Lobster, jumbo prawns, calamari, crab, lemon butter sauce" },
    { name: "Black Pork Curry", price: 38, description: "Slow-cooked pork, roasted spices, goraka" },
    { name: "Grilled Barracuda", price: 45, description: "Lemon garlic marinade, mashed potato, greens" }
  ],
  beach_club: [
    { name: "Sunset Arrack Sour", price: 18, description: "Ceylon Arrack, lime, ginger, egg white" },
    { name: "Coconut Mojito", price: 16, description: "White rum, fresh coconut water, mint, lime" },
    { name: "Spicy Tuna Tacos", price: 22, description: "Fresh tuna tartare, spicy mayo, crispy wonton shell" }
  ],
  rooftop_cafe: [
    { name: "Acai Berry Bowl", price: 18, description: "Amazonian acai, granola, bee pollen, tropical fruits" },
    { name: "Cold Brew Coconut", price: 12, description: "Single origin cold brew coffee, fresh king coconut water" },
    { name: "Avocado & Hummus Tartine", price: 20, description: "Sourdough, beetroot hummus, avocado rose, dukkah" }
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
    image: "kabalana_beach_drone_shot"
  },
  {
    id: 4,
    title: "Turtle Hatchery Visit",
    date: "Mondays, 10:00 AM",
    description: "Visit the local conservation center and help release baby turtles into the ocean.",
    image: "kabalana_beach_drone_shot"
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
