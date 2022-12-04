export interface newPost {
  image: string[];
  title: string;
  description: string;
  location?: string;
  imagePaths?: string[];
  id: string;
  owner: string;
  date?: string;
  tags?: [];
  like?: [];
}
