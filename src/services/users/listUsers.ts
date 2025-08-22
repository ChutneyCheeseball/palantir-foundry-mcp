import { Users } from "@osdk/foundry.admin";
import { foundryClient as client } from "../../foundry-client";

export async function listUsers(pageSize = 10, pageToken?: string) {
  return Users.list(client, { pageSize, pageToken });
}
