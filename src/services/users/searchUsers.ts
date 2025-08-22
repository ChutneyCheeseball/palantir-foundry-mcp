import { Users } from "@osdk/foundry.admin";
import { foundryClient as client } from "../../foundry-client";

export async function searchUsers(query: string, pageSize = 10, pageToken?: string) {
  return Users.search(client, {
    where: {
      type: "queryString",
      value: query,
    },
    pageSize,
    pageToken,
  });
}
