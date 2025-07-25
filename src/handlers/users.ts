import { Users } from "@osdk/foundry.admin";
import { foundryClient as client } from "../foundry-client";

export async function getCurrentUser() {
    const currentUser = await Users.getCurrent(client);
    return currentUser;
}

export async function getUserById(id: string) {
    try {
        const user = await Users.get(client, id);
        return user;
    } catch (error) {
        throw new Error(`Failed to get user by ID ${id}: ${error}`);
    }
}

export async function listUsers(pageSize = 10, pageToken?: string) {
    try {
        const users = await Users.list(client, { pageSize, pageToken });
        return users;
    } catch (error) {
        throw new Error(`Failed to list users: ${error}`);
    }
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