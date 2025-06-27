import { createPlatformClient } from "@osdk/client";
import { Users } from "@osdk/foundry.admin";

import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const token = process.env.FOUNDRY_TOKEN;
if (!token) {
    throw new Error('FOUNDRY_TOKEN is not set in environment variables');
}

const client = createPlatformClient("https://blumen.palantirfoundry.de", async () => token);

async function fetchCurrentUser() {
    const currentUser = await Users.getCurrent(client);
    console.log(JSON.stringify(currentUser, null, 2));
}

async function listUsers() {
    const users = await Users.list(client);
    console.log(JSON.stringify(users, null, 2));
}

async function fetchUserRaw() {
    const USER_ID = '80c131a7-5815-4930-9215-93f4af8c3278';
    const API_URL = `https://blumen.palantirfoundry.de/api/v2/admin/users/${USER_ID}`;
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        });

        console.log('User info:', JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
}

listUsers();