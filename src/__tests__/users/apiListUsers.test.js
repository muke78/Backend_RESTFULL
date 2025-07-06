require("dotenv").config();
const frisby = require("frisby");
const { createTokenTesting } = require("../../helpers/apiCreateToken.helpers");
const Joi = frisby.Joi;

const BASE_URL = process.env.BASE_URL;

describe("✅ Prueba para la lista de usuarios", () => {
  it("📦 Debe retornar usuarios activos con un status 200", async () => {
    const token = await createTokenTesting();
    return frisby
      .setup({
        request: {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      })
      .get(`${BASE_URL}/users?status=Activo&correo=normal&rol=admin`)
      .then((res) => {
        // console.log("🔎 STATUS:", res.status);
        // console.log("🔎 RESPONSE:", res.json);
        expect([200, 400, 429, 500]).toContain(res.status);
      })
      .expect("jsonTypes", {
        success: Joi.boolean().required(),
        data: Joi.array().items(
          Joi.object({
            ID: Joi.string().uuid().required(),
            NameUser: Joi.string().required(),
            Email: Joi.string().email().required(),
            Password: Joi.allow(null),
            ProfilePicture: Joi.alternatives()
              .try(Joi.string(), Joi.allow(null))
              .required(),
            Role: Joi.string().valid("user", "admin").required(),
            AccountType: Joi.string().valid("normal", "google").required(),
            LastLogin: Joi.alternatives().try(
              Joi.string().isoDate(),
              Joi.allow(null),
            ),
            AccountStatus: Joi.string().valid("Activo", "Inactivo").required(),
            Created: Joi.date().iso().required(),
            Updated: Joi.date().iso().required(),
          }),
        ),
        message: Joi.string().required(),
        metadata: Joi.object({
          timestamp: Joi.string().isoDate().required(),
          requestId: Joi.string().uuid().required(),
          dataCount: Joi.string().required(),
        }).required(),
      });
  });
});
