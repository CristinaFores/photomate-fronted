export interface Post {
  id: string;
  owner: {
    username: string;
    id?: string;
  };
  title: string;
  description: string;
  location?: string;
  imagePaths: string[];
  buckpicture?: string[];
  date?: string;
  tags?: [];
  like?: [];
}

export interface PostsState {
  posts: Post[];
  post: Post;
  total: number;
}
