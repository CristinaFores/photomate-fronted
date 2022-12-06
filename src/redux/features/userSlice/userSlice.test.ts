import { UserState } from "./types";
import {
  loginUserActionCreator,
  userLogoutActionCreator,
  userReducer,
} from "./userSlice";

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

  describe("When its reducer userLogout is invoked", () => {
    test("Then the userState should return to its initial state", () => {
      const currentState: UserState = {
        id: "",
        isLogged: true,
        token: "",
        username: "",
      };
      const expectedStated: UserState = {
        id: "",
        isLogged: false,
        token: "",
        username: "",
      };

      const newState = userReducer(currentState, userLogoutActionCreator());

      expect(newState).toStrictEqual(expectedStated);
    });
  });
});
