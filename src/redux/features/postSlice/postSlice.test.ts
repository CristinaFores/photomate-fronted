import {
  loadOnePostActionCreator,
  loadPostActionCreator,
  postsReducer,
} from "./postSlice";
import { Post, PostsState } from "./types";

describe("Given postSlice", () => {
  describe("When it recives a action creator loadPost", () => {
    test("Then it should return a new state the posts", () => {
      const posts: Post[] = [
        {
          id: "1",
          owner: "1",
          title: "new post",
          description: "",
          imagePaths: [],
        },
      ];

      const initialState: PostsState = {
        posts: [],
        post: posts[1],
      };
      const expectedState: PostsState = {
        posts: posts,
        post: posts[1],
      };

      const expectLoadpost = postsReducer(
        initialState,
        loadPostActionCreator(expectedState.posts)
      );
      expect(posts).toStrictEqual(expectLoadpost.posts);
    });

    describe("When it recives a action creator loadPost", () => {
      test("Then it should return a new state the posts", () => {
        const posts: Post[] = [
          {
            id: "1",
            owner: "1",
            title: "new post",
            description: "",
            imagePaths: [],
          },
        ];

        const initialState: PostsState = {
          posts: [],
          post: posts[1],
        };
        const expectedState: PostsState = {
          posts: posts,
          post: posts[1],
        };

        const expectLoadpost = postsReducer(
          initialState,
          loadOnePostActionCreator(expectedState.post)
        );
        expect(posts[1]).toStrictEqual(expectLoadpost.post);
      });
    });
  });
});
