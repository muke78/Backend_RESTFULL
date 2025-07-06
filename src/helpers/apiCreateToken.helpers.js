require("dotenv").config();
const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

const payload = {
  id: "4383b114-2672-11f0-b8d7-d843ae0db894",
  nameUser: "Erick Gonzalez",
  email: "muke7881@gmail.com",
  profilePicture:
    "https://i.pinimg.com/736x/13/94/a2/1394a25342955f0613ba77a39947660f.jpg",
  role: "admin",
  accountType: "normal",
  lastLogin: "2025-05-05 00:57:17",
  accountStatus: "Activo",
};

// Token válido por solo 1 minutos
const createTokenTesting = () => {
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};

module.exports = { createTokenTesting };
