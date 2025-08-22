import { OntologiesV2 } from "@osdk/foundry.ontologies";
import { foundryClient as client } from "../../foundry-client";

export async function listOntologies() {
  return OntologiesV2.list(client);
}
