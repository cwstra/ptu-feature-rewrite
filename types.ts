export type Entry = {
  name: string;
  image?: string;
  tags?: string[];
  prerequisites?: string;
  frequency: string;
  trigger?: string;
  target?: string;
  effect: string;
  note?: string;
  seeAlso?: string[];
  extraFields?: Record<string, string>;
  book: string;
  pageNum: number;
};
