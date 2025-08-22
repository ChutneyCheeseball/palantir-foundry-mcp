import { OntologiesV2 } from "@osdk/foundry.ontologies";
import { foundryClient as client } from "../../foundry-client";

export async function getOntology(ontology: string) {
  return OntologiesV2.get(client, ontology);
}
