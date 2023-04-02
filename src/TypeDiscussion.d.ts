export type Discussions = Discussion[];
export interface Discussion {
  id: string;
  createdAt: string;
  title: string;
  url: string;
  author: string;
  answer?: object | null;
  bodyHTML: string;
  avatarUrl:string;
}
