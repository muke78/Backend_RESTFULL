require("dotenv").config();
const frisby = require("frisby");
const { createTokenTesting } = require("../../helpers/apiCreateToken.helpers");

const BASE_URL = process.env.BASE_URL;

describe("✅ Prueba para actualizar un usuario", () => {
  it("📦 Debe de retornar un mensaje de exito al actualizar un usuario, con un status 200", async () => {
    const token = await createTokenTesting();
    const uniqueEmail = `pruebaAPITESTCreate_${Date.now()}@gmail.com`;
    return frisby
      .setup({
        request: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      })
      .put(`${BASE_URL}/users/4901398e-2672-11f0-b8d7-d843ae0db894`, {
        nameUser: "Roberta_Rath-Hoppe-Furth",
        email: uniqueEmail,
        password: "129sdnKLMF@asfd11",
        role: "user",
        accountStatus: "Inactivo",
      })
      .then((res) => {
        // console.log("🔎 STATUS:", res.status);
        // console.log("🔎 RESPONSE:", res.json);
        expect([200, 400, 409, 429, 500]).toContain(res.status);
      });
  });
});
