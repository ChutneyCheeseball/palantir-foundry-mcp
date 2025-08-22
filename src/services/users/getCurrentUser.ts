import { Users } from "@osdk/foundry.admin";
import { foundryClient as client } from "../../foundry-client";

export async function getCurrentUser() {
  return Users.getCurrent(client);
}
