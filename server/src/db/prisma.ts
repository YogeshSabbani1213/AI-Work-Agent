import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../src/generated/prisma/client.js";

// Create a MySQL/MariaDB driver adapter.
// The adapter uses our existing MySQL server.
const adapter = new PrismaMariaDb({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "ai_work_agent",
  connectionLimit: 5
});

// Prisma 7 requires a driver adapter when creating PrismaClient.
const prisma = new PrismaClient({
  adapter
});

export default prisma;