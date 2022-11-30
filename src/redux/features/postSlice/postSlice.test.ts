import { loadPostActionCreator, postsReducer } from "./postSlice";
import { PostsState } from "./types";

describe("Given postSlice", () => {
  describe("When it recives a action creator loadPost", () => {
    test("Then it should return a new state the posts", () => {
      const posts = [
        {
          id: "1",
          owner: "1",
          title: "new post",
          description: "",
        },
      ];

      const initialState: PostsState = {
        posts: [],
      };
      const expectedState: PostsState = {
        posts: posts,
      };

      const expectLoadpost = postsReducer(
        initialState,
        loadPostActionCreator(expectedState.posts)
      );
      expect(posts).toStrictEqual(expectLoadpost.posts);
    });
  });
});
