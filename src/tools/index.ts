import { getOntologyTool } from "./ontologies/getOntologyTool";
import { listOntologiesTool } from "./ontologies/listOntologiesTool";
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

export const tools = [...userTools, ...ontologyTools, ...objectTypeTools];
