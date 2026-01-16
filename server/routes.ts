import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertInquirySchema, insertBookingSchema, insertSessionBookingSchema, insertActivityBookingSchema, insertBoutiqueInquirySchema } from "@shared/schema";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Contact form submission
  app.post("/api/inquiries", async (req, res) => {
    try {
      const validatedData = insertInquirySchema.parse(req.body);
      const inquiry = await storage.createInquiry(validatedData);
      res.status(201).json(inquiry);
    } catch (error) {
      res.status(400).json({ error: "Invalid inquiry data" });
    }
  });

  // Get all inquiries (for admin)
  app.get("/api/inquiries", async (req, res) => {
    try {
      const inquiries = await storage.getAllInquiries();
      res.json(inquiries);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch inquiries" });
    }
  });

  // Booking submission
  app.post("/api/bookings", async (req, res) => {
    try {
      const validatedData = insertBookingSchema.parse(req.body);
      const booking = await storage.createBooking(validatedData);
      res.status(201).json(booking);
    } catch (error) {
      res.status(400).json({ error: "Invalid booking data" });
    }
  });

  // Get all bookings (for admin)
  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getAllBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });

  // Session booking submission
  app.post("/api/session-bookings", async (req, res) => {
    try {
      const validatedData = insertSessionBookingSchema.parse(req.body);
      const sessionBooking = await storage.createSessionBooking(validatedData);
      res.status(201).json(sessionBooking);
    } catch (error) {
      res.status(400).json({ error: "Invalid session booking data" });
    }
  });

  // Get all session bookings (for admin)
  app.get("/api/session-bookings", async (req, res) => {
    try {
      const sessionBookings = await storage.getAllSessionBookings();
      res.json(sessionBookings);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch session bookings" });
    }
  });

  // Activity booking submission (DJ nights, etc.)
  app.post("/api/activity-bookings", async (req, res) => {
    try {
      const validatedData = insertActivityBookingSchema.parse(req.body);
      const activityBooking = await storage.createActivityBooking(validatedData);
      res.status(201).json(activityBooking);
    } catch (error) {
      res.status(400).json({ error: "Invalid activity booking data" });
    }
  });

  // Get all activity bookings (for admin)
  app.get("/api/activity-bookings", async (req, res) => {
    try {
      const activityBookings = await storage.getAllActivityBookings();
      res.json(activityBookings);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch activity bookings" });
    }
  });

  // Boutique inquiry submission
  app.post("/api/boutique-inquiries", async (req, res) => {
    try {
      const validatedData = insertBoutiqueInquirySchema.parse(req.body);
      const boutiqueInquiry = await storage.createBoutiqueInquiry(validatedData);
      res.status(201).json(boutiqueInquiry);
    } catch (error) {
      res.status(400).json({ error: "Invalid boutique inquiry data" });
    }
  });

  // Get all boutique inquiries (for admin)
  app.get("/api/boutique-inquiries", async (req, res) => {
    try {
      const boutiqueInquiries = await storage.getAllBoutiqueInquiries();
      res.json(boutiqueInquiries);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch boutique inquiries" });
    }
  });

  return httpServer;
}
