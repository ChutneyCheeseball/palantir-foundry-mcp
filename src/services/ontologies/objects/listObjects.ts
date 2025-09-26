import { OntologyObjectsV2 } from "@osdk/foundry.ontologies";
import { foundryClient as client } from "../../../foundry-client";

type ListObjectsOptions = {
  pageSize?: number;
  pageToken?: string;
  select: string[];
  orderBy?: string;
};

export async function listObjects(
  ontology: string,
  objectType: string,
  options: ListObjectsOptions = { pageSize: 10, select: [] }
) {
  return OntologyObjectsV2.list(client, ontology, objectType, {
    pageSize: options.pageSize ?? 10,
    pageToken: options.pageToken,
    select: options.select,
    orderBy: options.orderBy,
  });
}
