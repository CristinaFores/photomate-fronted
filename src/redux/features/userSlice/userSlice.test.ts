import { UserState } from "./types";
import { loginUserActionCreator, userReducer } from "./userSlice";

describe("Given a userReducer", () => {
  describe("When it receives the initial state and a login user action with a new user", () => {
    test("Then it should return the state with the users credentials and isLogged true", () => {
      const newUser: UserState = {
        id: "",
        token: "",
        username: "",
        isLogged: true,
      };

      const expectedState: UserState = {
        ...newUser,
        isLogged: true,
      };

      const newState = userReducer(newUser, loginUserActionCreator(newUser));

      expect(newState).toStrictEqual(expectedState);
    });
  });
});
