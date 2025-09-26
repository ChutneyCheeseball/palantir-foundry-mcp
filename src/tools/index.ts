import { getOntologyTool } from "./ontologies/getOntologyTool";
import { listOntologiesTool } from "./ontologies/listOntologiesTool";
import { getObjectTool } from "./ontologies/objects/getObjectTool";
import { listObjectsTool } from "./ontologies/objects/listObjectsTool";
import { listObjectTypesTool } from "./ontologies/objectTypes/listObjectTypesTool";
import { getCurrentUserTool } from "./users/getCurrentUserTool";
import { getUserByIdTool } from "./users/getUserByIdTool";
import { listUsersTool } from "./users/listUsersTool";
import { searchUsersTool } from "./users/searchUsersTool";

// ADMIN
const userTools = [getCurrentUserTool, getUserByIdTool, listUsersTool, searchUsersTool];

// ONTOLOGIES
const ontologyTools = [listOntologiesTool, getOntologyTool];
const objectTypeTools = [listObjectTypesTool];
const objectTools = [listObjectsTool, getObjectTool];

export const tools = [...userTools, ...ontologyTools, ...objectTypeTools, ...objectTools];
