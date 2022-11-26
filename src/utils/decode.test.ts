import { JwtPayloadCustom } from "./types";
import jwtDecode from "jwt-decode";

describe("Given a decodeToken funcion", () => {
  describe("When it's called with a token encode", () => {
    test("Then it should  un objecto son el token descodificado , la id, y el nombre del usuario", () => {
      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImNyaXN0aW5hIiwiaWQiOiIxMjM0NTY3ODkiLCJpYXQiOjE2NjgyNjkxNzksImV4cCI6MTY2ODQ0MTk3OX0.SscRMw9fHjIbNR-cd9NjzCxz-AUUpJ1YSQjZghZOcwo";

      const jwtPayload: JwtPayloadCustom = jwtDecode(token);

      const expectedId = "123456789";

      expect(jwtPayload.id).toStrictEqual(expectedId);
    });
  });
});
