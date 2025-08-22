import { Users } from "@osdk/foundry.admin";
import { foundryClient as client } from "../../foundry-client";

export async function getUserById(id: string) {
  return Users.get(client, id);
}
