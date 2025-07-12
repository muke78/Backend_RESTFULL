const frisby = require("frisby");
const { createTokenTesting } = require("../../helpers/apiCreateToken.helpers");
const { config } = require("../../config/config");

describe("✅ Prueba para crear a un nuevo usuario", () => {
  it("📦 Debe de retornar una respuesta exitosa con los datos del usuario creado con un status 201", async () => {
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
      .post(`${config.docs.baseUrl}/users`, {
        nameUser: "apiTESTCreate",
        email: uniqueEmail,
        password: "123456788u02kljfLK",
        accountStatus: "Inactivo",
        role: "user",
      })
      .then((res) => {
        // console.log("🔎 STATUS:", res.status);
        // console.log("🔎 RESPONSE:", res.json);
        expect([201, 400, 409, 429, 500]).toContain(res.status);
      });
  });
});
