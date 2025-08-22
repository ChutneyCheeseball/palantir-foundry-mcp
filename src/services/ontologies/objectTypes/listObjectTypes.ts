import { ObjectTypesV2 } from "@osdk/foundry.ontologies";
import { foundryClient as client } from "../../../foundry-client";

export async function listObjectTypes(ontology: string, pageSize = 10, pageToken?: string) {
  return ObjectTypesV2.list(client, ontology, { pageSize, pageToken });
}
