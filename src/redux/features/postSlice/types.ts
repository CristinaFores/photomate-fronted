interface Post {
  id: string;
  user: string;
  title: string;
  description: string;
  location: string;
  image?: [];
  date?: string;
  tags?: [];
  like?: [];
}

export interface PostState {
  posts: Post[];
  post: Post;
}
