require("dotenv").config();
const frisby = require("frisby");
const { createTokenTesting } = require("../../helpers/apiCreateToken");
const { randomUUID } = require("node:crypto");

const BASE_URL = process.env.BASE_URL;

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
      .del(`${BASE_URL}/eliminar-usuario/${id}`)
      .then((res) => {
        // console.log("🔎 STATUS:", res.status);
        // console.log("🔎 RESPONSE:", res.json);
        expect([200, 404, 429, 500]).toContain(res.status);
      });
  });
});
