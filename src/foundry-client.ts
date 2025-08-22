import { createPlatformClient } from "@osdk/client";
import * as path from "path";
import * as dotenv from "dotenv";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const token = process.env.FOUNDRY_TOKEN;
if (!token) {
  throw new Error("FOUNDRY_TOKEN is not set in environment variables");
}

export const foundryClient = createPlatformClient(
  "https://blumen.palantirfoundry.de",
  async () => token
);
