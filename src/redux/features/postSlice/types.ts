export interface Post {
  id: string;
  owner: string;
  title: string;
  description: string;
  location?: string;
  imagePaths?: [];
  date?: string;
  tags?: [];
  like?: [];
}

export interface PostsState {
  posts: Post[];
  post: Post;
}
