import { OntologyObjectsV2 } from "@osdk/foundry.ontologies";
import { foundryClient as client } from "../../../foundry-client";

export async function searchObjects(
  ontology: string,
  objectType: string,
  body: {
    where?: any; // SearchJsonQueryV2
    orderBy?: {
      orderType?: "fields" | "relevance";
      fields: { field: string; direction?: "asc" | "desc" }[];
    };
    pageSize?: number;
    pageToken?: string;
    select: string[];
    excludeRid?: boolean;
    snapshot?: boolean;
  },
  queryParams?: {
    artifactRepository?: string;
    packageName?: string;
  }
) {
  return OntologyObjectsV2.search(
    client,
    ontology,
    objectType,
    {
      ...body,
      pageSize: body.pageSize ?? 10, // enforce default
    },
    queryParams
  );
}
