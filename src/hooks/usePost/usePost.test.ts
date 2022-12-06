import { renderHook } from "@testing-library/react";
import { currentPostMock } from "../../mocks/handlers";
import ProviderWrapper from "../../mocks/ProwiderWrapper";
import { mockInitialStore } from "../../mocks/storeMock";
import { loadOnePostActionCreator } from "../../redux/features/postSlice/postSlice";
import {
  hiddenLoadingActionCreator,
  showLoadingActionCreator,
} from "../../redux/features/uiSlice/uiSlice";

import usePost from "./usePost";

const dispatchSpy = jest.spyOn(mockInitialStore, "dispatch");
afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the custom hook usePos", () => {
  describe("When it's methodt loadPost is invoked", () => {
    test("Then dispatch should be called error with showModalActionCreator", async () => {
      const {
        result: {
          current: { loadPosts },
        },
      } = renderHook(() => usePost(), {
        wrapper: ProviderWrapper,
      });

      await loadPosts({});

      expect(dispatchSpy).toBeCalled();
    });
  });
});

describe("Given the custom hook usePost", () => {
  describe("When it's methodt getPostById invoked", () => {
    test("Then its should called the dispatch resolve", async () => {
      const {
        result: {
          current: { getPostById },
        },
      } = renderHook(() => usePost(), {
        wrapper: ProviderWrapper,
      });

      await getPostById(currentPostMock.id);

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        1,
        showLoadingActionCreator()
      );

      expect(dispatchSpy).toHaveBeenNthCalledWith(
        2,
        loadOnePostActionCreator(currentPostMock)
      );
      expect(dispatchSpy).toHaveBeenNthCalledWith(
        3,
        hiddenLoadingActionCreator()
      );
    });
  });

  describe("When it's methodt getPostByID invoked", () => {
    test("Then its should dispatch should be called with showLoadingActionCreator", async () => {
      const {
        result: {
          current: { getPostById },
        },
      } = renderHook(() => usePost(), {
        wrapper: ProviderWrapper,
      });
      const id = "6388c3df08d4c054bd2e59e9";

      await getPostById(id);

      expect(dispatchSpy).toHaveBeenCalledWith(showLoadingActionCreator());
    });
  });
  describe("and Axios return an error", () => {
    test("Then dispatch should be called with error", async () => {
      const {
        result: {
          current: { deletePost },
        },
      } = renderHook(() => usePost(), {
        wrapper: ProviderWrapper,
      });
      const id = "6388c3df08d4c054bd2e59e";
      await deletePost(id);

      expect(dispatchSpy).toBeCalled();
    });
  });

  describe("When its method deletePost is invoked with id", () => {
    test("Then its should dispatch should be called", async () => {
      const {
        result: {
          current: { deletePost },
        },
      } = renderHook(() => usePost(), {
        wrapper: ProviderWrapper,
      });

      const id = "6388c3df08d4c054bd2e59e9";

      await deletePost(id);

      expect(dispatchSpy).toBeCalled();
    });
  });

  describe("When its method deletePost is invoked with id incorrect", () => {
    test("Then its should dispatch should be called", async () => {
      const {
        result: {
          current: { deletePost },
        },
      } = renderHook(() => usePost(), {
        wrapper: ProviderWrapper,
      });

      const id = "12345";

      await deletePost(id);

      expect(dispatchSpy).toBeCalled();
    });
  });

  describe("When its method createPost is invoked with a post", () => {
    test("Then dispatch should be called  with an error", async () => {
      const {
        result: {
          current: { createPost },
        },
      } = renderHook(() => usePost(), {
        wrapper: ProviderWrapper,
      });
      const post = new FormData();
      post.append("title", "");
      post.append("description", "hola");
      await createPost(post);
      expect(dispatchSpy).toBeCalled();
    });
  });

  describe("When its method createPost is invoked with  a post", () => {
    test("Then dispatch should be called the ditpatch", async () => {
      const {
        result: {
          current: { createPost },
        },
      } = renderHook(() => usePost(), {
        wrapper: ProviderWrapper,
      });

      const post = new FormData();
      post.append("title", "");
      post.append("description", "");

      await createPost(post);

      expect(dispatchSpy).toBeCalled();
    });
  });

  describe("When its method updatePost is invoked with  a post", () => {
    test("Then dispatch should be called the ditpatch with correct", async () => {
      const {
        result: {
          current: { upddatePost },
        },
      } = renderHook(() => usePost(), {
        wrapper: ProviderWrapper,
      });

      const id = "12345";
      const post = new FormData();
      post.append("title", "");
      post.append("description", "");

      await upddatePost(post, id);

      expect(dispatchSpy).toBeCalled();
    });
  });

  describe("When its method updatePost is invoked with  a post modify", () => {
    test("Then dispatch should be called the ditpatch with error", async () => {
      const {
        result: {
          current: { upddatePost },
        },
      } = renderHook(() => usePost(), {
        wrapper: ProviderWrapper,
      });

      const id = "12345";
      const post = new FormData();
      post.append("title", "");
      post.append("description", "");

      await upddatePost(post, id);

      expect(dispatchSpy).toBeCalled();
    });
  });
});
