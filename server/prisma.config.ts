import "dotenv/config";
import { defineConfig, env } from "prisma/config";

// This file tells Prisma where our schema is
// and where to get the MySQL connection URL.
export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations"
  },
  datasource: {
    url: env("DATABASE_URL")
  }
});