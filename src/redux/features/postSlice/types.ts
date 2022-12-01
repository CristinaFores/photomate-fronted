export interface Post {
  id: string;
  owner: string;
  title: string;
  description: string;
  location?: string;
  imagePaths: string[];
  date?: string;
  tags?: [];
  like?: [];
}

export interface PostsState {
  posts: Post[];
  post: Post;
}
