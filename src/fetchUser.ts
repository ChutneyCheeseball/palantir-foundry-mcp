import { createPlatformClient } from "@osdk/client";
import { Users } from "@osdk/foundry.admin";
import * as path from 'path';

import * as dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../.env'),  });

const token = process.env.FOUNDRY_TOKEN;
if (!token) {
    throw new Error('FOUNDRY_TOKEN is not set in environment variables');
}

const client = createPlatformClient("https://blumen.palantirfoundry.de", async () => token);

export async function fetchCurrentUser() {
    const currentUser = await Users.getCurrent(client);
    return currentUser;
}

export async function listUsers(pageSize = 10, pageToken?: string) {
    const users = await Users.list(client, { pageSize, pageToken });
    return users;
}

export async function searchUsers(query: string, pageSize = 50, pageToken?: string) {
  const response = await Users.search(client, {
    where: {
      type: "queryString",
      value: query,
    },
    pageSize,
    pageToken,
  });

  return response;
}