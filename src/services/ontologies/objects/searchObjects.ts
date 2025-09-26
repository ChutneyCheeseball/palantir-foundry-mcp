import { OntologyObjectsV2 } from "@osdk/foundry.ontologies";
import { foundryClient as client } from "../../../foundry-client";

export async function searchObjects(
  ontology: string,
  objectType: string,
  queryParams: {
    where?: any;
    orderBy?: any;
    pageSize?: number;
    pageToken?: string;
    select: string[];
  } = { select: [], pageSize: 10 }
) {
  return OntologyObjectsV2.search(client, ontology, objectType, queryParams);
}
