import { OntologyObjectsV2 } from "@osdk/foundry.ontologies";
import { foundryClient } from "src/foundry-client";

export async function getObject(
  ontology: string,
  objectType: string,
  primaryKey: string,
  queryParams: { select: string[] } = { select: [] }
) {
  return OntologyObjectsV2.get(foundryClient, ontology, objectType, primaryKey, queryParams);
}
