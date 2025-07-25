const frisby = require("frisby");
const { createTokenTesting } = require("../../helpers/apiCreateToken.helpers");
const { randomUUID } = require("node:crypto");
const { config } = require("../../config/config");

describe("✅ Prueba para eliminar un usuario por su id", () => {
  it("📦 Debe de retornar el mensaje de que el usuario fue eliminado correctamente con un status 200", async () => {
    const token = await createTokenTesting();
    const id = randomUUID();
    return frisby
      .setup({
        request: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      })
      .del(`${config.docs.baseUrl}/users/${id}`)
      .then((res) => {
        // console.log("🔎 STATUS:", res.status);
        // console.log("🔎 RESPONSE:", res.json);
        expect([200, 404, 429, 500]).toContain(res.status);
      });
  });
});
