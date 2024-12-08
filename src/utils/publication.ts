export interface Publication {
  type: string;
  title: string;
  author: string[];
  venue: string;
  year: number;
  note?: string;
  paper: string;
  code?: string;
  marked?: boolean;
}

// For sorting "Everything Else" < "ICLR" < "AISTATS" < "ICML" < "UAI" < "NeurIPS"
const CONF_VALS: Record<string, number> = {
  ICLR: 1,
  AISTATS: 2,
  ICML: 3,
  UAI: 4,
  NeurIPS: 5,
};
function getConfVal(conf: string): number {
  if (conf in CONF_VALS) {
    return CONF_VALS[conf];
  } else {
    return 0;
  }
}

export function sortPublicationFn(pub1: Publication, pub2: Publication): number {
  return pub2.year - pub1.year || getConfVal(pub2.venue) - getConfVal(pub1.venue);
}
