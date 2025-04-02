const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  "http://localhost:5173/login",
];

const corsMiddleware = (req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Vary", "Origin");
  
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
};

export { corsMiddleware };
