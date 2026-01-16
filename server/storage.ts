import { db } from "./db";
import { type User, type InsertUser, type Inquiry, type InsertInquiry, type Booking, type InsertBooking, type SessionBooking, type InsertSessionBooking, type ActivityBooking, type InsertActivityBooking, type BoutiqueInquiry, type InsertBoutiqueInquiry, users, inquiries, bookings, sessionBookings, activityBookings, boutiqueInquiries } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createInquiry(inquiry: InsertInquiry): Promise<Inquiry>;
  getAllInquiries(): Promise<Inquiry[]>;
  
  createBooking(booking: InsertBooking): Promise<Booking>;
  getAllBookings(): Promise<Booking[]>;
  
  createSessionBooking(sessionBooking: InsertSessionBooking): Promise<SessionBooking>;
  getAllSessionBookings(): Promise<SessionBooking[]>;
  
  createActivityBooking(activityBooking: InsertActivityBooking): Promise<ActivityBooking>;
  getAllActivityBookings(): Promise<ActivityBooking[]>;
  
  createBoutiqueInquiry(boutiqueInquiry: InsertBoutiqueInquiry): Promise<BoutiqueInquiry>;
  getAllBoutiqueInquiries(): Promise<BoutiqueInquiry[]>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  async createInquiry(inquiry: InsertInquiry): Promise<Inquiry> {
    const [newInquiry] = await db.insert(inquiries).values(inquiry).returning();
    return newInquiry;
  }

  async getAllInquiries(): Promise<Inquiry[]> {
    return await db.select().from(inquiries).orderBy(inquiries.createdAt);
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const [newBooking] = await db.insert(bookings).values(booking).returning();
    return newBooking;
  }

  async getAllBookings(): Promise<Booking[]> {
    return await db.select().from(bookings).orderBy(bookings.createdAt);
  }

  async createSessionBooking(sessionBooking: InsertSessionBooking): Promise<SessionBooking> {
    const [newSessionBooking] = await db.insert(sessionBookings).values(sessionBooking).returning();
    return newSessionBooking;
  }

  async getAllSessionBookings(): Promise<SessionBooking[]> {
    return await db.select().from(sessionBookings).orderBy(sessionBookings.createdAt);
  }

  async createActivityBooking(activityBooking: InsertActivityBooking): Promise<ActivityBooking> {
    const [newActivityBooking] = await db.insert(activityBookings).values(activityBooking).returning();
    return newActivityBooking;
  }

  async getAllActivityBookings(): Promise<ActivityBooking[]> {
    return await db.select().from(activityBookings).orderBy(activityBookings.createdAt);
  }

  async createBoutiqueInquiry(boutiqueInquiry: InsertBoutiqueInquiry): Promise<BoutiqueInquiry> {
    const [newBoutiqueInquiry] = await db.insert(boutiqueInquiries).values(boutiqueInquiry).returning();
    return newBoutiqueInquiry;
  }

  async getAllBoutiqueInquiries(): Promise<BoutiqueInquiry[]> {
    return await db.select().from(boutiqueInquiries).orderBy(boutiqueInquiries.createdAt);
  }
}

export const storage = new DatabaseStorage();
