import { ObjectTypesV2 } from "@osdk/foundry.ontologies";
import { foundryClient as client } from "../../../foundry-client";

export async function getObjectType(ontology: string, objectType: string, branch?: string) {
  return ObjectTypesV2.get(client, ontology, objectType, { branch });
}
