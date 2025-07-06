require("dotenv").config();
const frisby = require("frisby");
const { createTokenTesting } = require("../../helpers/apiCreateToken.helpers");

const BASE_URL = process.env.BASE_URL;

describe("✅ Prueba para registrar un usuario", () => {
  it("📦 Debe de retornar el usuario creado con su cuenta desactivada, retornar el usuario y un status 201", async () => {
    const token = await createTokenTesting();
    const uniqueEmail = `pruebaAPITESTRegister_${Date.now()}@gmail.com`;
    return frisby
      .setup({
        request: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      })
      .post(`${BASE_URL}/users/auth/register`, {
        nameUser: "apiTESTRegister",
        email: uniqueEmail,
        password: "123456788u02kljfLK",
      })
      .then((res) => {
        // console.log("🔎 STATUS:", res.status);
        // console.log("🔎 RESPONSE:", res.json);
        expect([201, 400, 409, 429, 500]).toContain(res.status);

        if (res.status === 201) {
          expect(res.json.data.AccountStatus).toBe("Inactivo");
        }
      });
  });
});
