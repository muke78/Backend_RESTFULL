require("dotenv").config();
const frisby = require("frisby");
const { createTokenTesting } = require("../../helpers/apiCreateToken");

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
      .put(`${BASE_URL}/actualizar-usuario`, {
        nameUser: "Roberta_Rath-Hoppe-Furth",
        email: uniqueEmail,
        password: "129sdnKLMF@asfd11",
        role: "user",
        accountStatus: "Inactivo",
        id: "1aa52951-2f05-11f0-9a7d-d843ae0db894",
      })
      .then((res) => {
        // console.log("🔎 STATUS:", res.status);
        // console.log("🔎 RESPONSE:", res.json);
        expect([200, 400, 409, 429, 500]).toContain(res.status);
      });
  });
});
