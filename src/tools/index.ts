import { listOntologiesTool } from "./ontologies/listOntologiesTool";
import { getCurrentUserTool } from "./users/getCurrentUserTool";
import { getUserByIdTool } from "./users/getUserByIdTool";
import { listUsersTool } from "./users/listUsersTool";
import { searchUsersTool } from "./users/searchUsersTool";

const userTools = [getCurrentUserTool, getUserByIdTool, listUsersTool, searchUsersTool];
const ontologyTools = [listOntologiesTool];

export const tools = [...userTools, ...ontologyTools];
