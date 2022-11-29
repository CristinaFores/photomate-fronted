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
        post: [],
      };
      const expectedState: PostsState = {
        post: posts,
      };

      const expectLoadpost = postsReducer(
        initialState,
        loadPostActionCreator(expectedState.post)
      );
      expect(initialState.post).toStrictEqual(expectLoadpost.post);
    });
  });
});
