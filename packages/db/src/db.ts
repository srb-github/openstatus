import { drizzle } from "drizzle-orm/libsql/http";

import { env } from "../env.mjs";
import * as schema from "./schema";

// Use placeholder URL during build time when env vars aren't available
const DATABASE_URL = env.DATABASE_URL || "libsql://placeholder.turso.io";
const DATABASE_AUTH_TOKEN = env.DATABASE_AUTH_TOKEN || "";

export const db = drizzle({
  connection: {
    url: DATABASE_URL,
    authToken: DATABASE_AUTH_TOKEN,
  },
  schema,
});
