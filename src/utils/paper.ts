export interface Paper {
  id: string;
  title: string;
  authors: Author[];
  venue: Venue;
  status: string;
  abstract: string;
  keywords: string[];
  paper_url: string;
  pdf_url: string;
  reviewers: Reviewer[];
  decision: string;
  decision_date: string; // ISO 8601 date string
  revisions: string[]; // List of revisions, if any
  acceptance_letter: AcceptanceLetter;
  metadata: Metadata;
  citations: Citation[];
  comments: Comment[];
}

export interface Author {
  id: string;
  name: string;
  email: string;
  affiliation: string;
}

interface Reviewer {
  id: string;
  name: string;
  score: number;
  comments: string;
}

interface Venue {
  id: string;
  name: string;
  year: number;
}

interface Citation {
  paper_id: string;
  title: string;
  authors: string[];
  year: number;
}

interface Comment {
  id: string;
  author: string;
  comment: string;
  date: string;
}

interface AcceptanceLetter {
  id: string;
  content: string;
  date: string;
}

interface Metadata {
  created_at: string; // Timestamp of when the paper was created
  updated_at: string; // Timestamp of when the paper was last updated
  submission_type: string; // e.g., 'Regular Paper', 'Short Paper', etc.
  conference_url: string; // URL to the conference details
}
