export interface ProjectInput {
  title: string;
  description: string;
  thumbnail: string;
  githubUrl: string;
  liveLink: string;
  tags: string[];
  startDate?: Date;
  endDate?: Date;
}
